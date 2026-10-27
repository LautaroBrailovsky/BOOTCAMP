
## 1. `transform`

`transform` permite cambiar visualmente un elemento.

Podemos:

- moverlo;
- girarlo;
- hacerlo más grande o más pequeño.

### Mover — `translate`

```css
.card {
  transform: translateX(20px);
}
```

Mueve la tarjeta 20 píxeles hacia la derecha.

También podemos moverla en los dos ejes:

```css
.card {
  transform: translate(20px, 10px);
}
```

---

### Girar — `rotate`

```css
.card {
  transform: rotate(5deg);
}
```

Gira el elemento 5 grados.

---

### Cambiar tamaño — `scale`

```css
.card {
  transform: scale(1.1);
}
```

Hace que el elemento sea un 10 % más grande.

> No necesitamos memorizar todas las funciones de `transform`.
> Estas tres (`translate`, `rotate` y `scale`) son suficientes para empezar.

---

# 2. `transition`

Una transición hace que un cambio de CSS sea **suave en lugar de instantáneo**.

Es muy habitual utilizarla junto con `:hover`.

Por ejemplo, podemos hacer que una tarjeta se levante suavemente cuando pasamos el ratón por encima.

## Ejemplo: card

### HTML

```html
<div class="card">
  <img src="https://picsum.photos/300/180" alt="Imagen de ejemplo">

  <div class="card-content">
    <h2>Curso Full Stack</h2>
    <p>Aprende HTML, CSS y JavaScript creando proyectos.</p>
    <a href="#">Ver curso</a>
  </div>
</div>
```

### CSS

```css
.card {
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  transition: transform 0.3s ease;
}

.card img {
  width: 100%;
  display: block;
}

.card-content {
  padding: 20px;
}

.card:hover {
  transform: translateY(-8px);
}
```

### Resultado esperado

Cuando pasamos el ratón por encima de la tarjeta:

- la tarjeta sube ligeramente;
- el movimiento es suave;
- cuando quitamos el ratón, vuelve suavemente a su posición.

Este tipo de efecto es muy habitual en tarjetas de productos, cursos, artículos, portafolios, etc.

---

## `transition` en un botón

Otro ejemplo muy habitual:

### HTML

```html
<button class="button">Comprar</button>
```

### CSS

```css
.button {
  background-color: black;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;

  transition: 0.3s ease;
}

.button:hover {
  background-color: white;
  color: black;
}
```

### Resultado esperado

Al pasar el ratón por encima, el botón cambia de color suavemente.

---

## ¿Qué necesitamos saber de `transition`?

Podemos escribir:

```css
transition: transform 0.3s ease;
```

Aquí indicamos:

- `transform` → qué propiedad cambia.
- `0.3s` → cuánto tarda.
- `ease` → cómo cambia la velocidad durante el movimiento.

También podemos utilizar:

```css
transition: 0.3s;
```

para una transición sencilla.

> No necesitamos memorizar todas las propiedades relacionadas con `transition`.
> Lo importante es entender la idea y saber buscar cuando necesitemos algo más concreto.

---

# 3. `animation`

Una transición normalmente ocurre porque **algo cambia**, por ejemplo cuando hacemos `:hover`.

Una animación permite crear una **secuencia de cambios** que puede ejecutarse automáticamente.

Para definir una animación utilizamos `@keyframes`.

---

## Ejemplo: elemento que aparece

### HTML

```html
<div class="card">
  <h2>Hola</h2>
  <p>Esta tarjeta aparece con una animación.</p>
</div>
```

### CSS

```css
@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: aparecer 0.5s ease;
}
```

### Resultado esperado

Al cargar la página, la tarjeta:

1. empieza ligeramente más abajo;
2. aparece progresivamente;
3. termina en su posición normal.

Este tipo de animación se utiliza mucho para entradas de elementos en una página.

---

# 4. Animaciones con varios pasos

No estamos limitados a un principio y un final.

Podemos utilizar porcentajes:

```css
@keyframes cambiar {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
```

Esto hace que el elemento:

1. empiece con su tamaño normal;
2. crezca;
3. vuelva a su tamaño original.

---

# 5. Ejemplo real: un loader

Un ejemplo muy habitual de animación es un elemento que gira mientras esperamos algo.

### HTML

```html
<div class="loader"></div>
```

### CSS

```css
.loader {
  width: 40px;
  height: 40px;
  border: 5px solid lightgray;
  border-top-color: black;
  border-radius: 50%;

  animation: girar 1s linear infinite;
}

@keyframes girar {
  to {
    transform: rotate(360deg);
  }
}
```

### Resultado esperado

El círculo gira continuamente.

Este tipo de animación se utiliza habitualmente para indicar:

> "Estamos cargando algo."

---

# 6. `animation` en una línea

Podemos definir una animación de forma resumida:

```css
animation: nombre duración velocidad repetición;
```

Por ejemplo:

```css
animation: girar 1s linear infinite;
```

Significa:

- `girar` → nombre de la animación.
- `1s` → duración de cada vuelta.
- `linear` → velocidad constante.
- `infinite` → se repite continuamente.

---

# 7. Transition vs Animation

La diferencia importante es esta:

### `transition`

> **Algo cambia → hacemos que el cambio sea suave.**

Ejemplo:

```css
button:hover {
  transform: scale(1.05);
}
```

---

### `animation`

> **Definimos una secuencia de pasos que el navegador ejecuta.**

Ejemplo:

```css
@keyframes aparecer {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

---

# 8. ¿Y las animaciones entre páginas?

Si tenemos:

```html
<a href="contacto.html">Contacto</a>
```

y hacemos clic, el navegador carga otro documento HTML.

No estamos simplemente cambiando un componente dentro de la misma página.

Por eso, en este punto **no vamos a trabajar las transiciones entre páginas**.

Nos centraremos en las animaciones y transiciones de los elementos que tenemos dentro de una página.

---

# 9. Idea importante

No necesitamos memorizar todas las propiedades de `transition` y `animation`.

Lo importante es saber:

- qué queremos animar;
- si necesitamos una transición o una animación;
- qué propiedad queremos modificar;
- cómo buscar la sintaxis cuando necesitemos algo más avanzado.

## Resumen

```text
transform
    ↓
cambia visualmente un elemento

transition
    ↓
hace suave un cambio

animation
    ↓
crea una secuencia de cambios

@keyframes
    ↓
define los pasos de una animación
```

## Recursos

- CSS Transform: https://developer.mozilla.org/es/docs/Web/CSS/transform
- CSS Transitions: https://developer.mozilla.org/es/docs/Web/CSS/transition
- CSS Animations: https://developer.mozilla.org/es/docs/Web/CSS/CSS_animations