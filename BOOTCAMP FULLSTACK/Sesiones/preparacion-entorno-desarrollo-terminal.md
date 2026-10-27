# Preparación del entorno de desarrollo y terminal

## Objetivos

Al finalizar esta sesión deberás poder:

- Tener preparado el entorno básico de desarrollo.
- Acceder a las herramientas de comunicación y trabajo del curso.
- Abrir Visual Studio Code.
- Utilizar Git Bash como terminal.
- Abrir una carpeta de trabajo desde VS Code.
- Crear, mover, copiar y eliminar archivos y carpetas desde la terminal.
- Reconocer algunas equivalencias entre comandos Linux/Unix y Windows.
- Comprobar que las herramientas principales funcionan correctamente.
- Acceder a los repositorios utilizados durante la formación.

---

# 1. Herramientas que utilizaremos

Durante el bootcamp utilizaremos principalmente las siguientes herramientas:

| Herramienta | Para qué la utilizaremos |
|---|---|
| Google Chrome | Navegador, pruebas y herramientas de desarrollo |
| Visual Studio Code | Editor de código |
| Git | Control de versiones |
| Git Bash | Terminal principal en Windows |
| GitHub | Repositorios remotos y trabajo colaborativo |
| Docker Desktop | Trabajo con contenedores y entornos de desarrollo |
| Slack | Comunicación, avisos y envío de materiales |
| Windows Terminal | Aplicación de terminal, si fuese necesaria |

> En esta sesión prepararemos el entorno y comprobaremos que las herramientas funcionan. Git y GitHub se trabajarán con más profundidad en la siguiente sesión.

---

# 2. Organización del material del curso

El curso utiliza varios repositorios de GitHub.

## 2.1. Repositorio central del curso

Existe un repositorio privado que contiene el material general de la formación:

- Teoría.
- Sesiones de clase.
- Documentación.
- Material de apoyo.
- Otros recursos del curso.

El profesor os dará acceso a este repositorio cuando tengáis creada vuestra cuenta de GitHub.

### ¿Qué tenéis que hacer?

Cuando hayáis creado vuestra cuenta de GitHub:

1. Comprobad cuál es el correo electrónico asociado a vuestra cuenta o vuestro nombre de usuario de GitHub.
2. Enviad esos datos al profesor a través de Slack.
3. El profesor os añadirá como colaboradores del repositorio privado.
4. Cuando recibáis la invitación, aceptadla.
5. Comprobad que podéis acceder al repositorio.

> Enviad el correo electrónico o el usuario de GitHub que utilicéis realmente. Si enviáis un correo diferente al asociado a vuestra cuenta, el profesor podría no encontraros correctamente.

### Enlace al repositorio central

El profesor facilitará el enlace al repositorio privado por Slack.

---

## 2.2. Repositorio de fundamentos

Además del repositorio central, existe otro repositorio específico para el módulo inicial de fundamentos.

Este módulo incluye contenidos como:

- HTML.
- CSS.
- JavaScript básico.

El profesor facilitará también el enlace a este repositorio.

### Importante

No todos los materiales del curso estarán necesariamente en el mismo repositorio. Por eso es importante:

- Saber dónde está cada recurso.
- Utilizar los enlaces facilitados por el profesor.
- Consultar Slack cuando se publique una actualización o un nuevo material.

---

# 3. Instalación de las herramientas

## 3.1. Google Chrome

Instala Google Chrome si no lo tienes instalado.

Lo utilizaremos para:

- Visualizar páginas web.
- Probar nuestras aplicaciones.
- Utilizar las herramientas de desarrollador.
- Consultar documentación.

Enlace:

<https://www.google.com/chrome/>

---

## 3.2. Visual Studio Code

Instala Visual Studio Code:

<https://code.visualstudio.com/>

Durante la instalación:

- Utiliza las opciones recomendadas.
- No es necesario instalar muchas extensiones.
- Instalaremos extensiones adicionales únicamente cuando exista una necesidad concreta.

### Sobre las extensiones

De momento, no es obligatorio instalar ninguna extensión adicional.

Más adelante podremos instalar alguna extensión cuando empecemos a trabajar con una tecnología que la necesite.

> Recomendación: evita llenar el editor de extensiones. Instala herramientas conocidas, mantenidas y que aporten una utilidad clara.

---

## 3.3. Git y Git Bash

Instala Git para Windows:

<https://git-scm.com/downloads>

La instalación de Git incluye **Git Bash**, que será la terminal principal que utilizaremos en Windows.

Git Bash nos permite utilizar muchos comandos habituales de los sistemas Unix/Linux.

Después de instalarlo, abre Git Bash y comprueba que funciona:

```bash
git --version
```

Deberías obtener una respuesta con la versión instalada de Git.

Por ejemplo:

```text
git version 2.x.x
```

La versión concreta puede ser diferente.

> Git Bash no convierte Windows en Linux, pero proporciona una terminal con comandos y herramientas de estilo Unix.

---

## 3.4. Cuenta de GitHub

Crea una cuenta de GitHub si todavía no tienes una:

<https://github.com/>

GitHub lo utilizaremos para:

- Guardar repositorios remotos.
- Entregar ejercicios.
- Compartir código.
- Trabajar con ramas.
- Colaborar con otras personas.

En esta sesión no vamos a estudiar todavía todos los comandos de Git. Primero comprobaremos que la cuenta está preparada y que puedes acceder a los repositorios del curso.

### Acceso al repositorio privado del curso

Cuando hayas creado tu cuenta:

1. Comprueba tu nombre de usuario de GitHub.
2. Comprueba el correo electrónico asociado a la cuenta.
3. Envía uno de esos datos al profesor a través de Slack.
4. Espera a que el profesor te añada al repositorio privado.
5. Acepta la invitación de GitHub.
6. Accede al repositorio para comprobar que tienes permisos.

### Comprobación

Debes poder:

- Iniciar sesión en GitHub.
- Ver el repositorio central del curso.
- Ver el repositorio de fundamentos cuando el profesor te facilite el enlace.

---

## 3.5. Slack

Slack será la herramienta principal de comunicación durante la formación.

Lo utilizaremos para:

- Recibir avisos del profesor.
- Consultar dudas.
- Recibir enlaces y materiales.
- Enviar el usuario o correo de GitHub.
- Compartir información relacionada con las clases.
- Recibir comunicaciones sobre actividades y entregas.

Si todavía no tienes Slack instalado, accede a:

<https://slack.com/downloads/>

El profesor os indicará el espacio de trabajo al que debéis uniros.

### Comprobación

Comprueba que puedes:

- Acceder al espacio de trabajo del curso.
- Ver el canal indicado por el profesor.
- Leer y enviar mensajes.
- Enviar al profesor tu usuario o correo de GitHub.

> Utiliza los canales indicados para cada tipo de comunicación y evita enviar información importante únicamente por mensajes privados si debe conocerla todo el grupo.

---

## 3.6. Docker Desktop

Instala Docker Desktop:

<https://www.docker.com/products/docker-desktop/>

Docker lo utilizaremos más adelante en el bloque de backend y DevOps.

En esta sesión no vamos a estudiar todavía:

- Imágenes.
- Contenedores.
- Volúmenes.
- Redes.
- Docker Compose.
- Dockerfiles.

Solo vamos a comprobar que la instalación funciona.

Abre una terminal y ejecuta:

```bash
docker --version
```

Después:

```bash
docker run hello-world
```

Si todo funciona correctamente, Docker mostrará un mensaje de bienvenida.

> La primera ejecución puede tardar un poco porque Docker necesita descargar una imagen de prueba.

### Posibles problemas en Windows

Docker Desktop puede necesitar componentes adicionales, como WSL 2, y puede solicitar reiniciar el ordenador.

No es necesario estudiar WSL en esta sesión. Si aparece algún problema, lo resolveremos durante la instalación.

---

# 4. Configurar Git Bash en Visual Studio Code

## 4.1. La terminal integrada

Visual Studio Code permite abrir una terminal dentro del propio editor.

Esto resulta útil porque podemos:

- Editar código.
- Ejecutar comandos.
- Ejecutar nuestros programas.
- Utilizar Git.
- Utilizar Docker.

Todo ello sin tener que cambiar continuamente de aplicación.

---

## 4.2. Seleccionar Git Bash

En Windows utilizaremos Git Bash como terminal principal.

### Pasos

1. Abre Visual Studio Code.
2. Abre el menú **Terminal**.
3. Selecciona **New Terminal**.
4. Localiza el desplegable de perfiles de terminal.
5. Pulsa **Switch Profile**.
6. Selecciona **Git Bash**.

La terminal aparecerá normalmente en la parte inferior de Visual Studio Code.

Dependiendo de la configuración del ordenador, pueden aparecer otros perfiles, como:

- PowerShell.
- Command Prompt.
- Git Bash.
- WSL.
- Otros intérpretes instalados.

Durante el curso, en Windows seleccionaremos **Git Bash**.

---

## 4.3. Comprobación

En la terminal integrada de VS Code, ejecuta:

```bash
pwd
```

Después:

```bash
ls
```

Si los comandos funcionan, Git Bash está preparado.

> En Mac utilizaremos la terminal habitual del sistema. Muchos de los comandos que veremos serán iguales o muy parecidos.

---

# 5. Introducción a la terminal

## 5.1. ¿Qué es una terminal?

Una terminal es una herramienta que permite comunicarnos con el sistema operativo mediante comandos escritos.

En lugar de utilizar solamente ventanas y menús, podemos escribir instrucciones como:

```bash
mkdir proyectos
```

Este comando crea una carpeta llamada `proyectos`.

La terminal permite realizar tareas como:

- Movernos entre carpetas.
- Crear archivos y directorios.
- Copiar y mover elementos.
- Ejecutar programas.
- Instalar dependencias.
- Ejecutar nuestros proyectos.
- Utilizar Git y Docker.

---

## 5.2. ¿Por qué utilizaremos comandos Unix/Linux?

Git Bash incluye muchos comandos habituales de los sistemas Unix/Linux.

Este tipo de comandos aparece con frecuencia en:

- Servidores Linux.
- Entornos de desarrollo.
- Docker.
- Sistemas de integración continua.
- Sistemas de despliegue.
- Muchos equipos profesionales de desarrollo.

Por eso practicaremos principalmente con comandos de estilo Unix/Linux, aunque estemos trabajando en Windows.

> No es necesario memorizar todos los comandos. Lo importante es aprender a utilizarlos, consultarlos y entender qué hacen.

---

# 6. Primeros comandos de Git Bash

## 6.1. Ver la carpeta actual: `pwd`

El comando `pwd` muestra la ruta de la carpeta en la que nos encontramos.

```bash
pwd
```

Ejemplo de resultado:

```text
/c/Users/Alumno
```

La ruta concreta será diferente en cada ordenador.

---

## 6.2. Ver el contenido de una carpeta: `ls`

El comando `ls` muestra los archivos y carpetas de la ubicación actual.

```bash
ls
```

Para mostrar también archivos ocultos:

```bash
ls -a
```

De momento, utilizaremos principalmente `ls`.

---

## 6.3. Cambiar de carpeta: `cd`

El comando `cd` permite cambiar de carpeta.

```bash
cd nombre-carpeta
```

Por ejemplo:

```bash
cd Documentos
```

Para subir a la carpeta superior:

```bash
cd ..
```

Para volver a la carpeta personal:

```bash
cd
```

Para comprobar dónde estamos:

```bash
pwd
```

---

## 6.4. Crear una carpeta: `mkdir`

El comando `mkdir` crea una carpeta.

```bash
mkdir bootcamp
```

Crear una carpeta dentro de otra:

```bash
cd bootcamp
mkdir pruebas
```

---

## 6.5. Crear un archivo vacío: `touch`

El comando `touch` permite crear un archivo vacío.

```bash
touch hola.txt
```

Podemos comprobar que existe con:

```bash
ls
```

> `touch` está disponible en Git Bash. En otros terminales de Windows puede no funcionar de la misma forma.

---

## 6.6. Mostrar el contenido de un archivo: `cat`

El comando `cat` muestra el contenido de un archivo de texto.

```bash
cat hola.txt
```

Si el archivo está vacío, no veremos ningún contenido.

Podemos escribir algo en el archivo desde VS Code y volver a ejecutar:

```bash
cat hola.txt
```

---

## 6.7. Copiar un archivo: `cp`

El comando `cp` copia archivos o carpetas.

```bash
cp hola.txt copia-hola.txt
```

Esto crea una copia de `hola.txt` llamada `copia-hola.txt`.

Comprobamos el resultado:

```bash
ls
```

---

## 6.8. Mover o renombrar un archivo: `mv`

El comando `mv` sirve para mover o renombrar archivos y carpetas.

Para cambiar el nombre de un archivo:

```bash
mv copia-hola.txt saludo.txt
```

Para mover un archivo a otra carpeta:

```bash
mv saludo.txt otra-carpeta/
```

---

## 6.9. Eliminar un archivo: `rm`

El comando `rm` elimina archivos.

```bash
rm saludo.txt
```

> Ten cuidado con `rm`: normalmente no envía el archivo a la papelera. Lo elimina directamente.

Para eliminar una carpeta vacía:

```bash
rmdir nombre-carpeta
```

No utilizaremos todavía comandos de borrado recursivo como `rm -r`.

---

## 6.10. Limpiar la terminal: `clear`

El comando `clear` limpia el contenido visible de la terminal.

```bash
clear
```

No borra archivos ni modifica el sistema. Solo limpia la pantalla.

---

# 7. Práctica guiada: trabajar con archivos y carpetas

Vamos a crear una pequeña estructura de carpetas y archivos.

## Paso 1. Ir a nuestra carpeta personal

```bash
cd
```

Comprobamos la ubicación:

```bash
pwd
```

---

## Paso 2. Crear la carpeta del bootcamp

```bash
mkdir bootcamp
```

Entramos en ella:

```bash
cd bootcamp
```

---

## Paso 3. Crear una carpeta de pruebas

```bash
mkdir pruebas
```

Entramos:

```bash
cd pruebas
```

---

## Paso 4. Crear un archivo

```bash
touch hola.txt
```

Comprobamos que existe:

```bash
ls
```

---

## Paso 5. Abrir la carpeta en VS Code

Desde VS Code:

1. Selecciona **File → Open Folder**.
2. Busca la carpeta `pruebas`.
3. Ábrela.

También podemos probar desde Git Bash:

```bash
code .
```

> Este comando puede no estar disponible en todos los equipos. Si no funciona, abriremos la carpeta desde el menú de VS Code.

---

## Paso 6. Editar el archivo

Abre `hola.txt` desde VS Code y escribe:

```text
Hola, estoy aprendiendo desarrollo Full Stack.
```

Guarda el archivo.

Después, desde Git Bash, ejecuta:

```bash
cat hola.txt
```

Deberías ver el contenido que acabas de escribir.

---

## Paso 7. Copiar el archivo

```bash
cp hola.txt copia.txt
```

Comprueba el contenido de la carpeta:

```bash
ls
```

---

## Paso 8. Renombrar la copia

```bash
mv copia.txt saludo.txt
```

Comprueba el resultado:

```bash
ls
```

---

## Paso 9. Eliminar el archivo renombrado

```bash
rm saludo.txt
```

Comprueba que solamente queda el archivo original:

```bash
ls
```

---

# 8. Equivalencias entre comandos Linux/Unix y Windows

Durante el curso utilizaremos Git Bash, pero en Windows también existen otros terminales, como PowerShell o Command Prompt.

Estos son algunos comandos equivalentes o parecidos:

| Acción | Git Bash / Unix | Windows CMD |
|---|---|---|
| Ver ubicación actual | `pwd` | `cd` |
| Ver archivos y carpetas | `ls` | `dir` |
| Cambiar de carpeta | `cd` | `cd` |
| Subir una carpeta | `cd ..` | `cd ..` |
| Crear carpeta | `mkdir` | `mkdir` |
| Eliminar carpeta vacía | `rmdir` | `rmdir` |
| Crear archivo vacío | `touch archivo.txt` | `type nul > archivo.txt` |
| Copiar archivo | `cp origen destino` | `copy origen destino` |
| Mover archivo | `mv origen destino` | `move origen destino` |
| Eliminar archivo | `rm archivo.txt` | `del archivo.txt` |
| Limpiar pantalla | `clear` | `cls` |

> Los comandos pueden variar según el terminal utilizado. Esta tabla es una referencia rápida, no una lista que debamos memorizar.

---

# 9. Reto individual

Crea una carpeta llamada `practica-terminal` con esta estructura:

```text
practica-terminal/
├── documentos/
├── imagenes/
└── notas.txt
```

Después:

1. Entra en `documentos`.
2. Crea un archivo llamado `apuntes.txt`.
3. Escribe algo en él desde VS Code.
4. Copia `apuntes.txt` a la carpeta principal.
5. Renombra la copia como `resumen.txt`.
6. Mueve `resumen.txt` a la carpeta `documentos`.
7. Elimina `resumen.txt`.
8. Comprueba que la estructura final es correcta.

---

# 10. Comprobación final del entorno

Antes de terminar la sesión, comprueba que puedes:

- [ ] Abrir Google Chrome.
- [ ] Abrir Visual Studio Code.
- [ ] Abrir una carpeta en VS Code.
- [ ] Abrir una terminal integrada.
- [ ] Seleccionar Git Bash como perfil de terminal.
- [ ] Ejecutar `pwd`.
- [ ] Ejecutar `ls`.
- [ ] Crear una carpeta con `mkdir`.
- [ ] Crear un archivo con `touch`.
- [ ] Mostrar su contenido con `cat`.
- [ ] Copiar un archivo con `cp`.
- [ ] Mover o renombrar un archivo con `mv`.
- [ ] Eliminar un archivo con `rm`.
- [ ] Ejecutar `git --version`.
- [ ] Ejecutar `docker --version`.
- [ ] Ejecutar `docker run hello-world`.
- [ ] Acceder a Slack.
- [ ] Acceder a GitHub.
- [ ] Enviar al profesor el correo o usuario de GitHub.
- [ ] Aceptar la invitación al repositorio privado.
- [ ] Acceder al repositorio central del curso.

---

# 11. Ideas importantes

- La terminal es una herramienta habitual en desarrollo.
- Git Bash nos permite practicar comandos de estilo Unix/Linux en Windows.
- Utilizaremos Git Bash como terminal principal durante el bootcamp.
- No necesitamos instalar muchas extensiones en VS Code.
- Instalaremos herramientas adicionales solamente cuando exista una necesidad real.
- No es necesario memorizar todos los comandos.
- Debemos aprender a consultar documentación, probar comandos y entender sus efectos.
- Antes de ejecutar comandos destructivos, debemos comprobar siempre dónde estamos y qué vamos a modificar.
- Slack será el canal habitual para recibir avisos y materiales.
- GitHub será una herramienta de trabajo durante toda la formación.
- El curso dispone de un repositorio central y de repositorios específicos para determinados módulos.

---

# 12. Material opcional para ampliar

Estos contenidos no son necesarios para completar la sesión, pero pueden consultarse más adelante:

- Otros perfiles de terminal disponibles en VS Code.
- PowerShell.
- Windows Terminal.
- Zsh y Bash.
- Personalización de terminales.
- Herramientas como Oh My Zsh.
- Edición de archivos desde terminal con `nano`.
- Configuración avanzada de Git Bash.