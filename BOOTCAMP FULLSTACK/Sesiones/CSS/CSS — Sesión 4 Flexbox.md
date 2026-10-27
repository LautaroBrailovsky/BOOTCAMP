# CSS — Sesión 4: Flexbox

## Objetivos

Al terminar la sesión, el alumno debe ser capaz de utilizar Flexbox para crear layouts habituales:

- Navbars.
- Menús.
- Filas y columnas.
- Grupos de botones.
- Tarjetas.
- Contenido centrado.
- Layouts que se adaptan al espacio disponible.

Flexbox es una de las herramientas más importantes de CSS para organizar elementos.

---

# 1. ¿Qué es Flexbox?

Flexbox permite organizar elementos dentro de un contenedor.

Activamos Flexbox con:

```css
.container {
    display: flex;
}
```

A partir de ese momento, los elementos hijos del contenedor pasan a organizarse como elementos flexibles.

```html
<div class="container">
    <div>Uno</div>
    <div>Dos</div>
    <div>Tres</div>
</div>
```

```css
.container {
    display: flex;
}
```

Por defecto, los elementos se colocan en una fila.

```text
┌────────┐  ┌────────┐  ┌────────┐
│  Uno   │  │  Dos   │  │ Tres   │
└────────┘  └────────┘  └────────┘
```

---

# 2. Los dos ejes

Para entender Flexbox hay que entender dos ejes:

- **Eje principal**
- **Eje secundario**

Por defecto:

```css
flex-direction: row;
```

El eje principal es horizontal.

```text
→ → → → →  eje principal

┌────┐ ┌────┐ ┌────┐
│ 1  │ │ 2  │ │ 3  │
└────┘ └────┘ └────┘
```

Esto es importante porque:

```css
justify-content
```

trabaja sobre el **eje principal**.

Mientras que:

```css
align-items
```

trabaja sobre el **eje secundario**.

---

# 3. flex-direction

Controla la dirección de los elementos.

## Fila

```css
.container {
    display: flex;
    flex-direction: row;
}
```

```text
1   2   3
```

## Columna

```css
.container {
    display: flex;
    flex-direction: column;
}
```

```text
1
2
3
```

También existe:

```css
row-reverse
column-reverse
```

pero los utilizaremos mucho menos.

---

# 4. gap

`gap` crea espacio entre los elementos.

Es una propiedad especialmente útil y muy habitual con Flexbox.

```css
.container {
    display: flex;
    gap: 20px;
}
```

Resultado:

```text
┌────┐    ┌────┐    ┌────┐
│ 1  │    │ 2  │    │ 3  │
└────┘    └────┘    └────┘
```

Podemos utilizarla tanto en filas como en columnas.

```css
.container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
```

### Idea importante

En muchos layouts podemos evitar llenar el CSS de `margin` para separar elementos y utilizar:

```css
gap
```

---

# 5. justify-content

Controla cómo se distribuyen los elementos en el **eje principal**.

Ejemplo:

```css
.container {
    display: flex;
    justify-content: center;
}
```

Los elementos quedan centrados.

Valores habituales:

```css
flex-start
center
flex-end
space-between
space-around
space-evenly
```

### `center`

```text
      1   2   3
```

### `space-between`

```text
1                  2                  3
```

### `space-evenly`

```text
     1          2          3
```

No hace falta memorizar todos los valores ahora. Lo importante es entender que `justify-content` controla la distribución en el eje principal.

---

# 6. align-items

Controla la posición de los elementos en el **eje secundario**.

Ejemplo típico:

```css
.header {
    display: flex;
    align-items: center;
}
```

Esto resulta especialmente útil para alinear verticalmente elementos dentro de una fila.

---

# 7. Centrar horizontal y verticalmente

Uno de los usos más conocidos de Flexbox:

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

HTML:

```html
<div class="container">
    <button>Continuar</button>
</div>
```

Resultado:

```text
┌──────────────────────────────┐
│                              │
│                              │
│          Continuar           │
│                              │
│                              │
└──────────────────────────────┘
```

Este patrón aparece constantemente en interfaces web.

---

# 8. Flexbox en un navbar

Un navbar es un ejemplo perfecto de Flexbox.

```html
<nav class="navbar">
    <a href="#" class="logo">Mi Web</a>

    <ul class="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Cursos</a></li>
        <li><a href="#">Contacto</a></li>
    </ul>

    <button>Entrar</button>
</nav>
```

```css
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.menu {
    display: flex;
    gap: 20px;
}
```

Aquí estamos utilizando Flexbox en dos niveles:

- El navbar organiza sus elementos.
- La lista organiza los enlaces.

---

# 9. Flexbox para una lista de tarjetas

```html
<section class="cards">
    <article class="card">Producto 1</article>
    <article class="card">Producto 2</article>
    <article class="card">Producto 3</article>
</section>
```

```css
.cards {
    display: flex;
    gap: 20px;
}
```

Podemos crear fácilmente una fila de tarjetas.

---

# 10. flex-wrap

¿Qué ocurre si no hay espacio suficiente?

Podemos permitir que los elementos pasen a otra línea:

```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

```text
┌────┐ ┌────┐ ┌────┐
│ 1  │ │ 2  │ │ 3  │

┌────┐ ┌────┐
│ 4  │ │ 5  │
```

Esto resulta muy útil para:

- Galerías.
- Productos.
- Cards.
- Menús.
- Listados.

---

# 11. Tamaño de los elementos

También podemos controlar cómo crecen o se reducen los elementos hijos.

Las propiedades principales son:

```css
flex-grow
flex-shrink
flex-basis
```

Y existe una forma abreviada:

```css
flex
```

Por ejemplo:

```css
.card {
    flex: 1;
}
```

Esto permite que varias tarjetas compartan el espacio disponible.

Ejemplo:

```css
.cards {
    display: flex;
    gap: 20px;
}

.card {
    flex: 1;
}
```

Las tarjetas se reparten el espacio disponible.

---

# 12. Otras propiedades útiles

Estas propiedades existen y conviene reconocerlas:

```css
order
align-self
flex-grow
flex-shrink
flex-basis
align-content
```

Pero no necesitamos aprenderlas todas al mismo nivel.

La base de Flexbox debe ser:

```css
display: flex;
flex-direction;
justify-content;
align-items;
gap;
flex-wrap;
```

Si entendemos bien estas propiedades, podemos construir una gran cantidad de layouts reales.

---

# 13. Ejemplo completo — Header

```html
<header class="header">
    <a href="#" class="logo">Mi Web</a>

    <nav>
        <ul class="menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Sobre nosotros</a></li>
        </ul>
    </nav>

    <button class="login">Entrar</button>
</header>
```

```css
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 20px;
}

.menu {
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
}
```

Este tipo de estructura aparece constantemente en páginas reales.

---

# Resumen de Flexbox

### Para empezar

```css
.container {
    display: flex;
}
```

### Dirección

```css
flex-direction: row;
flex-direction: column;
```

### Distribución

```css
justify-content: center;
```

### Alineación

```css
align-items: center;
```

### Espacio

```css
gap: 20px;
```

### Varias líneas

```css
flex-wrap: wrap;
```

### Repartir espacio

```css
flex: 1;
```

---

# Ejercicios

## Ejercicio 1 — Menú de navegación

Crea un navbar con:

- Logo.
- Tres enlaces.
- Botón de login.

Utiliza Flexbox para organizar los elementos.

### Resultado esperado

Los elementos aparecen correctamente alineados en una misma fila.

---

## Ejercicio 2 — Grupo de tarjetas

Crea tres tarjetas.

Utiliza:

```css
display: flex;
gap: ...;
```

para colocarlas en una fila.

### Resultado esperado

Las tres tarjetas aparecen separadas y alineadas.

---

## Ejercicio 3 — Tarjetas con wrap

Crea seis tarjetas dentro de un contenedor.

Utiliza:

```css
flex-wrap: wrap;
```

### Resultado esperado

Cuando no hay suficiente espacio, las tarjetas pasan a la siguiente línea.

---

## Ejercicio 4 — Centrar un botón

Crea un contenedor que ocupe una altura determinada y coloca un botón exactamente en el centro.

### Resultado esperado

El botón queda centrado horizontal y verticalmente.

**Pista:**

```css
justify-content: center;
align-items: center;
```

---

## Reto — Mini layout

Crea una pequeña página con:

- Navbar.
- Título principal.
- Tres tarjetas.
- Grupo de botones.
- Footer.

Utiliza Flexbox para organizar todos los elementos posibles.

No busques que quede bonita todavía.

El objetivo es que el layout funcione.