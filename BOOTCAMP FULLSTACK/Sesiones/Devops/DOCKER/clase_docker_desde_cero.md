# Docker desde cero: de mi ordenador a un contenedor

**Bootcamp Full Stack · Práctica guiada**

## Objetivos de la sesión

Al terminar, deberías poder:

- Explicar con tus palabras qué son una imagen, un contenedor y un registro.
- Descargar una imagen y ejecutar un contenedor.
- Consultar contenedores, imágenes y logs.
- Entrar en un contenedor cuando sea necesario.
- Publicar una página web estática usando Docker.
- Crear una imagen propia y subirla a Docker Hub.

No hace falta memorizar todos los comandos. Guarda la chuleta y aprende a consultar la documentación.

## Antes de empezar: Docker Desktop, Engine y CLI

En Mac, normalmente trabajaremos con **Docker Desktop**. Conviene distinguir tres piezas:

- **Docker Desktop:** aplicación para macOS que permite iniciar y gestionar Docker. Incluye herramientas y una máquina virtual donde se ejecutan los contenedores.
- **Docker Engine:** el motor que crea y ejecuta contenedores e imágenes.
- **Docker CLI:** la herramienta de terminal con la que escribimos comandos como `docker run` o `docker ps`.

Una forma sencilla de recordarlo:

- Docker Desktop es la aplicación que arrancamos.
- Docker Engine es el motor que hace el trabajo.
- Docker CLI es la herramienta con la que le damos órdenes.

En macOS, instalar el comando `docker` no garantiza por sí solo que el motor esté arrancado. **Docker Desktop debe estar abierto y listo** para que los comandos puedan conectarse al motor.

### Comprobar que Docker funciona en Mac

Ejecuta los comandos por separado:

```bash
docker --version
docker version
docker info
docker run hello-world
```

¿Qué hace cada uno?

- `docker --version`: muestra la versión del cliente de terminal. No basta para confirmar que el motor funciona.
- `docker version`: muestra información del cliente y del servidor (motor), si puede conectarse.
- `docker info`: muestra información del motor. Si no está disponible, puede aparecer un error de conexión.
- `docker run hello-world`: prueba a descargar y ejecutar un contenedor de ejemplo.

### ¿Qué hago si aparece un error de conexión?

Si ves un mensaje parecido a `Cannot connect to the Docker daemon` o `Is the docker daemon running?`:

1. Abre Docker Desktop desde la carpeta **Aplicaciones**.
2. Espera a que termine de arrancar y muestre que Docker está listo.
3. Vuelve a ejecutar `docker version`.
4. Si sigue fallando, comprueba el contexto con `docker context ls` y consulta al profesor antes de cambiar configuraciones o borrar datos.

### Actualizar Docker Desktop en Mac

1. Abre Docker Desktop y comprueba si ofrece una actualización.
2. Si no aparece, entra en la página oficial: [Docker Desktop](https://www.docker.com/products/docker-desktop/).
3. Descarga el instalador adecuado para tu Mac. En los Mac con procesador Apple Silicon, selecciona **Mac with Apple silicon**; en los Mac Intel, selecciona **Mac with Intel chip**.
4. Abre el archivo `.dmg` y sigue las instrucciones para instalar o sustituir Docker Desktop.
5. Abre Docker Desktop y comprueba de nuevo con `docker version` y `docker run hello-world`.

No desinstales Docker ni borres volúmenes como primer paso para actualizar. Si guardas datos importantes en contenedores o volúmenes, evita las opciones de restablecimiento de fábrica.

**Idea clave:** no necesitas memorizar los números de versión. Lo importante es saber comprobar que el cliente y el motor funcionan y dónde consultar la documentación oficial.

Documentación oficial: [Instalar Docker Desktop en Mac](https://docs.docker.com/desktop/setup/install/mac-install/).


## 1. La idea de Docker

Imagina que una aplicación necesita archivos y un programa concreto para funcionar. En otro ordenador puede fallar porque el entorno es diferente.

Docker permite empaquetar una aplicación y lo necesario para ejecutarla en una **imagen**. A partir de ella podemos crear **contenedores**.

- **Imagen:** la plantilla a partir de la que se crean contenedores.
- **Contenedor:** una instancia de una imagen en ejecución (o detenida).
- **Registro:** un servicio donde se guardan y comparten imágenes. Docker Hub es uno de ellos.
- **Dockerfile:** archivo de instrucciones para construir una imagen.
- **Puerto:** permite acceder desde fuera a un servicio que escucha dentro del contenedor.
- **Volumen:** permite conservar datos fuera del ciclo de vida del contenedor.

Analogía: la imagen es una receta; el contenedor es el plato preparado; el registro es una biblioteca donde compartimos recetas. La analogía ayuda, pero no explica todos los detalles técnicos.

## 2. Comprobamos Docker

Abre una terminal:

```bash
docker --version
docker compose version
docker info
```

Si `docker info` falla, comprueba que Docker Desktop esté abierto (en macOS/Windows) o que el servicio Docker esté funcionando en Linux.

### Primer contenedor

```bash
docker run hello-world
```

Docker busca la imagen `hello-world` en local. Si no la encuentra, intenta descargarla del registro y ejecuta un contenedor.

**Práctica 1**
1. Ejecuta el comando.
2. Lee el mensaje completo.
3. Explica a tu compañero qué ha hecho Docker.

## 3. Imágenes y contenedores

```bash
docker images
docker ps
docker ps -a
```

- `docker images`: imágenes descargadas o construidas localmente.
- `docker ps`: contenedores en ejecución.
- `docker ps -a`: todos los contenedores, incluidos los detenidos.

### Ejecutar algo interactivo

```bash
docker run -it ubuntu bash
```

Estás dentro de una terminal de Ubuntu que se ejecuta en un contenedor. Prueba:

```bash
whoami
pwd
ls
cat /etc/os-release
```

Sal con:

```bash
exit
```

Ahora ejecuta `docker ps` y `docker ps -a`. El contenedor normalmente se habrá detenido porque terminó su proceso principal.

**Qué significan las opciones**
- `-i`: mantiene abierta la entrada interactiva.
- `-t`: crea una terminal.
- `-it`: combinación habitual para trabajar desde una terminal dentro del contenedor.

**Práctica 2**
1. Vuelve a ejecutar `docker run -it ubuntu bash`.
2. Crea un archivo con `echo "Hola Docker" > prueba.txt`.
3. Comprueba su contenido con `cat prueba.txt`.
4. Sal con `exit` y vuelve a entrar con otro `docker run -it ubuntu bash`.
5. ¿Sigue el archivo ahí? ¿Por qué crees que ocurre?

No hace falta dominar ahora la persistencia: más adelante veremos cómo conservar datos cuando sea necesario.

## 4. Ejecutar en segundo plano (`-d`)

Algunos contenedores ejecutan un servicio que debe seguir funcionando mientras usamos la terminal para otras cosas.

```bash
docker run -d --name web-prueba nginx
docker ps
```

- `-d`: ejecuta el contenedor en segundo plano.
- `--name web-prueba`: asigna un nombre fácil de recordar.
- `nginx`: nombre de la imagen que usamos.

Consulta los logs:

```bash
docker logs web-prueba
docker logs -f web-prueba
```

Con `-f` sigues los logs en directo. Para dejar de seguirlos, pulsa `Ctrl + C`; esto normalmente no detiene el contenedor.

Entra en el contenedor:

```bash
docker exec -it web-prueba sh
```

Prueba `ls` y sal con `exit`. `docker exec` ejecuta un comando dentro de un contenedor que ya está en marcha. En imágenes pequeñas puede existir `sh` pero no `bash`.

**Práctica 3**
1. Ejecuta el contenedor Nginx.
2. Mira los logs.
3. Entra con `docker exec`.
4. Sal de la terminal interna.
5. Comprueba que el contenedor sigue en ejecución con `docker ps`.

## 5. Puertos: acceder desde el navegador

El contenedor Nginx escucha en el puerto `80` **dentro del contenedor**. Para acceder desde nuestro ordenador, publicamos un puerto:

```bash
docker run -d --name web-puertos -p 8080:80 nginx
```

Abre `http://localhost:8080`.

La estructura es:

```text
-p PUERTO_DE_MI_ORDENADOR:PUERTO_DENTRO_DEL_CONTENEDOR
```

En `-p 8080:80`, el navegador se conecta al puerto 8080 del ordenador y Docker dirige el tráfico al puerto 80 del contenedor.

Si el puerto 8080 está ocupado, prueba otro, por ejemplo `-p 8081:80`, y abre `http://localhost:8081`.

**Práctica 4**
1. Ejecuta Nginx publicando el puerto 8081.
2. Abre la web.
3. Detén el contenedor y actualiza el navegador.
4. Vuelve a iniciarlo y prueba de nuevo.

## 6. Ciclo de vida: parar, iniciar y borrar

```bash
docker stop web-puertos
docker start web-puertos
docker restart web-puertos
docker ps -a
docker rm web-puertos
```

- `stop`: detiene el contenedor.
- `start`: inicia un contenedor existente que está detenido.
- `restart`: lo reinicia.
- `rm`: elimina un contenedor detenido.

Para eliminar un contenedor que sigue en marcha, primero detenlo. También existe `docker rm -f nombre`, pero úsalo con cuidado.

Eliminar un contenedor no es lo mismo que eliminar una imagen:

```bash
docker rmi nginx
```

Docker no permitirá borrar una imagen si todavía la necesita algún contenedor existente. No borres imágenes sin comprobar antes qué estás usando.

## 7. Proyecto: publicar nuestra propia página web

Vamos a empaquetar una página HTML/CSS/JS sencilla y servirla con Nginx. No necesitamos instalar Nginx directamente en nuestro ordenador: Docker lo ejecutará dentro del contenedor.

### Paso 1. Crear la carpeta

Crea una carpeta llamada `mi-web-docker` con esta estructura:

```text
mi-web-docker/
├── index.html
├── styles.css
└── Dockerfile
```

Crea `index.html`:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera web con Docker</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>¡Mi web está en Docker!</h1>
    <p>Esta página se sirve desde un contenedor Nginx.</p>
  </main>
</body>
</html>
```

Crea `styles.css`:

```css
body {
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 3rem;
  background: #f1f5f9;
  color: #172033;
}

main {
  max-width: 650px;
  margin: 3rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
}
```

### Paso 2. Crear el Dockerfile

Crea un archivo llamado exactamente `Dockerfile`, sin extensión:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

- `FROM`: indica la imagen base.
- `COPY`: copia archivos desde la carpeta del proyecto a la imagen.
- `/usr/share/nginx/html`: carpeta que Nginx utiliza para servir la web en esta imagen.

### Paso 3. Construir una imagen

Desde la terminal, entra en la carpeta `mi-web-docker` y ejecuta:

```bash
docker build -t mi-web:v1 .
```

- `build`: construye una imagen.
- `-t mi-web:v1`: asigna nombre y etiqueta (`v1`).
- `.`: usa la carpeta actual como contexto de construcción.

Comprueba el resultado:

```bash
docker images
```

### Paso 4. Ejecutar la web

```bash
docker run -d --name mi-web -p 8080:80 mi-web:v1
```

Abre `http://localhost:8080`.

Si ya existe un contenedor llamado `mi-web`, deténlo y elimínalo antes de volver a crearlo, o utiliza otro nombre.

### Paso 5. Modificar y reconstruir

1. Cambia el título o el texto de `index.html`.
2. Recarga la página. ¿Ha cambiado?
3. Si no ha cambiado, reconstruye la imagen:

```bash
docker build -t mi-web:v2 .
```

4. Para ejecutar la nueva versión, crea un contenedor nuevo:

```bash
docker stop mi-web
docker rm mi-web
docker run -d --name mi-web -p 8080:80 mi-web:v2
```

**Idea importante:** construir una imagen nueva no actualiza automáticamente los contenedores que ya existen. El contenedor actual sigue usando la imagen con la que se creó.

## 8. Compartir la imagen en Docker Hub

Docker Hub es un registro público de imágenes. Necesitarás una cuenta. Si no quieres crearla durante la clase, observa la demostración del profesor y completa el ejercicio después.

1. Crea una cuenta en Docker Hub e inicia sesión desde la terminal:

```bash
docker login
```

2. Sustituye `TU_USUARIO` por tu usuario real de Docker Hub:

```bash
docker tag mi-web:v2 TU_USUARIO/mi-web:v1
```

`tag` añade otro nombre/etiqueta a la imagen local; no reconstruye la imagen.

3. Sube la imagen:

```bash
docker push TU_USUARIO/mi-web:v1
```

4. Comprueba en Docker Hub que la imagen aparece en tu repositorio.

5. (Opcional) Prueba a descargarla con `docker pull TU_USUARIO/mi-web:v1`.

Si el repositorio es público, otras personas podrán descargar la imagen. **No incluyas contraseñas, tokens, claves API ni otros secretos en la imagen.** Para esta práctica solo publicamos archivos HTML/CSS.

## 9. Errores habituales

### `docker: command not found` o Docker no responde
- Comprueba que Docker está instalado.
- En macOS/Windows, abre Docker Desktop y espera a que termine de arrancar.
- Ejecuta `docker --version` y `docker info`.

### `port is already allocated` / el puerto ya está ocupado
Otro programa o contenedor está usando ese puerto. Usa otro puerto del ordenador, por ejemplo `-p 8081:80`, y cambia la URL a `http://localhost:8081`.

### `Conflict. The container name ... is already in use`
Ya existe un contenedor con ese nombre:

```bash
docker ps -a
docker stop mi-web
docker rm mi-web
```

Si el nombre corresponde a otro trabajo que quieres conservar, utiliza otro nombre en vez de borrarlo.

### La página no carga
- Comprueba que el contenedor está en marcha: `docker ps`.
- Comprueba que has publicado el puerto: `docker port mi-web`.
- Consulta los logs: `docker logs mi-web`.
- Verifica la URL y el puerto.
- Comprueba que `index.html` está en la carpeta correcta y que has reconstruido la imagen después de modificarlo.

### `docker exec` dice que el contenedor no está en ejecución
`exec` solo funciona con un contenedor en marcha. Comprueba `docker ps -a` y usa `docker start nombre` si corresponde.

### Docker Hub rechaza el `push`
- Ejecuta `docker login`.
- Comprueba que el nombre incluye tu usuario: `TU_USUARIO/mi-web:v1`.
- Comprueba que estás subiendo exactamente la etiqueta que has creado con `docker tag`.
- Revisa que tienes permisos para ese repositorio.

### La imagen no se actualiza
Modificar archivos locales no cambia una imagen ya construida. Ejecuta `docker build` y crea un contenedor nuevo usando la nueva etiqueta.

## 10. Reto final

Sin copiar toda la solución, intenta:

1. Cambiar el contenido y los estilos de la web.
2. Construir una imagen con etiqueta `v3`.
3. Ejecutarla en el puerto `8082`.
4. Consultar sus logs.
5. Detenerla y volver a iniciarla.
6. (Opcional) Subirla a Docker Hub.

### Preguntas para comprobar que lo has entendido

- ¿Cuál es la diferencia entre imagen y contenedor?
- ¿Qué hace `-d`? ¿Y `-it`?
- ¿Qué significa `-p 8080:80`?
- ¿Para qué sirve un Dockerfile?
- Si modifico `index.html`, ¿por qué puede que no vea el cambio en el contenedor que ya existe?
- ¿Qué diferencia hay entre `docker stop` y `docker rm`?
- ¿Qué precaución debo tener al publicar una imagen?

## Para seguir aprendiendo

- Docker Docs: https://docs.docker.com/
- Docker Get Started: https://docs.docker.com/get-started/
- Docker Hub: https://hub.docker.com/

No intentes memorizarlo todo hoy. Lo importante es entender el flujo: **Dockerfile → imagen → contenedor → comprobar que funciona**.