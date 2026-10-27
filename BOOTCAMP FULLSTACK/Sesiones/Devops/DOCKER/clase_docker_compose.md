# Docker Compose: gestionar contenedores

## 1. Docker Run y Docker Compose: ¿qué diferencia hay?

En la práctica anterior usamos Docker directamente, por ejemplo con `docker run`. Ese comando es como **pedir una cosa concreta en el momento**: indica la imagen, los puertos, los volúmenes y otras opciones en una misma orden.

Docker Compose es más parecido a **guardar la receta por escrito**. Describes la configuración en un archivo `compose.yaml` y después usas comandos sencillos para crear, iniciar, parar o eliminar los recursos.

- **`docker run`**: creas y ejecutas un contenedor mediante un comando.
- **Docker Compose**: describes uno o varios servicios en un archivo y gestionas ese conjunto con comandos como `up`, `stop` y `down`.

Para un solo contenedor, `docker run` puede ser suficiente. Compose resulta cómodo cuando quieres repetir la configuración o gestionar varios servicios juntos. Por ejemplo, una aplicación puede necesitar un backend y una base de datos.

## 2. Comprobar Docker

Abre una terminal y ejecuta:

```bash
docker --version
docker compose version
docker info
```

Si `docker info` muestra un error indicando que no puede conectarse al daemon, abre Docker Desktop y espera a que esté iniciado.

## 3. Crear el proyecto y el archivo Compose

Crea una carpeta y entra en ella:

```bash
mkdir prueba-compose
cd prueba-compose
```

Dentro, crea un archivo llamado `compose.yaml` con este contenido:

```yaml
services:
  db:
    image: postgres:17
    environment:
      POSTGRES_USER: alumno
      POSTGRES_PASSWORD: local_123
      POSTGRES_DB: ejemplo
    ports:
      - "5432:5432"
    volumes:
      - datos_postgres:/var/lib/postgresql/data

volumes:
  datos_postgres:
```

PostgreSQL se usa solo como ejemplo. No necesitamos hacer SQL en esta práctica.

### ¿Qué significa?

- `services`: los servicios que Compose gestionará.
- `db`: nombre del servicio; lo elegimos nosotros.
- `image`: imagen utilizada para crear el contenedor.
- `environment`: variables de entorno para configurar el ejemplo.
- `ports`: conecta el puerto `5432` de tu ordenador con el `5432` del contenedor.
- `volumes`: indica qué volumen usará el contenedor.
- `datos_postgres:/var/lib/postgresql/data`: conecta el volumen llamado `datos_postgres` con la carpeta donde PostgreSQL guarda sus datos.
- El bloque `volumes` del final declara el volumen que Compose debe crear y gestionar.

## 4. ¿Qué es un volumen y para qué sirve?

Un contenedor se puede eliminar y crear de nuevo. Si los datos solo están guardados dentro de su sistema de archivos, pueden perderse al eliminarlo.

Un **volumen** permite guardar datos fuera del ciclo de vida del contenedor. Así, puedes eliminar el contenedor y crear otro que vuelva a utilizar el mismo volumen.

En nuestro archivo:

```yaml
volumes:
  - datos_postgres:/var/lib/postgresql/data
```

- `datos_postgres` es el volumen gestionado por Docker.
- `/var/lib/postgresql/data` es la ruta dentro del contenedor donde se guardan los datos.

El volumen se declara al final del archivo:

```yaml
volumes:
  datos_postgres:
```

**Importante:** `docker compose down` elimina los contenedores y la red del proyecto, pero normalmente conserva los volúmenes nombrados. `docker compose down -v` también elimina los volúmenes del proyecto y puede borrar los datos guardados en ellos. No lo ejecutes sin saber qué datos contiene.

Comandos útiles para consultar volúmenes:

```bash
docker volume ls
docker volume inspect prueba-compose_datos_postgres
```

El nombre exacto puede variar si el proyecto tiene otro nombre. Usa `docker volume ls` para ver el nombre real.

## 5. Crear e iniciar el contenedor

Desde la carpeta que contiene `compose.yaml`, ejecuta:

```bash
docker compose up -d
```

- `up`: crea los recursos necesarios e inicia el servicio.
- `-d`: lo deja ejecutándose en segundo plano.

Comprueba el resultado:

```bash
docker compose ps
docker ps
```

- `docker compose ps` muestra los contenedores del proyecto Compose.
- `docker ps` muestra todos los contenedores que están en ejecución.
- `docker ps -a` también muestra los contenedores detenidos.

## 6. Consultar los registros

Para ver los mensajes del servicio:

```bash
docker compose logs
```

Para seguir los mensajes en directo:

```bash
docker compose logs -f
```

Pulsa `Ctrl + C` para dejar de seguir los registros. Esto no detiene el contenedor.

Para consultar solo el servicio `db`:

```bash
docker compose logs db
```

## 7. Entrar dentro del contenedor

Abre una terminal dentro del contenedor del servicio `db`:

```bash
docker compose exec db sh
```

Ahora estás dentro del contenedor. Prueba:

```bash
whoami
```

Para salir:

```bash
exit
```

Esto cierra la terminal interactiva; no elimina el contenedor.

También puedes ejecutar un comando sin abrir una sesión interactiva:

```bash
docker compose exec db printenv POSTGRES_DB
```

## 8. Parar, iniciar y reiniciar

### Parar el servicio

```bash
docker compose stop
```

El contenedor queda creado, pero detenido.

### Volver a iniciarlo

```bash
docker compose start
```

### Reiniciarlo

```bash
docker compose restart
```

**Diferencia importante:** `stop` detiene el contenedor, pero no lo elimina.

## 9. Eliminar los contenedores del proyecto

Ejecuta:

```bash
docker compose down
```

Esto detiene y elimina los contenedores y la red creada por Compose para el proyecto. La imagen descargada normalmente se conserva. El volumen nombrado `datos_postgres` también se conserva.

Comprueba qué queda:

```bash
docker compose ps -a
docker images
docker volume ls
```

Para volver a crear e iniciar el servicio:

```bash
docker compose up -d
```

Compose puede reutilizar la imagen local si ya está descargada.

## 10. ¿Qué pasa si modifico `compose.yaml`?

Si cambias la configuración del archivo, aplica los cambios con:

```bash
docker compose up -d
```

Compose compara la configuración y puede recrear el contenedor si es necesario.

Para descargar la imagen indicada en el archivo y después iniciar el servicio:

```bash
docker compose pull
docker compose up -d
```

## 11. Si algo falla

### El puerto ya está ocupado

Cambia la sección `ports` por:

```yaml
ports:
  - "5433:5432"
```

Después ejecuta:

```bash
docker compose up -d
```

El puerto del ordenador será `5433`; el del contenedor seguirá siendo `5432`.

### No encuentra el archivo Compose

Comprueba que estás en la carpeta correcta:

```bash
ls
```

Debe aparecer `compose.yaml`.

### Docker no está iniciado

Abre Docker Desktop, espera a que termine de arrancar y prueba:

```bash
docker info
```

## Práctica final

Sin borrar el archivo `compose.yaml`, realiza estas tareas y comprueba el resultado con comandos:

1. Inicia el servicio en segundo plano.
2. Lista los servicios del proyecto.
3. Consulta los registros.
4. Entra en el contenedor y sal de él.
5. Lista los volúmenes y localiza el volumen del proyecto.
6. Detén el servicio y comprueba su estado.
7. Vuelve a iniciarlo y reinícialo.
8. Ejecuta `docker compose down`.
9. Comprueba que los contenedores se han eliminado y que el volumen sigue existiendo.
10. Ejecuta `docker compose up -d` y comprueba que el servicio vuelve a estar activo.

## Chuleta de comandos

| Comando | Para qué sirve |
|---|---|
| `docker compose up -d` | Crear e iniciar los servicios |
| `docker compose ps` | Ver el estado de los servicios del proyecto |
| `docker compose logs` | Consultar registros |
| `docker compose logs -f` | Seguir registros en directo |
| `docker compose exec db sh` | Abrir una terminal dentro del servicio |
| `docker compose stop` | Detener los contenedores |
| `docker compose start` | Iniciar contenedores ya creados |
| `docker compose restart` | Reiniciar los contenedores |
| `docker compose down` | Detener y eliminar contenedores y red; conserva volúmenes nombrados |
| `docker volume ls` | Listar los volúmenes |
| `docker compose pull` | Descargar las imágenes definidas |

## Documentación oficial

- [Docker Compose](https://docs.docker.com/compose/)
- [Comandos de Docker Compose](https://docs.docker.com/reference/cli/docker/compose/)
- [Referencia del archivo Compose](https://docs.docker.com/reference/compose-file/)
- [Volúmenes de Docker](https://docs.docker.com/engine/storage/volumes/)