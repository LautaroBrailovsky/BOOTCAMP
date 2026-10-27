# node.js 1 — entorno, npm, paquetes y scripts

## objetivos

Al terminar esta clase deberías poder:

- Explicar qué es Node.js y para qué sirve.
- Ejecutar JavaScript desde la terminal.
- Entender qué son npm, los paquetes y las dependencias.
- Crear un proyecto con `package.json`.
- Diferenciar `dependencies` y `devDependencies`.
- Crear scripts y ejecutarlos con npm.
- Reconocer `node_modules`, `package-lock.json` y `.gitignore`.
- Preparar el entorno para empezar con TypeScript.

---

## 1. ¿qué es Node.js?

Hasta ahora hemos utilizado JavaScript principalmente en el navegador. Pero ¿podemos ejecutar JavaScript sin abrir una página web?

Sí. **Node.js es un entorno de ejecución que permite ejecutar JavaScript fuera del navegador.** No es un lenguaje de programación ni un framework.

Los navegadores tienen un motor JavaScript. Node.js utiliza el motor V8, el mismo motor de JavaScript que utiliza Chrome, y añade funcionalidades para trabajar fuera del navegador, por ejemplo con archivos, procesos y servidores.

Node.js apareció en 2009 y ayudó a popularizar el desarrollo de aplicaciones de servidor con JavaScript.

### primer ejemplo

Crea un archivo llamado `hola.js`:

```js
console.log("Hola desde Node.js");
console.log("Estamos ejecutando JavaScript fuera del navegador");
```

Abre una terminal en la carpeta del archivo y ejecuta:

```bash
node hola.js
```

No necesitamos HTML, CSS ni un navegador para ejecutar este programa.

### ¿qué podemos hacer con Node.js?

Node.js permite desarrollar o ejecutar:

- Servidores web.
- APIs y servicios backend.
- Aplicaciones de línea de comandos.
- Scripts para automatizar tareas.
- Herramientas para trabajar con archivos.
- Procesos en segundo plano.
- Herramientas de desarrollo y compilación.
- Pruebas automatizadas.
- Aplicaciones que trabajan con bases de datos.

### tecnologías relacionadas

| tecnología | relación con Node.js |
|---|---|
| React | Se suele utilizar el ecosistema Node para instalar dependencias y ejecutar herramientas de desarrollo y construcción. React también puede utilizarse sin Node. |
| Angular | Su ecosistema de desarrollo utiliza Node.js y npm. |
| Vite | Herramienta para desarrollar y construir proyectos frontend. |
| Express | Framework para crear servidores y APIs con Node.js. |
| NestJS | Framework backend que utiliza habitualmente TypeScript y se ejecuta sobre Node.js. |
| Electron | Permite crear aplicaciones de escritorio utilizando tecnologías web y Node.js. |

**Importante:** utilizar Node.js para desarrollar una aplicación frontend no significa necesariamente que la aplicación necesite Node.js para funcionar en producción. Por ejemplo, una aplicación React ya compilada puede servirse como archivos estáticos.

---

## 2. ¿qué son npm, yarn y pnpm?

Un **paquete** es código que alguien ha preparado para que podamos reutilizarlo en nuestros proyectos. Por ejemplo, una biblioteca para trabajar con fechas, generar identificadores o realizar otras tareas.

Para instalar y gestionar estos paquetes existen herramientas como:

- **npm:** viene incluido al instalar Node.js y será el gestor que utilizaremos durante el bootcamp.
- **Yarn:** alternativa a npm, con funciones y flujos de trabajo propios.
- **pnpm:** alternativa que destaca por su forma eficiente de almacenar y reutilizar paquetes entre proyectos.

Las tres permiten gestionar dependencias de proyectos JavaScript. Tienen diferencias en la instalación, el almacenamiento y algunos comandos, pero no necesitamos aprenderlas todas ahora.

### ¿por qué utilizaremos npm?

- Viene incluido con Node.js.
- No necesitamos instalar otra herramienta.
- Es suficiente para los proyectos del bootcamp.
- Facilita que toda la clase utilice los mismos comandos.

En muchos proyectos las dependencias se declaran en `package.json`, pero cada gestor puede generar su propio archivo de bloqueo:

- npm: `package-lock.json`
- Yarn: normalmente `yarn.lock`
- pnpm: `pnpm-lock.yaml`

**Idea clave:** podemos conocer las alternativas y elegir la que mejor se adapte a un proyecto. En esta formación utilizaremos npm para mantener un entorno común.

---

## 3. crear un proyecto y entender `package.json`

Vamos a crear un proyecto desde cero. En la terminal:

```bash
mkdir mi-proyecto
cd mi-proyecto
npm init -y
```

El comando `npm init -y` genera un archivo llamado `package.json` con una configuración inicial.

Ejemplo simplificado:

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {},
  "dependencies": {},
  "devDependencies": {}
}
```

`package.json` es el archivo principal de configuración de un proyecto Node.js. Guarda información del proyecto, sus dependencias y los comandos que podemos ejecutar.

| campo | significado |
|---|---|
| `name` | Nombre del proyecto. |
| `version` | Versión del proyecto. |
| `main` | Punto de entrada tradicional de un paquete; su importancia depende del tipo de proyecto. |
| `scripts` | Comandos definidos para el proyecto. |
| `dependencies` | Paquetes necesarios para ejecutar la aplicación en su entorno de destino. |
| `devDependencies` | Paquetes utilizados principalmente durante el desarrollo. |

No todos los proyectos tienen exactamente la misma configuración.

### nuestro primer archivo JavaScript

Crea `index.js` en la carpeta del proyecto:

```js
console.log("Mi primer proyecto con Node.js");
console.log("Hoy estamos aprendiendo a utilizar npm");
```

Ejecuta el archivo:

```bash
node index.js
```

---

## 4. dependencias y dependencias de desarrollo

Una **dependencia** es un paquete del que nuestro proyecto necesita código o funcionalidades.

### instalar una dependencia

Vamos a instalar Day.js, una biblioteca para trabajar con fechas:

```bash
npm install dayjs
```

También podemos escribir `npm i dayjs`.

Ahora modifica `index.js`:

```js
const dayjs = require("dayjs");

console.log("Hoy es:", dayjs().format("DD/MM/YYYY"));
```

Ejecuta el programa:

```bash
node index.js
```

Este ejemplo utiliza `require`, el sistema de módulos CommonJS de Node.js. En otros proyectos encontrarás `import` y `export`, que también estudiaremos.

Al instalar Day.js, npm normalmente:

- Descarga el paquete.
- Lo instala en `node_modules`.
- Lo registra en `dependencies` de `package.json`.
- Actualiza `package-lock.json`.

### dependencia de desarrollo

Una dependencia de desarrollo es una herramienta que necesitamos principalmente mientras programamos, compilamos o probamos el proyecto.

Por ejemplo, TypeScript:

```bash
npm install --save-dev typescript
```

También se puede escribir:

```bash
npm install -D typescript
```

La diferencia general es:

- `dependencies`: paquetes necesarios para ejecutar la aplicación en su entorno de destino.
- `devDependencies`: herramientas utilizadas principalmente durante el desarrollo, como compiladores, herramientas de pruebas o analizadores de código.

Es una regla general: las necesidades exactas dependen del proyecto y de cómo se despliegue.

---

## 5. scripts de npm

Los scripts permiten guardar comandos habituales dentro de `package.json`, para no tener que recordarlos o escribirlos completos cada vez.

Busca la propiedad `scripts` de `package.json` y añade un script llamado `start`:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

**No borres el resto del contenido de `package.json`.** Solo tienes que añadir el script dentro de `scripts`.

Ahora ejecuta:

```bash
npm start
```

Se ejecutará el comando `node index.js`.

También podemos crear scripts con otros nombres:

```json
{
  "scripts": {
    "start": "node index.js",
    "saludar": "node index.js"
  }
}
```

Ejecutamos el primero con:

```bash
npm start
```

Y el segundo con:

```bash
npm run saludar
```

Los scripts `start` y `test` tienen comandos abreviados habituales, como `npm start` y `npm test`. Para otros nombres se utiliza normalmente `npm run nombre`.

### preparar un script para TypeScript

Como en la siguiente clase empezaremos TypeScript, podemos mirar un ejemplo de cómo se definen sus comandos:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

- `build` ejecutaría el compilador de TypeScript.
- `start` ejecutaría el JavaScript compilado situado en `dist/index.js`.

Este ejemplo es orientativo: para que funcione, el proyecto debe tener TypeScript instalado y configurado para generar el archivo en esa carpeta.

No necesitamos configurarlo todo hoy. Queremos entender que `package.json` permite guardar comandos para tareas como ejecutar, compilar y probar el proyecto.

---

## 6. `node_modules`, `package-lock.json` y `.gitignore`

Cuando instalamos paquetes aparecen otros archivos y carpetas importantes.

### `node_modules/`

Es la carpeta donde npm instala los paquetes del proyecto y sus dependencias.

No debemos modificarla manualmente.

### `package-lock.json`

Guarda información detallada sobre las versiones concretas instaladas y las dependencias que utiliza el proyecto. Ayuda a que distintas instalaciones reproduzcan un conjunto coherente de paquetes.

### `.gitignore`

Es un archivo que indica a Git qué archivos o carpetas debe ignorar.

Crea un archivo `.gitignore` con este contenido:

```gitignore
node_modules/
```

Habitualmente no subimos `node_modules` al repositorio, porque las dependencias se pueden volver a instalar.

### instalar las dependencias de un proyecto existente

Si descargas un proyecto que ya contiene `package.json` y `package-lock.json`, normalmente puedes instalar sus dependencias con:

```bash
npm install
```

En entornos de integración continua o despliegue, también se utiliza:

```bash
npm ci
```

`npm ci` instala las dependencias a partir del lockfile y está pensado para instalaciones reproducibles. Si el lockfile no concuerda con `package.json`, la instalación falla en lugar de modificarlo para resolver la diferencia.

No hace falta memorizar todas las opciones ahora; basta con reconocer ambos comandos.

---

## 7. práctica guiada: nuestro primer proyecto Node.js

**Objetivo:** crear un proyecto, instalar una dependencia, añadir scripts y preparar el entorno para TypeScript.

### paso 1. crear el proyecto

En la terminal:

```bash
mkdir proyecto-node
cd proyecto-node
npm init -y
```

Abre `package.json` y localiza `name`, `scripts` y el resto de los campos que se hayan generado.

### paso 2. crear un archivo JavaScript

Crea `index.js`:

```js
console.log("Mi primer proyecto con Node.js");
console.log("Hoy estamos aprendiendo a utilizar npm");
```

Ejecuta:

```bash
node index.js
```

### paso 3. instalar una dependencia

Instala Day.js:

```bash
npm install dayjs
```

Modifica `index.js`:

```js
const dayjs = require("dayjs");

console.log("Hoy es:", dayjs().format("DD/MM/YYYY"));
```

Ejecuta de nuevo el programa.

Comprueba qué ha cambiado:

- ¿Ha aparecido la carpeta `node_modules`?
- ¿Ha aparecido `package-lock.json`?
- ¿Se ha modificado `package.json`?
- ¿En qué apartado aparece Day.js?

### paso 4. crear un script

En `package.json`, añade este script dentro de la propiedad `scripts`:

```json
"start": "node index.js"
```

Asegúrate de que el JSON sigue siendo válido: las comas importan.

Ejecuta:

```bash
npm start
```

### paso 5. instalar TypeScript como dependencia de desarrollo

Ejecuta:

```bash
npm install -D typescript
```

Comprueba que TypeScript aparece en `devDependencies`.

Todavía no necesitas escribir código TypeScript: lo haremos en la siguiente clase.

### paso 6. preparar Git

Crea `.gitignore`:

```gitignore
node_modules/
```

Explica con tus palabras por qué no es necesario subir `node_modules` al repositorio.

---

## 8. ejercicios para practicar

### ejercicio 1 — ejecutar JavaScript

Crea `saludo.js` que muestre tu nombre y un mensaje de bienvenida. Ejecútalo con Node.js desde la terminal.

### ejercicio 2 — entender `package.json`

Crea un proyecto nuevo con `npm init -y`. Localiza los campos `name`, `version` y `scripts`.

Añade un script llamado `saludo` que ejecute tu archivo JavaScript. Ejecútalo con `npm run saludo`.

### ejercicio 3 — dependencias

Instala Day.js en tu proyecto y úsalo para mostrar la fecha actual.

Después, identifica qué información aparece en `package.json` y en `package-lock.json`.

### ejercicio 4 — dependencias de desarrollo

Instala TypeScript como dependencia de desarrollo.

Comprueba que aparece en `devDependencies`. Explica por qué lo hemos instalado con `-D` en lugar de hacerlo como una dependencia normal.

### ejercicio 5 — script de compilación

Con TypeScript instalado, añade un archivo `hola.ts`:

```ts
const mensaje: string = "Preparados para TypeScript";
console.log(mensaje);
```

Añade a `package.json` el script:

```json
"build": "tsc hola.ts"
```

Ejecuta:

```bash
npm run build
```

Comprueba si se ha generado `hola.js`. Ejecútalo con:

```bash
node hola.js
```

**Reto opcional:** crea otro script llamado `ejecutar` que ejecute `node hola.js`. ¿Qué comando debes utilizar para lanzarlo?

---

## 9. conceptos que conviene recordar

- **JavaScript:** lenguaje de programación.
- **Node.js:** entorno que permite ejecutar JavaScript fuera del navegador.
- **npm:** gestor de paquetes que utilizaremos durante el bootcamp.
- **Paquete:** código reutilizable que podemos instalar en un proyecto.
- **Dependencia:** paquete que el proyecto necesita.
- **`package.json`:** información, dependencias y scripts del proyecto.
- **`dependencies`:** dependencias necesarias para ejecutar la aplicación en su entorno de destino.
- **`devDependencies`:** herramientas que se utilizan principalmente durante el desarrollo.
- **`node_modules`:** carpeta donde se instalan los paquetes.
- **`package-lock.json`:** registra las versiones concretas y el árbol de dependencias instalado.
- **Script de npm:** comando que guardamos en `package.json` para ejecutarlo fácilmente.
- **`.gitignore`:** archivo que indica a Git qué elementos debe ignorar.

## recursos

- [documentación oficial de Node.js](https://nodejs.org/en/learn)
- [documentación oficial de npm](https://docs.npmjs.com/)
- [documentación de TypeScript](https://www.typescriptlang.org/docs/)

**idea final:** Node.js nos permite ejecutar JavaScript fuera del navegador. npm nos ayuda a instalar y gestionar paquetes, y `package.json` permite organizar las dependencias y los comandos de nuestro proyecto. Estas herramientas serán la base para trabajar con TypeScript, Express y NestJS.