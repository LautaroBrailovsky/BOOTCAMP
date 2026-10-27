# 4. DOM, eventos, nodos y navegación

## Objetivos

En esta clase vamos a aprender a utilizar JavaScript para interactuar con una página HTML.

Al terminar la clase deberíamos poder:

- Seleccionar elementos HTML desde JavaScript.
- Modificar el contenido de una página.
- Modificar estilos y atributos.
- Crear y eliminar elementos.
- Escuchar eventos del usuario.
- Utilizar `addEventListener()`.
- Combinar DOM y eventos para crear pequeñas interacciones.

---

# 1. ¿Qué es el DOM?

El **DOM (Document Object Model)** es la representación que hace el navegador de nuestro documento HTML.

Podemos imaginarlo como un árbol de elementos:

```text
HTML
├── HEAD
└── BODY
    ├── HEADER
    ├── MAIN
    │   ├── H1
    │   └── P
    └── FOOTER
```

Gracias al DOM podemos utilizar JavaScript para acceder a los elementos HTML y modificarlos.

Por ejemplo:

```html
<p id="mensaje">Hola</p>
```

Desde JavaScript podemos encontrar ese elemento:

```javascript
let mensaje = document.getElementById("mensaje");

console.log(mensaje);
```

### Ejercicio 1 — Buscar un elemento

Crea una página con:

```html
<h1 id="titulo">Mi página</h1>
<p id="descripcion">Una pequeña descripción.</p>
```

Desde JavaScript:

1. Selecciona el `<h1>`.
2. Selecciona el `<p>`.
3. Muestra ambos elementos por consola.

---

# 2. Seleccionar elementos

Tenemos diferentes formas de buscar elementos.

## `getElementById()`

Busca un elemento por su `id`.

```javascript
let titulo = document.getElementById("titulo");
```

Es especialmente útil cuando sabemos exactamente qué elemento queremos seleccionar.

---

## `getElementsByTagName()`

Busca elementos por el nombre de la etiqueta.

```javascript
let parrafos = document.getElementsByTagName("p");

console.log(parrafos);
```

Si tenemos:

```html
<p>Uno</p>
<p>Dos</p>
<p>Tres</p>
```

obtendremos todos los `<p>`.

---

## `getElementsByClassName()`

Busca elementos que tengan una determinada clase.

```javascript
let elementos = document.getElementsByClassName("destacado");
```

Por ejemplo:

```html
<p class="destacado">Uno</p>
<p>Dos</p>
<p class="destacado">Tres</p>
```

---

## `querySelector()`

Permite utilizar selectores CSS.

```javascript
let titulo = document.querySelector("#titulo");
```

También:

```javascript
let parrafo = document.querySelector("p");
```

O:

```javascript
let destacado = document.querySelector(".destacado");
```

Importante:

`querySelector()` devuelve **el primer elemento que coincide**.

---

## `querySelectorAll()`

Devuelve todos los elementos que coinciden.

```javascript
let parrafos = document.querySelectorAll("p");
```

También podemos utilizar:

```javascript
let destacados = document.querySelectorAll(".destacado");
```

### Ejercicio 2 — Practicar selectores

Crea este HTML:

```html
<h1 id="titulo">Mi web</h1>

<p class="texto">Primer texto</p>
<p class="texto">Segundo texto</p>
<p>Texto normal</p>
```

Prueba a seleccionar:

1. El `h1` utilizando `getElementById()`.
2. Todos los `<p>` utilizando `getElementsByTagName()`.
3. Los elementos `.texto` utilizando `getElementsByClassName()`.
4. El primer `.texto` utilizando `querySelector()`.
5. Todos los `.texto` utilizando `querySelectorAll()`.

Muestra los resultados por consola.

---

# 3. Modificar elementos

Una vez que hemos seleccionado un elemento, podemos modificarlo.

## `innerHTML`

Permite cambiar el contenido HTML de un elemento.

HTML:

```html
<p id="mensaje">Texto original</p>
```

JavaScript:

```javascript
let mensaje = document.getElementById("mensaje");

mensaje.innerHTML = "Texto nuevo";
```

La página pasará de mostrar:

```text
Texto original
```

a mostrar:

```text
Texto nuevo
```

### Ejercicio 3 — Cambiar contenido

Crea:

```html
<h1 id="titulo">Título original</h1>
<p id="texto">Texto original</p>
```

Desde JavaScript cambia:

- El título a `"Mi página web"`.
- El párrafo a `"Estoy aprendiendo JavaScript"`.

---

# 4. Modificar estilos

También podemos modificar estilos desde JavaScript.

```javascript
let titulo = document.getElementById("titulo");

titulo.style.backgroundColor = "pink";
titulo.style.fontSize = "40px";
```

Las propiedades CSS que llevan guiones se escriben utilizando camelCase.

Por ejemplo:

```css
background-color
```

en JavaScript:

```javascript
backgroundColor
```

### Ejercicio 4 — Cambiar estilos

Crea un párrafo:

```html
<p id="mensaje">Hola JavaScript</p>
```

Desde JavaScript modifica:

- El color del texto.
- El color de fondo.
- El tamaño de la letra.

Prueba diferentes valores.

---

# 5. Modificar atributos

También podemos modificar atributos de HTML.

Por ejemplo:

```html
<img id="foto" src="imagen1.jpg" alt="Imagen">
```

Podemos utilizar `setAttribute()`:

```javascript
let foto = document.getElementById("foto");

foto.setAttribute("src", "imagen2.jpg");
```

También podemos modificar otros atributos:

```javascript
foto.setAttribute("alt", "Nueva imagen");
```

### Ejercicio 5 — Modificar un atributo

Crea un enlace:

```html
<a id="enlace" href="https://www.google.com">Google</a>
```

Desde JavaScript:

1. Cambia el `href`.
2. Cambia el texto del enlace.
3. Comprueba el resultado en el navegador.

---

# 6. Crear elementos

JavaScript también puede crear nuevos elementos HTML.

```javascript
let nuevoParrafo = document.createElement("p");
```

Pero todavía no aparecerá en la página.

Tenemos que añadirlo a otro elemento.

---

## `appendChild()`

```javascript
let nuevoParrafo = document.createElement("p");

nuevoParrafo.innerHTML = "Soy un párrafo nuevo";

let contenedor = document.getElementById("contenedor");

contenedor.appendChild(nuevoParrafo);
```

HTML:

```html
<div id="contenedor"></div>
```

Después de ejecutar JavaScript tendremos:

```html
<div id="contenedor">
    <p>Soy un párrafo nuevo</p>
</div>
```

### Ejercicio 6 — Crear elementos

Crea:

```html
<div id="lista"></div>
```

Desde JavaScript:

1. Crea un `<p>`.
2. Ponle el texto `"Elemento creado con JavaScript"`.
3. Añádelo al `<div>`.

Después crea otros dos párrafos.

---

# 7. Insertar y reemplazar elementos

También podemos insertar elementos antes de otros elementos y reemplazarlos.

El material original utiliza:

- `insertBefore()`
- `replaceChild()`
- `removeChild()`

Son métodos que permiten modificar la estructura del DOM.

Para esta primera práctica nos centraremos especialmente en entender la idea:

```text
Seleccionar
    ↓
Crear / modificar
    ↓
Añadir / reemplazar / eliminar
```

Por ejemplo:

```javascript
let nuevoElemento = document.createElement("p");

nuevoElemento.innerHTML = "Nuevo elemento";

let contenedor = document.getElementById("contenedor");

contenedor.appendChild(nuevoElemento);
```

### Ejercicio 7 — Añadir varios elementos

Crea un botón y un contenedor vacío:

```html
<button id="crear">Crear elemento</button>

<div id="contenedor"></div>
```

Todavía no necesitamos eventos. Primero prueba a crear manualmente tres párrafos desde JavaScript y añadirlos al contenedor.

---

# 8. Eliminar elementos

Podemos eliminar elementos del DOM.

Una forma sencilla es utilizar:

```javascript
elemento.remove();
```

Por ejemplo:

```javascript
let mensaje = document.getElementById("mensaje");

mensaje.remove();
```

También existe `removeChild()`, que permite eliminar un elemento desde su elemento padre.

### Ejercicio 8 — Eliminar un elemento

Crea:

```html
<p id="mensaje">Este mensaje desaparecerá</p>
```

Desde JavaScript:

1. Selecciona el párrafo.
2. Elimínalo.
3. Comprueba qué ocurre en el navegador.

---

# 9. Eventos

Hasta ahora JavaScript se ejecutaba cuando cargábamos el script.

Pero una página web normalmente necesita reaccionar a las acciones del usuario.

Por ejemplo:

- Hacer click.
- Cambiar un input.
- Pasar el ratón por encima.
- Enviar un formulario.
- Hacer scroll.

Estas acciones son **eventos**.

Algunos eventos habituales:

- `click`
- `change`
- `mousedown`
- `mouseenter`
- `mouseleave`
- `mouseover`
- `mouseout`
- `mouseup`
- `scroll`
- `submit`

---

# 10. Eventos directamente en HTML

Una forma de utilizar eventos es escribirlos directamente en HTML.

Por ejemplo:

```html
<button onclick="saludar()">Saludar</button>
```

Y en JavaScript:

```javascript
function saludar() {
    console.log("Hola");
}
```

El prefijo `on` aparece cuando escribimos el evento directamente como atributo HTML:

```html
onclick
onchange
onmouseover
```

### Ejercicio 9 — Primer evento

Crea un botón:

```html
<button onclick="saludar()">Saludar</button>
```

Crea la función `saludar()` para que:

```javascript
console.log("Hola");
```

A continuación modifica la función para que cambie el contenido de un `<p>`.

---

# 11. Seleccionar un elemento y reaccionar a un evento

También podemos seleccionar los elementos desde JavaScript.

HTML:

```html
<button id="boton">Pulsa</button>

<p id="mensaje">Todavía no has pulsado el botón</p>
```

JavaScript:

```javascript
let boton = document.getElementById("boton");
let mensaje = document.getElementById("mensaje");

boton.onclick = function() {
    mensaje.innerHTML = "Has pulsado el botón";
};
```

Al hacer click, cambia el texto.

### Ejercicio 10 — Botón que cambia la página

Crea:

```html
<button id="boton">Cambiar</button>

<h1 id="titulo">Título original</h1>
<p id="texto">Texto original</p>
```

Cuando el usuario pulse el botón:

- Cambia el título.
- Cambia el texto.
- Cambia el color del título.

---

# 12. `addEventListener()`

Una forma muy habitual de trabajar con eventos es:

```javascript
elemento.addEventListener("click", funcion);
```

Por ejemplo:

```javascript
let boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    console.log("Has pulsado el botón");
});
```

La idea es:

```text
elemento
   ↓
addEventListener()
   ↓
evento
   ↓
acción
```

Por ejemplo:

```javascript
boton.addEventListener("click", cambiarTexto);
```

Y después:

```javascript
function cambiarTexto() {
    console.log("Texto cambiado");
}
```

### Ejercicio 11 — `addEventListener()`

Crea un botón y un párrafo.

Cuando se pulse el botón utilizando `addEventListener()`:

1. Cambia el texto del párrafo.
2. Cambia su color.
3. Cambia su tamaño.

---

# 13. Eventos de ratón

Podemos reaccionar cuando el ratón entra o sale de un elemento.

Por ejemplo:

```javascript
let caja = document.getElementById("caja");

caja.addEventListener("mouseenter", function() {
    caja.style.backgroundColor = "pink";
});
```

Y:

```javascript
caja.addEventListener("mouseleave", function() {
    caja.style.backgroundColor = "white";
});
```

### Ejercicio 12 — Caja interactiva

Crea:

```html
<div id="caja">
    Pasa el ratón por encima
</div>
```

Haz que:

- Al entrar el ratón cambie el color de fondo.
- Al salir vuelva al color original.

Después prueba con `mouseover` y `mouseout`.

---

# 14. Eventos en imágenes

También podemos modificar una imagen utilizando eventos.

HTML:

```html
<img
    id="imagen"
    src="imagen.jpg"
    alt="Imagen"
>
```

JavaScript:

```javascript
let imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", function() {
    imagen.style.width = "300px";
});
```

Podemos hacer que vuelva a su tamaño original:

```javascript
imagen.addEventListener("mouseout", function() {
    imagen.style.width = "150px";
});
```

### Ejercicio 13 — Imagen interactiva

Crea una imagen.

Cuando el ratón pase por encima:

- Aumenta su tamaño.

Cuando el ratón salga:

- Devuelve la imagen a su tamaño original.

---

# 15. Ejercicio guiado — Tarjeta interactiva

Vamos a juntar lo aprendido.

Crea una tarjeta:

```html
<div id="tarjeta">
    <h2 id="nombre">Ana</h2>
    <p id="descripcion">Desarrolladora web</p>
    <button id="boton">Cambiar información</button>
</div>
```

Desde JavaScript:

1. Selecciona los elementos.
2. Añade un evento al botón.
3. Al pulsarlo:
   - cambia el nombre;
   - cambia la descripción;
   - cambia el color de fondo de la tarjeta.

### Ampliación

Añade un segundo botón que cambie el tamaño del título.

---

# 16. Ejercicio final — Página interactiva

Crea una pequeña página HTML con:

- Un título.
- Un párrafo.
- Una imagen.
- Una lista.
- Un botón.

Utiliza JavaScript para conseguir lo siguiente:

### Al pulsar el botón

- Cambiar el texto del título.
- Cambiar el contenido del párrafo.
- Cambiar el color del título.
- Cambiar el tamaño de la imagen.

### Al pasar el ratón por encima de la imagen

- Cambiar su tamaño.

### Al salir de la imagen

- Recuperar su tamaño original.

### Extra

Crea otro botón que añada un nuevo elemento `<p>` al final de la página.

---

# 17. Reto opcional — Lista dinámica

Crea una pequeña lista de tareas:

```html
<input id="tarea">
<button id="añadir">Añadir</button>

<ul id="lista"></ul>
```

Cuando el usuario escriba una tarea y pulse **Añadir**:

1. Lee el contenido del input.
2. Crea un `<li>`.
3. Introduce el texto de la tarea.
4. Añádelo al `<ul>`.
5. Limpia el input.

### Reto extra

Haz que al hacer click sobre una tarea se elimine.

---

# Resumen

En esta clase hemos aprendido a utilizar JavaScript para interactuar con HTML.

Conceptos principales:

```javascript
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()
```

Modificar contenido:

```javascript
elemento.innerHTML = "Nuevo contenido";
```

Modificar estilos:

```javascript
elemento.style.color = "red";
```

Modificar atributos:

```javascript
elemento.setAttribute("atributo", "valor");
```

Crear elementos:

```javascript
document.createElement()
```

Añadir elementos:

```javascript
appendChild()
```

Eliminar elementos:

```javascript
remove()
removeChild()
```

Eventos:

```javascript
elemento.addEventListener("click", funcion);
```

La idea fundamental de esta clase es:

```text
HTML
 ↓
DOM
 ↓
JavaScript selecciona elementos
 ↓
JavaScript modifica elementos
 ↓
Eventos permiten reaccionar al usuario
```

---

# Recursos

- [DOM HTML — W3Schools](https://www.w3schools.com/js/js_htmldom.asp)
- [Métodos del DOM — W3Schools](https://www.w3schools.com/js/js_htmldom_methods.asp)
- [Document — W3Schools](https://www.w3schools.com/js/js_htmldom_document.asp)
- [Element — W3Schools](https://www.w3schools.com/js/js_htmldom_elements.asp)
- [HTML DOM Events — W3Schools](https://www.w3schools.com/js/js_htmldom_events.asp)
- [addEventListener — W3Schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)