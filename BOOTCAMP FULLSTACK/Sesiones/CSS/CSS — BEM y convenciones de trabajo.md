
# CSS — BEM y convenciones de trabajo

## Objetivo

En un proyecto profesional no solo importa que nuestro CSS funcione.

También necesitamos que **todo el equipo escriba el código siguiendo unas reglas comunes**.

En esta sesión vamos a conocer **BEM**, una metodología sencilla para nombrar las clases CSS.

En nuestros proyectos utilizaremos BEM como convención.

---

# 1. En un equipo hay convenciones

Cuando entras a trabajar en un proyecto, normalmente ya existen unas reglas:

- Cómo se nombran las clases.
- Cómo se organizan los archivos.
- Cómo se estructura el código.
- Cómo se hacen los commits.
- Cómo se revisa el código.

No tienes que utilizar necesariamente tu forma favorita.

> **Cuando trabajas en un equipo, te adaptas a la forma de trabajar del equipo.**

Lo importante es que **todo el equipo siga las mismas reglas**.

---

# 2. ¿Qué es BEM?

BEM es una metodología para **nombrar clases CSS**.

Significa:

```text
Block
Element
Modifier
```

La estructura básica es:

```text
bloque
bloque__elemento
bloque--modificador
```

La chuleta que tenemos que recordar:

```text
__  → pertenece a
--  → variante
```

---

# 3. Block

Un **Block** es un componente independiente.

Por ejemplo, una tarjeta:

```html
<article class="card">
    ...
</article>
```

```css
.card {
    padding: 20px;
    border: 1px solid #ccc;
}
```

Otros ejemplos:

```text
.navbar
.card
.form
.button
.footer
```

Son componentes que podemos identificar por sí mismos.

---

# 4. Element

Un **Element** es una parte de un bloque.

Se escribe:

```text
bloque__elemento
```

Por ejemplo:

```html
<article class="card">

    <h2 class="card__title">
        Curso de CSS
    </h2>

    <p class="card__description">
        Aprende CSS desde cero.
    </p>

    <button class="card__button">
        Ver curso
    </button>

</article>
```

Tenemos:

```text
card
 ├── card__title
 ├── card__description
 └── card__button
```

Los dos guiones bajos significan:

> Este elemento pertenece al bloque `card`.

---

# 5. Modifier

Un **Modifier** indica una variante de un bloque o elemento.

Se escribe:

```text
bloque--modificador
```

Por ejemplo:

```html
<article class="card card--featured">
    ...
</article>
```

Aquí:

```text
card
```

es el bloque.

Y:

```text
card--featured
```

es una variante de ese bloque.

```css
.card {
    padding: 20px;
    border: 1px solid #ccc;
}

.card--featured {
    border: 2px solid gold;
}
```

Podemos tener diferentes variantes:

```html
<button class="button button--primary">
    Guardar
</button>

<button class="button button--danger">
    Eliminar
</button>
```

```text
.button
.button--primary
.button--danger
```

---

# 6. Ejemplo completo

```html
<article class="card card--featured">

    <h2 class="card__title">
        Curso de CSS
    </h2>

    <p class="card__description">
        Aprende CSS desde cero.
    </p>

    <button class="card__button">
        Ver curso
    </button>

</article>
```

```css
.card {
    padding: 20px;
    border: 1px solid #ccc;
}

.card__title {
    font-size: 24px;
}

.card__description {
    color: gray;
}

.card__button {
    padding: 10px 20px;
}

.card--featured {
    border: 2px solid gold;
}
```

Podemos leerlo rápidamente:

```text
card
 ├── card__title
 ├── card__description
 └── card__button

card--featured
      ↓
    variante
```

---

# 7. ¿Por qué utilizar BEM?

Porque los nombres nos ayudan a entender el código.

Si vemos:

```html
<h2 class="card__title">
```

sabemos que es:

- un título;
- que pertenece a una `card`.

Si vemos:

```html
<article class="card card--featured">
```

sabemos que:

- es una `card`;
- es una variante `featured`.

Esto resulta especialmente útil cuando el proyecto crece y trabajan varias personas.

---

# 8. Evitar depender de la estructura HTML

Podríamos escribir:

```css
.card h2 {
    font-size: 24px;
}
```

Pero estamos diciendo:

> Todos los `h2` que estén dentro de `.card` tienen este estilo.

Con BEM:

```css
.card__title {
    font-size: 24px;
}
```

el nombre indica directamente qué función tiene ese elemento.

---

# 9. No hacer nombres interminables

No necesitamos hacer:

```text
.card__header__title
```

Es preferible mantener los nombres sencillos:

```text
.card
.card__header
.card__title
```

No necesitamos describir toda la estructura HTML en el nombre de la clase.

---

# 10. BEM en nuestros proyectos

A partir de ahora, cuando creemos clases CSS en nuestros proyectos:

```text
✓ .card
✓ .card__title
✓ .card--featured
```

Evitemos nombres poco claros como:

```text
✗ .caja
✗ .titulo-rojo
✗ .cosa
```

Y evitaremos depender innecesariamente de la estructura:

```css
.card h2 {
    ...
}
```

cuando podemos utilizar:

```css
.card__title {
    ...
}
```

---

# Chuleta BEM

```text
BEM
────────────────────────

.card
   ↓
BLOQUE

.card__title
       ↓
ELEMENTO

.card--featured
       ↓
MODIFICADOR
```

### Regla mental

```text
__  → pertenece a
--  → variante
```

### Ejemplo

```html
<article class="card card--featured">

    <h2 class="card__title">
        Curso de CSS
    </h2>

    <p class="card__description">
        Aprende CSS.
    </p>

</article>
```

---

# Ejercicios

## Ejercicio 1 — Crear una card

Crea una tarjeta de producto utilizando BEM.

Debe tener:

- Nombre del producto.
- Descripción.
- Precio.
- Botón.

### Resultado esperado

Las clases deberían seguir una estructura parecida a:

```text
.product
.product__title
.product__description
.product__price
.product__button
```

---

## Ejercicio 2 — Variante

Crea una segunda versión de la tarjeta para destacar un producto.

Por ejemplo:

```text
.product--featured
```

### Resultado esperado

La tarjeta destacada debe tener algún cambio visual.

---

## Ejercicio 3 — Botones

Crea un bloque:

```text
.button
```

Y dos variantes:

```text
.button--primary
.button--danger
```

### Resultado esperado

Los dos botones comparten los estilos generales, pero tienen diferentes colores.

---

## Reto opcional

Crea un pequeño componente de navegación utilizando BEM.

Por ejemplo:

```text
.navbar
.navbar__logo
.navbar__menu
.navbar__link
.navbar--dark
```

El objetivo no es hacer un diseño complicado.

El objetivo es practicar la nomenclatura.

---

# Para recordar

> **BEM no es solo una forma de poner nombres. Es una convención para que todo el equipo hable el mismo idioma cuando escribe CSS.**

Y recuerda:

> **Cuando trabajas en un equipo, te adaptas a la forma de trabajar del equipo.**