# Chuleta rápida: Docker y Docker Compose

## 1. Comprobar Docker

| Comando                  | Significado                         |
| ------------------------ | ----------------------------------- |
| `docker --version`       | Versión del cliente Docker          |
| `docker compose version` | Versión de Docker Compose           |
| `docker info`            | Comprueba si Docker Engine responde |
| `docker run hello-world` | Prueba rápida de Docker             |

## 2. Ver imágenes y contenedores

| Comando | Significado |
|---|---|
| `docker images` | Lista las imágenes locales |
| `docker ps` | Contenedores en ejecución |
| `docker ps -a` | Todos los contenedores, incluidos los detenidos |

## 3. Crear y ejecutar contenedores con `docker run`

| Comando | Significado |
|---|---|
| `docker run hello-world` | Crea y ejecuta un contenedor de prueba |
| `docker run -it ubuntu bash` | Crea un contenedor interactivo de Ubuntu |
| `docker run -d --name mi-nginx nginx` | Crea y ejecuta Nginx en segundo plano |
| `docker run -d --name mi-web -p 8080:80 nginx` | Publica el puerto 80 del contenedor en el 8080 del ordenador |
| `docker run -d --name mi-web -p 8080:80 -v web_data:/usr/share/nginx/html nginx` | Ejemplo de contenedor con volumen nombrado |

**Opciones frecuentes:** `-d` = segundo plano · `-it` = terminal interactiva · `--name` = nombre · `-p` = publicar puerto · `-v` = montar volumen.

## 4. Logs y terminal

| Comando | Significado |
|---|---|
| `docker logs mi-nginx` | Muestra los registros del contenedor |
| `docker logs -f mi-nginx` | Sigue los registros en directo; `Ctrl+C` deja de seguirlos |
| `docker exec -it mi-nginx sh` | Abre una terminal dentro de un contenedor en marcha |
| `docker exec mi-nginx printenv` | Ejecuta un comando dentro del contenedor |

Algunas imágenes incluyen `sh`, pero no `bash`.

## 5. Detener, iniciar y eliminar

| Comando | Significado |
|---|---|
| `docker stop mi-nginx` | Detiene el contenedor |
| `docker start mi-nginx` | Inicia un contenedor existente |
| `docker restart mi-nginx` | Reinicia el contenedor |
| `docker rm mi-nginx` | Elimina un contenedor detenido |
| `docker rm -f mi-nginx` | Fuerza la eliminación del contenedor |
| `docker rmi nginx` | Elimina una imagen si no está en uso |

`stop` no elimina; `rm` elimina el contenedor; `run` crea uno nuevo.

## 6. Imágenes propias y Dockerfile

Desde la carpeta que contiene el `Dockerfile`:

| Comando o contenido | Significado |
|---|---|
| `docker build -t mi-web:v1 .` | Construye una imagen llamada `mi-web`, etiqueta `v1` |
| `docker images` | Comprueba las imágenes disponibles |

Ejemplo de `Dockerfile` para una web estática con Nginx:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

Ejecutar la imagen creada:

```bash
docker run -d --name mi-web -p 8080:80 mi-web:v1
```

Abre `http://localhost:8080`.

## 7. Docker Hub

| Comando | Significado |
|---|---|
| `docker login` | Inicia sesión en el registro |
| `docker tag mi-web:v1 TU_USUARIO/mi-web:v1` | Añade el nombre del usuario al etiquetado |
| `docker push TU_USUARIO/mi-web:v1` | Publica la imagen |
| `docker pull TU_USUARIO/mi-web:v1` | Descarga la imagen |

Sustituye `TU_USUARIO` por tu usuario real. No publiques contraseñas, tokens ni claves API en imágenes.

## 8. Docker Compose: comandos principales

Compose permite guardar la configuración de uno o varios servicios en `compose.yaml` y gestionarlos juntos.

Ejecuta estos comandos desde la carpeta del archivo Compose:

| Comando | Significado |
|---|---|
| `docker compose up -d` | Crea e inicia los servicios en segundo plano |
| `docker compose ps` | Muestra el estado de los contenedores del proyecto |
| `docker compose logs` | Muestra los registros |
| `docker compose logs -f` | Sigue los registros en directo |
| `docker compose exec db sh` | Abre una terminal en el servicio `db` |
| `docker compose stop` | Detiene los servicios sin eliminarlos |
| `docker compose start` | Inicia los servicios ya creados |
| `docker compose restart` | Reinicia los servicios |
| `docker compose down` | Detiene y elimina contenedores y red del proyecto |
| `docker compose pull` | Descarga las imágenes indicadas en el archivo |
| `docker compose up -d --build` | Construye las imágenes que tengan `build` e inicia los servicios |

En `docker compose exec db sh`, `db` es el **nombre del servicio** definido en `compose.yaml`.

## 9. Volúmenes

Un volumen guarda datos fuera del ciclo de vida del contenedor. Así, puedes eliminar y recrear un contenedor sin borrar necesariamente esos datos.

| Comando | Significado |
|---|---|
| `docker volume ls` | Lista los volúmenes |
| `docker volume inspect NOMBRE` | Muestra información de un volumen |
| `docker compose down` | Elimina contenedores y red; conserva normalmente los volúmenes nombrados |
| `docker compose down -v` | También elimina los volúmenes del proyecto: **puede borrar datos** |

Ejemplo de volumen en `compose.yaml`:

```yaml
services:
  db:
    image: postgres:17
    volumes:
      - datos_postgres:/var/lib/postgresql/data

volumes:
  datos_postgres:
```

- `datos_postgres`: nombre del volumen.
- `/var/lib/postgresql/data`: carpeta dentro del contenedor donde la aplicación guarda datos.

## 10. Errores rápidos

| Problema | Qué probar |
|---|---|
| Docker no responde | Abre Docker Desktop y ejecuta `docker info` |
| Puerto ocupado | Cambia, por ejemplo, `-p 8080:80` por `-p 8081:80` |
| Nombre de contenedor ocupado | Ejecuta `docker ps -a` y elige otro nombre o elimina el contenedor si ya no lo necesitas |
| Web no carga | Comprueba `docker ps`, `docker port mi-web` y `docker logs mi-web` |
| `exec` falla | Comprueba que el contenedor esté en marcha; prueba `sh` en lugar de `bash` |
| Compose no encuentra el archivo | Entra en la carpeta donde está `compose.yaml` |
| Compose no conecta con Docker | Abre Docker Desktop y comprueba `docker info` |

## Documentación oficial

- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Volúmenes](https://docs.docker.com/engine/storage/volumes/)
- [Docker Hub](https://hub.docker.com/)