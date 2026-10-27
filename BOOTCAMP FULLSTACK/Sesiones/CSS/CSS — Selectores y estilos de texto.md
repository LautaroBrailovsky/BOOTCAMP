
# CSS — Selectores y estilos de texto

## 1. ¿Qué es CSS?

CSS sirve para **dar estilo a una página HTML**.

HTML define qué elementos tenemos.  
CSS define **cómo se ven**.

Normalmente escribimos el CSS en un archivo `.css` y lo conectamos desde el HTML:

```html
<link rel="stylesheet" href="style.css">
```

La estructura básica de CSS es:

```css
selector {
  propiedad: valor;
}
```

Por ejemplo:

```css
h1 {
  color: blue;
}
```

Todos los `h1` serán azules.

---

# 2. Selectores

Los selectores indican **qué elementos queremos modificar**.

## Por etiqueta

Selecciona todos los elementos de ese tipo.

```css
p {
  color: blue;
}
```

Todos los `<p>` serán azules.

---

## Por clase

Una clase se puede reutilizar en varios elementos.

HTML:

```html
<h1 class="titulo">Mi página</h1>
<p class="titulo">Texto de ejemplo</p>
```

CSS:

```css
.titulo {
  color: red;
}
```

El `.` indica que estamos seleccionando una clase.

**En la práctica, utilizaremos muchísimo las clases.**

---

## Por ID

Selecciona el elemento que tenga ese `id`.

```html
<h1 id="principal">Mi página</h1>
```

```css
#principal {
  color: green;
}
```

El `#` indica que estamos seleccionando un ID.

---

## Varios selectores

Podemos aplicar el mismo estilo a varios selectores:

```css
h1, h2, p {
  font-family: Arial, sans-serif;
}
```

---

# 3. Selectores combinados

Sirven para indicar una relación entre elementos.

## Descendiente — espacio

```css
nav a {
  color: black;
}
```

Significa:

> Busca los `<a>` que estén dentro de `nav`.

No importa si están directamente dentro o dentro de otro elemento.

---

## Hijo directo — `>`

```css
nav > a {
  color: red;
}
```

Significa:

> Busca los `<a>` que sean hijos directos de `nav`.

---

## Hermano adyacente — `+`

```css
h2 + p {
  color: red;
}
```

Significa:

> Selecciona el `<p>` que aparece justo después de un `<h2>`.

---

## Hermanos posteriores — `~`

```css
h2 ~ p {
  color: red;
}
```

Significa:

> Selecciona los `<p>` que aparecen después del `<h2>` y son hermanos.

Este selector existe y conviene conocerlo, pero **no es de los que más utilizaremos al empezar**.

---

# 4. Pseudoclases

Una pseudoclase permite aplicar estilos cuando un elemento está en una **situación concreta**.

Se escribe con `:`.

## `:hover`

Se aplica cuando pasamos el ratón por encima.

```css
button:hover {
  background-color: black;
  color: white;
}
```

**Resultado esperado:** el botón cambia al pasar el ratón por encima.

Es muy habitual en botones y enlaces.

---

## `:focus`

Se aplica cuando un elemento recibe el foco.

Por ejemplo, cuando hacemos clic en un campo de formulario:

```css
input:focus {
  border-color: blue;
}
```

**Resultado esperado:** el borde del `input` cambia cuando estamos escribiendo en él.

---

## `:first-child`

Selecciona el primer hijo.

```css
li:first-child {
  font-weight: bold;
}
```

**Resultado esperado:** el primer elemento de la lista aparece en negrita.

---

## `:last-child`

Selecciona el último hijo.

```css
li:last-child {
  color: red;
}
```

---

## `:nth-child()`

Permite seleccionar un elemento por posición.

```css
li:nth-child(2) {
  color: blue;
}
```

**Resultado esperado:** el segundo elemento de la lista será azul.

También podemos utilizar otros números:

```css
li:nth-child(3) { }
li:nth-child(4) { }
```

---

> Hay más pseudoclases. No necesitamos memorizarlas todas.
> Lo importante es saber que permiten seleccionar elementos según una situación o posición concreta.

---

# 5. Pseudoelementos

Los pseudoelementos permiten modificar **una parte de un elemento** o añadir contenido visual mediante CSS.

Se escriben normalmente con `::`.

## `::before`

Añade contenido antes del contenido del elemento.

```html
<h2>Buscar</h2>
```

```css
h2::before {
  content: "🔍 ";
}
```

**Resultado esperado:**

```text
🔍 Buscar
```

Un uso habitual es añadir iconos o pequeños elementos decorativos.

---

## `::after`

Añade contenido después del contenido del elemento.

```html
<a href="#">Más información</a>
```

```css
a::after {
  content: " →";
}
```

**Resultado esperado:**

```text
Más información →
```

También se utiliza mucho para decoración.

Por ejemplo, una línea debajo de un título:

```css
h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background-color: black;
}
```

---

## Otros pseudoelementos

### `::first-letter`

Selecciona la primera letra.

```css
p::first-letter {
  font-size: 2rem;
}
```

### `::first-line`

Selecciona la primera línea.

```css
p::first-line {
  font-weight: bold;
}
```

### `::marker`

Permite modificar el marcador de una lista.

```css
li::marker {
  color: red;
}
```

### `::selection`

Modifica el texto cuando el usuario lo selecciona.

```css
::selection {
  background-color: yellow;
}
```

---

# 6. Estilos de texto

Muchas propiedades de CSS sirven para modificar textos.

En lugar de estudiar cada propiedad como un tema independiente, vamos a verlas **juntas sobre un mismo ejemplo**.

> Estas propiedades no son exclusivas de `<p>` o `<h1>`.
> Pueden aplicarse a cualquier elemento que tenga texto, como `span`, `a`, `button`, etc.

HTML:

```html
<h1>Mi página web</h1>

<p>
  Este es un texto de ejemplo para practicar los estilos de texto.
</p>
```

CSS:

```css
h1 {
  font-family: Arial, sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #222;
  text-align: center;
  line-height: 1.2;
  text-decoration: underline;
}

p {
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: normal;
  color: #444;
  line-height: 1.6;
  text-align: left;
}
```

### ¿Qué hace cada propiedad?

| Propiedad | ¿Para qué sirve? |
|---|---|
| `font-family` | Tipo de letra |
| `font-size` | Tamaño de letra |
| `font-weight` | Grosor de letra |
| `color` | Color del texto |
| `text-align` | Alineación del texto |
| `line-height` | Separación entre líneas |
| `text-decoration` | Subrayado, tachado, etc. |

---

## `font-family`

Indica qué tipo de letra queremos utilizar.

```css
p {
  font-family: Arial, sans-serif;
}
```

Podemos indicar varias fuentes. Si la primera no está disponible, se intentará utilizar la siguiente.

---

## `font-size`

Cambia el tamaño del texto.

```css
h1 {
  font-size: 32px;
}
```

### `px`

Es un tamaño concreto:

```css
font-size: 20px;
```

---

## `rem`

`rem` toma como referencia el tamaño de letra definido en el elemento `html`.

Por ejemplo:

```css
html {
  font-size: 20px;
}

h1 {
  font-size: 2rem;
}
```

Si `1rem = 20px`:

```text
2rem = 40px
```

**Idea para recordar:**

> `rem` → referencia al tamaño de letra de `html`.

---

## `em`

`em` toma como referencia el tamaño de letra del elemento padre.

```html
<div class="card">
  <h2>Título</h2>
</div>
```

```css
.card {
  font-size: 20px;
}

.card h2 {
  font-size: 2em;
}
```

El `h2` tendrá:

```text
2em = 40px
```

porque su elemento padre tiene `20px`.

**Idea para recordar:**

> `em` → referencia al tamaño de letra del elemento padre.

---

## `font-weight`

Controla el grosor del texto.

```css
p {
  font-weight: bold;
}
```

Los valores que más utilizaremos al principio:

```css
font-weight: normal;
font-weight: bold;
```

---

## `text-align`

Alinea el texto.

```css
h1 {
  text-align: center;
}
```

Valores habituales:

```css
text-align: left;
text-align: center;
text-align: right;
```

---

## `line-height`

Controla la separación entre las líneas de un texto.

```css
p {
  line-height: 1.6;
}
```

Un valor mayor deja más espacio entre líneas.

**Es muy útil para hacer que los textos largos sean más fáciles de leer.**

---

## `text-decoration`

Permite añadir una decoración al texto.

```css
a {
  text-decoration: underline;
}
```

Algunos valores:

```css
text-decoration: underline;
text-decoration: line-through;
text-decoration: none;
```

Por ejemplo, para quitar el subrayado habitual de un enlace:

```css
a {
  text-decoration: none;
}
```

---

# 7. Colores

Podemos cambiar el color del texto:

```css
p {
  color: blue;
}
```

Y el color de fondo:

```css
p {
  background-color: lightgray;
}
```

Podemos escribir colores de diferentes formas.

### Nombre

```css
color: red;
```

### Hexadecimal

```css
color: #ff0000;
```

### RGB

```css
color: rgb(255, 0, 0);
```

No necesitamos memorizar todos los formatos. Podemos consultar el valor que necesitemos.

---

# 8. Otras propiedades de texto

Existen muchas más propiedades relacionadas con el texto.

Por ejemplo:

```css
p {
  word-spacing: 10px;
}
```

Aumenta el espacio entre palabras.

```css
p {
  writing-mode: vertical-rl;
}
```

Cambia la dirección de escritura.

```css
p {
  word-wrap: break-word;
}
```

Permite controlar cómo se comportan las palabras que no caben en su contenedor.

Estas propiedades existen, pero **no necesitamos memorizar todos sus valores**.

Lo importante es saber que existen y aprender a buscarlas cuando las necesitemos.

---

# 9. Comentarios en CSS

Los comentarios sirven para escribir notas en nuestro código.

```css
/* Este estilo es para el título principal */

h1 {
  color: blue;
}
```

Los comentarios **no aparecen en la página**.

---

# 10. Idea importante

CSS tiene muchísimas propiedades y valores.

No necesitamos memorizarlo todo.

Durante la maquetación iremos aprendiendo las propiedades que necesitemos:

1. Sabemos qué queremos conseguir.
2. Buscamos la propiedad adecuada.
3. Probamos.
4. Comprobamos el resultado.
5. Ajustamos el CSS.

**Aprender CSS también consiste en aprender a buscar y consultar la documentación.**

## Recursos

- MDN CSS: https://developer.mozilla.org/es/docs/Web/CSS
- Selectores: https://www.w3schools.com/css/css_selectors.asp
- Pseudoclases: https://www.w3schools.com/css/css_pseudo_classes.asp
- Pseudoelementos: https://www.w3schools.com/css/css_pseudo_elements.asp