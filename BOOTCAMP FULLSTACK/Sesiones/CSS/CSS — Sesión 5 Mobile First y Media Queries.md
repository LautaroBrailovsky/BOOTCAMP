
# CSS — Sesión 5: Mobile First y Media Queries

## Objetivos

Al terminar la sesión, el alumno debe entender:

- Qué significa diseñar pensando primero en móvil.
- Qué es una media query.
- Cómo adaptar un diseño según el tamaño de pantalla.
- Cómo combinar media queries con Flexbox.
- Cómo ocultar o mostrar elementos dependiendo del espacio disponible.

---

# 1. El viewport

En una página responsive debemos indicar al navegador cómo debe utilizar el ancho de la pantalla.

Dentro de `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Es una etiqueta habitual en páginas web responsive.

---

# 2. ¿Qué significa responsive?

Una página responsive adapta su diseño al tamaño disponible.

Por ejemplo:

### Móvil

```text
┌──────────────┐
│    Card 1    │
├──────────────┤
│    Card 2    │
├──────────────┤
│    Card 3    │
└──────────────┘
```

### Pantalla grande

```text
┌────────┐  ┌────────┐  ┌────────┐
│ Card 1 │  │ Card 2 │  │ Card 3 │
└────────┘  └────────┘  └────────┘
```

El contenido es el mismo, pero cambia la distribución.

---

# 3. Mobile First

Mobile First significa comenzar diseñando para pantallas pequeñas.

Primero escribimos el CSS para móvil:

```css
.cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
```

Después añadimos cambios para pantallas más grandes.

```css
@media (min-width: 768px) {
    .cards {
        flex-direction: row;
    }
}
```

La idea es:

```text
Móvil
  ↓
CSS base

Pantalla más grande
  ↓
@media
```

---

# 4. Media queries

Una media query permite aplicar CSS solamente cuando se cumple una condición.

Ejemplo:

```css
@media (min-width: 768px) {
    body {
        background-color: lightgray;
    }
}
```

La regla se aplica cuando el viewport tiene al menos `768px` de ancho.

---

# 5. min-width

Es una de las formas más útiles para trabajar con Mobile First.

```css
@media (min-width: 768px) {
    /* CSS para pantallas de 768px o más */
}
```

Otro ejemplo:

```css
@media (min-width: 1000px) {
    /* CSS para pantallas más grandes */
}
```

No necesitamos memorizar una lista de dispositivos.

Pensamos en **cuándo nuestro diseño necesita cambiar**.

---

# 6. max-width

También podemos aplicar estilos cuando la pantalla es igual o menor que un determinado ancho.

```css
@media (max-width: 600px) {
    .extra {
        display: none;
    }
}
```

Esto puede servir para ocultar elementos cuando no hay suficiente espacio.

---

# 7. Ejemplo real — Cards responsive

HTML:

```html
<section class="cards">
    <article class="card">
        <h2>HTML</h2>
        <p>Aprende la estructura de una página.</p>
    </article>

    <article class="card">
        <h2>CSS</h2>
        <p>Aprende a dar estilo a una página.</p>
    </article>

    <article class="card">
        <h2>JavaScript</h2>
        <p>Aprende a añadir comportamiento.</p>
    </article>
</section>
```

CSS:

```css
.cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.card {
    padding: 20px;
    border: 1px solid #ccc;
}

@media (min-width: 768px) {
    .cards {
        flex-direction: row;
    }

    .card {
        flex: 1;
    }
}
```

### En móvil

Las tarjetas aparecen una debajo de otra.

### En escritorio

Las tarjetas aparecen en una fila y comparten el espacio.

---

# 8. Ejemplo real — Navbar responsive

Podemos utilizar Flexbox junto con media queries.

HTML:

```html
<nav class="navbar">
    <a href="#" class="logo">Mi Web</a>

    <ul class="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Cursos</a></li>
        <li><a href="#">Contacto</a></li>
    </ul>
</nav>
```

CSS:

```css
.navbar {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
}

.menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
}

@media (min-width: 768px) {
    .navbar {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .menu {
        flex-direction: row;
    }
}
```

### Móvil

```text
Logo
Inicio
Cursos
Contacto
```

### Escritorio

```text
Logo       Inicio   Cursos   Contacto
```

Este es uno de los usos más interesantes de combinar:

```text
Flexbox + Media Queries
```

---

# 9. Ocultar elementos

Podemos cambiar la visibilidad de un elemento dependiendo del tamaño.

Por ejemplo:

```css
.desktop-only {
    display: none;
}

@media (min-width: 768px) {
    .desktop-only {
        display: block;
    }
}
```

En este caso:

- En móvil → no se muestra.
- En pantallas grandes → se muestra.

También podemos hacer lo contrario:

```css
.mobile-only {
    display: block;
}

@media (min-width: 768px) {
    .mobile-only {
        display: none;
    }
}
```

---

# 10. No diseñar pensando en dispositivos concretos

No necesitamos crear una regla para cada modelo de móvil, tablet u ordenador.

La pregunta importante es:

> ¿En qué momento mi diseño deja de funcionar bien?

Ese es el momento en el que podemos introducir una media query.

Por ejemplo:

```css
@media (min-width: 768px) {
    ...
}
```

No significa necesariamente "para tablets".

Significa:

> Cuando el viewport tenga al menos 768 píxeles de ancho, aplica estos cambios.

---

# 11. Ejemplo completo — Página responsive

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página responsive</title>

    <style>
        .navbar {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 20px;
        }

        .menu {
            display: flex;
            flex-direction: column;
            gap: 10px;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .cards {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .card {
            padding: 20px;
            border: 1px solid #ccc;
        }

        @media (min-width: 768px) {
            .navbar {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

            .menu {
                flex-direction: row;
            }

            .cards {
                flex-direction: row;
            }

            .card {
                flex: 1;
            }
        }
    </style>
</head>

<body>

    <nav class="navbar">
        <a href="#">Mi Web</a>

        <ul class="menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>

    <main>
        <h1>Aprende desarrollo web</h1>

        <section class="cards">
            <article class="card">
                <h2>HTML</h2>
                <p>Estructura.</p>
            </article>

            <article class="card">
                <h2>CSS</h2>
                <p>Estilos.</p>
            </article>

            <article class="card">
                <h2>JavaScript</h2>
                <p>Interactividad.</p>
            </article>
        </section>
    </main>

</body>
</html>
```

---

# Resumen

## Mobile First

Primero:

```css
/* Móvil */
```

Después:

```css
@media (min-width: 768px) {
    /* Pantallas más grandes */
}
```

## Media query

Permite aplicar CSS cuando se cumple una condición.

```css
@media (min-width: 768px) {
    ...
}
```

## Combinación con Flexbox

Es especialmente útil:

```css
.cards {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .cards {
        flex-direction: row;
    }
}
```

La misma estructura HTML puede tener diferentes layouts dependiendo del tamaño de pantalla.

---

# Breakpoints CSS más utilizados

| Breakpoint | Tamaño | Uso habitual |
|---|---:|---|
| 📱 Móvil pequeño | `320px` | Móviles pequeños |
| 📱 Móvil | `480px` | Móviles |
| 📱 / 📲 | `576px` | Móviles grandes / tablets pequeñas |
| 📲 Tablet | `768px` | Tablets |
| 💻 Tablet grande | `992px` | Tablets grandes / portátiles pequeños |
| 💻 Desktop | `1200px` | Ordenadores |
| 🖥️ Desktop grande | `1400px` | Pantallas grandes |

## Los más utilizados

No necesitas usar todos. Una estrategia bastante práctica es:

```css
/* Móvil: estilos por defecto */

@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 992px) {
  /* Desktop pequeño */
}

@media (min-width: 1200px) {
  /* Desktop */
}
```
---


# Ejercicios

## Ejercicio 1 — Cards responsive

Crea tres tarjetas.

En móvil:

```text
Card 1
Card 2
Card 3
```

En escritorio:

```text
Card 1   Card 2   Card 3
```

Utiliza Flexbox y una media query.

---

## Ejercicio 2 — Navbar responsive

Crea un navbar.

En móvil, coloca los enlaces en columna.

En escritorio, colócalos en fila.

### Resultado esperado

**Móvil**

```text
Logo
Inicio
Cursos
Contacto
```

**Escritorio**

```text
Logo     Inicio   Cursos   Contacto
```

---

## Ejercicio 3 — Ocultar un elemento

Crea un elemento que solamente aparezca en pantallas grandes.

### Resultado esperado

- Móvil → oculto.
- Escritorio → visible.

Utiliza `display: none` y una media query.

---

## Ejercicio 4 — Mini página responsive

Crea una página con:

- Navbar.
- Título.
- Tres tarjetas.
- Footer.

En móvil:

- Navbar en columna.
- Tarjetas en columna.

En escritorio:

- Navbar en fila.
- Tarjetas en fila.

### Objetivo

Combinar:

```text
Flexbox
+
Media Queries
+
Mobile First
```

---

# Reto opcional

Haz que tu página tenga al menos **dos cambios responsive diferentes**.

Por ejemplo:

- Cambiar la dirección del navbar.
- Cambiar la dirección de las tarjetas.
- Ocultar un elemento.
- Cambiar el tamaño de un título.
- Cambiar los espacios entre elementos.

No copies un breakpoint porque sí.

Piensa:

> ¿En qué momento mi diseño necesita cambiar?