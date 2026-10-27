# CSS --- Chuleta rápida

## 1. Selectores y propiedades de texto

### Selectores básicos

``` css
/* Elemento */
p { }

/* Clase */
.card { }

/* ID */
#header { }

/* Descendiente */
.card p { }

/* Hijo directo */
.card > p { }

/* Varios selectores */
h1, h2, h3 { }

/* Pseudoclases */
a:hover { }
input:focus { }
li:first-child { }
```

### Texto

``` css
.texto {
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;

  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;

  letter-spacing: 1px;
  word-spacing: 4px;
}
```

### Fuentes

``` css
font-size: 16px;
font-weight: 400;     /* 100 → 900 */
font-style: italic;
font-family: Arial, sans-serif;
```

**Unidades habituales:** `px`, `%`, `em`, `rem`, `vw`, `vh`.

------------------------------------------------------------------------

# 2. Transform, transiciones y animaciones

## Transform

No cambia el flujo del documento.

``` css
.box {
  transform: translateX(20px);
  transform: translateY(10px);
  transform: scale(1.2);
  transform: rotate(10deg);
}
```

Se pueden combinar:

``` css
transform: translateX(20px) rotate(10deg) scale(1.1);
```

### Hover típico

``` css
.card:hover {
  transform: translateY(-5px);
}
```

## Transition

Hace que un cambio sea progresivo.

``` css
.button {
  transition: all 0.3s ease;
}

.button:hover {
  transform: scale(1.05);
  background: #222;
}
```

Más controlado:

``` css
transition:
  transform 0.3s ease,
  background-color 0.2s ease;
```

**Truco:** `transition` va normalmente en el estado original, no en
`:hover`.

## Animation

Para animaciones con `@keyframes`.

``` css
@keyframes aparecer {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.box {
  animation: aparecer 1s ease;
}
```

O con porcentajes:

``` css
@keyframes mover {
  0%   { transform: translateX(0); }
  50%  { transform: translateX(100px); }
  100% { transform: translateX(0); }
}
```

------------------------------------------------------------------------

# 3. Modelo de cajas y position

## Box model

Todo elemento es aproximadamente:

``` text
┌──────────────────────────────┐
│           margin             │
│  ┌────────────────────────┐  │
│  │        border          │  │
│  │  ┌──────────────────┐  │  │
│  │  │     padding      │  │  │
│  │  │  ┌────────────┐  │  │  │
│  │  │  │  content   │  │  │  │
│  │  │  └────────────┘  │  │  │
│  │  └──────────────────┘  │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

``` css
.box {
  width: 300px;
  height: 200px;

  padding: 20px;
  border: 1px solid #ccc;
  margin: 20px;
}
```

### Box sizing

Muy recomendable:

``` css
* {
  box-sizing: border-box;
}
```

Con `border-box`, `width` incluye `padding` + `border`.

## Border radius

``` css
border-radius: 10px;
border-radius: 50%; /* círculo si width = height */
```

Esquinas individuales:

``` css
border-radius: 10px 20px 30px 40px;
```

## Overflow

``` css
overflow: hidden;
overflow: auto;
overflow: scroll;
```

## Position

### static

``` css
position: static;
```

Valor por defecto.

### relative

Mantiene su sitio original y permite desplazarlo.

``` css
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
```

### absolute

Sale del flujo normal.

``` css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

**Patrón clave:** padre `relative` + hijo `absolute`.

### fixed

Fijado respecto a la ventana.

``` css
position: fixed;
bottom: 20px;
right: 20px;
```

### sticky

Se comporta normalmente hasta alcanzar un límite.

``` css
position: sticky;
top: 0;
```

### z-index

Controla qué elemento queda por encima.

``` css
z-index: 10;
```

------------------------------------------------------------------------

# 4. Display y Flexbox

## Display

``` css
display: block;
display: inline;
display: inline-block;
display: none;
display: flex;
display: grid;
```

### Block vs inline

``` text
block   → ocupa toda la línea
inline  → ocupa solo su contenido
```

Ejemplos típicos:

``` html
<div>Block</div>
<span>Inline</span>
```

------------------------------------------------------------------------

# Flexbox --- chuleta rápida

## Activar

``` css
.container {
  display: flex;
}
```

Por defecto los hijos se colocan en fila.

``` text
[ A ][ B ][ C ] →
```

## Dirección

``` css
flex-direction: row;            /* → */
flex-direction: column;         /* ↓ */
flex-direction: row-reverse;
flex-direction: column-reverse;
```

## Eje principal

`justify-content` distribuye los elementos por el eje principal.

``` css
justify-content: flex-start;
justify-content: center;
justify-content: flex-end;

justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

Visualmente:

``` text
space-between:

[A]              [B]              [C]
```

## Eje secundario

`align-items` alinea en el eje perpendicular.

``` css
align-items: flex-start;
align-items: center;
align-items: flex-end;
align-items: stretch;
```

### Centrar perfectamente

``` css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Separación

``` css
gap: 20px;
```

También:

``` css
row-gap: 10px;
column-gap: 20px;
```

## Wrap

Permite saltar de línea:

``` css
flex-wrap: wrap;
```

Muy útil para tarjetas:

``` css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

## Hijos de Flexbox

``` css
.item {
  flex: 1;
}
```

Hace que el elemento ocupe el espacio disponible.

``` css
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}
```

### Elemento individual

``` css
.item {
  align-self: center;
  order: 2;
}
```

## Patrón típico: logo + contenido + botón

``` html
<div class="header">
  <div>Logo</div>
  <div class="content">Contenido</div>
  <button>Entrar</button>
</div>
```

``` css
.header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.content {
  flex: 1;
}
```

Resultado:

``` text
[ Logo ]     [ contenido ocupa espacio ]     [ Entrar ]
```

### 🧠 Regla mental de Flexbox

``` text
justify-content → eje principal
align-items     → eje secundario
gap             → separación
flex            → cuánto espacio ocupa el hijo
```

Si cambias:

``` css
flex-direction: row;
```

por:

``` css
flex-direction: column;
```

los ejes cambian.

------------------------------------------------------------------------

# 5. Mobile first y Media Queries

## Mobile first

Primero diseñamos para móvil:

``` css
.container {
  display: flex;
  flex-direction: column;
  padding: 16px;
}
```

Después ampliamos para pantallas mayores.

## Media query

``` css
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

Conceptualmente:

``` text
Móvil
  ↓
CSS base

Tablet / Desktop
  ↓
@media (min-width: ...)
```

### Ejemplo completo

``` css
.cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 768px) {
  .cards {
    flex-direction: row;
  }
}
```

Resultado:

``` text
MÓVIL

[ Card ]
[ Card ]
[ Card ]


DESKTOP

[ Card ]  [ Card ]  [ Card ]
```

## Breakpoints

No hay que memorizar valores exactos. El breakpoint debe aparecer cuando
el diseño lo necesite.

Ejemplos habituales:

``` css
@media (min-width: 576px)  { }
@media (min-width: 768px)  { }
@media (min-width: 992px)  { }
@media (min-width: 1200px) { }
```

## Mobile first vs desktop first

### Mobile first

``` css
/* Base = móvil */
.box { }

/* Pantallas grandes */
@media (min-width: 768px) {
  .box { }
}
```

### Desktop first

``` css
/* Base = escritorio */
.box { }

/* Pantallas pequeñas */
@media (max-width: 767px) {
  .box { }
}
```

**Recomendación práctica:** empieza por mobile first.

------------------------------------------------------------------------

# ⚡ CSS en una mirada

  Necesito...              Uso
  ------------------------ -------------------------------------
  Cambiar texto            `color`, `font-size`, `font-weight`
  Separar contenido        `padding`
  Separar elementos        `margin` / `gap`
  Bordes redondeados       `border-radius`
  Mover visualmente        `transform`
  Animar un cambio         `transition`
  Animación compleja       `@keyframes` + `animation`
  Colocar encima           `position` + `z-index`
  Layout en fila/columna   `display: flex`
  Centrar con Flexbox      `justify-content` + `align-items`
  Espacio entre hijos      `gap`
  Adaptar a móvil          `@media`
  Ocultar                  `display: none`

## 🎯 Los patrones que conviene memorizar

### Centrar

``` css
display: flex;
justify-content: center;
align-items: center;
```

### Fila con separación

``` css
display: flex;
align-items: center;
gap: 20px;
```

### Logo + espacio + botón

``` css
display: flex;
align-items: center;
```

``` css
.content {
  flex: 1;
}
```

### Tarjetas responsive

``` css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

### Elemento absoluto dentro de un padre

``` css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

### Hover suave

``` css
.button {
  transition: transform 0.2s ease;
}

.button:hover {
  transform: scale(1.05);
}
```