# Accesibilidad web en HTML

La accesibilidad web consiste en crear páginas que puedan utilizar todas las personas, incluidas aquellas que utilizan lectores de pantalla, navegan con el teclado o tienen dificultades visuales o motoras.

## 1. Utilizar HTML semántico

Usa etiquetas que describan la función de cada parte de la página.

```html
<header>Cabecera</header>
<nav>Navegación principal</nav>
<main>Contenido principal</main>
<section>
  <h2>Sobre nosotros</h2>
  <p>Información de la empresa.</p>
</section>
<footer>Pie de página</footer>
```

**Importante:** utiliza la etiqueta HTML adecuada en lugar de usar siempre `<div>`.

## 2. Asociar etiquetas a los campos de formulario

Cada campo debe tener una etiqueta que explique qué información se solicita.

```html
<label for="email">Correo electrónico</label>
<input type="email" id="email" name="email">
```

El atributo `for` del `<label>` debe coincidir con el `id` del campo.

## 3. Añadir texto alternativo a las imágenes

El atributo `alt` permite que los lectores de pantalla describan las imágenes.

```html
<img src="perro.jpg" alt="Un perro jugando en el parque">
```

Si la imagen es puramente decorativa, utiliza un texto alternativo vacío:

```html
<img src="separador.png" alt="">
```

No es necesario describir las imágenes decorativas.

## 4. Utilizar encabezados jerárquicos

Los encabezados organizan el contenido y permiten navegar por las secciones.

```html
<h1>Mi página web</h1>
<h2>Experiencia laboral</h2>
<h3>Desarrollador web</h3>
```

- `<h1>`: título principal.
- `<h2>`: sección principal.
- `<h3>`: subsección.

No elijas un encabezado solo por su tamaño visual; utiliza CSS para cambiar su apariencia.

## 5. Crear enlaces descriptivos

El texto de un enlace debe explicar a dónde lleva.

```html
<a href="/contacto">Contactar con nosotros</a>
```

Evita textos poco descriptivos como «Haz clic aquí» cuando no permiten entender el destino.

## 6. Permitir la navegación con teclado

La página debe poder utilizarse sin ratón.

Los enlaces y botones nativos permiten navegar con el teclado y activarse mediante las teclas correspondientes.

```html
<a href="/perfil">Ver perfil</a>
<button type="button">Guardar cambios</button>
```

No elimines el indicador visual que muestra qué elemento tiene el foco.

```css
button:focus-visible,
a:focus-visible {
  outline: 3px solid blue;
  outline-offset: 2px;
}
```

## 7. Utilizar botones para acciones y enlaces para navegar

- `<a>`: navegar a otra página o ubicación.
- `<button>`: ejecutar una acción.

```html
<a href="/perfil">Ver perfil</a>
<button type="button">Eliminar elemento</button>
```

No utilices un `<div>` como botón si puedes utilizar directamente un `<button>`.

## 8. Indicar el idioma de la página

El atributo `lang` permite identificar el idioma del contenido.

```html
<html lang="es">
```

Si una parte del contenido está en otro idioma, puedes indicarlo también:

```html
<p>La expresión <span lang="en">Hello world</span> significa hola mundo.</p>
```

## 9. Garantizar suficiente contraste de colores

El texto debe distinguirse claramente del fondo.

Como referencia, WCAG AA establece estos contrastes mínimos:

- Texto normal: **4,5:1**.
- Texto grande: **3:1**.

No transmitas información únicamente mediante el color.

Por ejemplo, no indiques los errores de un formulario solamente con un borde rojo: añade también un mensaje de texto.

## 10. Agrupar campos relacionados

Utiliza `<fieldset>` y `<legend>` para agrupar campos que pertenecen a una misma categoría.

```html
<fieldset>
  <legend>Datos personales</legend>

  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre">
</fieldset>
```

Esto ayuda a comprender la relación entre los campos.

## 11. Ocultar contenido con `aria-hidden`

El atributo `aria-hidden="true"` oculta un elemento a las tecnologías de asistencia, como los lectores de pantalla.

```html
<button type="button">
  <span aria-hidden="true">⭐</span>
  Favorito
</button>
```

El icono es decorativo y el texto ya explica la función del botón.

**Precauciones:**

- No lo utilices para ocultar información que el usuario necesita.
- No lo pongas en un elemento que tenga el foco ni en un elemento interactivo, como un botón o un enlace.
- No oculta visualmente el elemento; solo modifica cómo se expone a las tecnologías de asistencia.

## 12. Utilizar `aria-label`

Permite proporcionar un nombre accesible cuando el elemento no tiene un texto visible que explique su función.

```html
<button type="button" aria-label="Cerrar menú">
  ✕
</button>
```

Es útil para botones que contienen únicamente iconos.

Si el botón ya tiene un texto descriptivo visible, normalmente no necesitas `aria-label`.

## 13. Utilizar `aria-expanded`

Indica si un elemento desplegable está abierto o cerrado.

```html
<button
  type="button"
  aria-expanded="false"
  aria-controls="menu">
  Menú
</button>

<nav id="menu" hidden>
  <a href="/inicio">Inicio</a>
  <a href="/contacto">Contacto</a>
</nav>
```

JavaScript debe actualizar `aria-expanded` cuando se abre o se cierra el menú. El estado inicial debe coincidir con el estado real del contenido.

- `aria-expanded="false"`: cerrado.
- `aria-expanded="true"`: abierto.

`aria-controls` identifica el elemento que controla el botón.

## 14. Utilizar `aria-current`

Permite indicar cuál es el elemento actual dentro de un conjunto de navegación.

```html
<nav aria-label="Navegación principal">
  <a href="/inicio" aria-current="page">Inicio</a>
  <a href="/contacto">Contacto</a>
</nav>
```

Es útil para identificar la página actual en menús de navegación.

## 15. Marcar los campos obligatorios

El atributo `required` indica que un campo debe completarse antes de enviar el formulario.

```html
<label for="email">Correo electrónico (obligatorio)</label>
<input type="email" id="email" name="email" required>
```

No basta con indicar que un campo es obligatorio mediante un asterisco sin explicar su significado.

La validación debe mostrar mensajes claros cuando haya errores.

## 16. Utilizar `aria-describedby`

Permite asociar un campo con instrucciones, información adicional o mensajes de error.

```html
<label for="password">Contraseña</label>

<input
  type="password"
  id="password"
  aria-describedby="ayuda">

<p id="ayuda">Debe tener al menos 8 caracteres.</p>
```

Cuando el usuario interactúa con el campo, el lector de pantalla puede comunicar la información asociada.

## 17. Utilizar `role="status"`

Permite identificar mensajes de estado que aparecen o cambian dinámicamente.

```html
<p role="status" id="mensaje"></p>
```

Por ejemplo, JavaScript puede actualizar el mensaje después de guardar un formulario:

```javascript
document.getElementById("mensaje").textContent =
  "Cambios guardados correctamente";
```

El mensaje puede anunciarse sin mover el foco del usuario.

## 18. Utilizar `aria-live`

Permite que los lectores de pantalla detecten cambios en una región de la página.

```html
<p aria-live="polite" id="resultado"></p>
```

Si JavaScript modifica su contenido, el lector de pantalla puede anunciar la actualización.

Valores habituales:

- `aria-live="polite"`: anuncia el cambio cuando sea oportuno.
- `aria-live="assertive"`: anuncia el cambio con prioridad, interrumpiendo potencialmente lo que se esté leyendo.

Utiliza `assertive` solo cuando el mensaje requiera atención inmediata. Para mensajes habituales, suele ser preferible `polite`.

## 19. Utilizar `role` solo cuando sea necesario

El atributo `role` permite especificar cómo se interpreta un elemento cuando la semántica nativa no es suficiente.

```html
<div role="status">Guardado correctamente</div>
```

Sin embargo, es preferible utilizar elementos HTML nativos cuando ya proporcionan la semántica y el comportamiento necesarios.

Por ejemplo:

```html
<button type="button">Guardar</button>
```

Es preferible a crear un botón artificial con un `<div>` y `role="button"`.

## 20. No sustituir HTML semántico por ARIA

ARIA complementa HTML, pero no reproduce automáticamente el comportamiento de los elementos nativos.

Preferible:

```html
<button type="button">Guardar</button>
```

Menos recomendable:

```html
<div role="button" tabindex="0">Guardar</div>
```

El segundo ejemplo necesita implementar manualmente comportamientos adicionales, como la activación mediante teclado.

---

## Resumen de atributos importantes

| Atributo | Función |
|---|---|
| `lang` | Identifica el idioma del contenido. |
| `alt` | Proporciona una descripción alternativa de una imagen. |
| `required` | Indica que un campo es obligatorio. |
| `aria-hidden` | Oculta contenido a las tecnologías de asistencia. |
| `aria-label` | Proporciona un nombre accesible. |
| `aria-expanded` | Indica si un elemento desplegable está abierto. |
| `aria-controls` | Identifica el elemento controlado por otro. |
| `aria-current` | Identifica el elemento actual de un conjunto. |
| `aria-describedby` | Asocia instrucciones o descripciones. |
| `aria-live` | Permite anunciar cambios dinámicos. |
| `role="status"` | Identifica una región de mensajes de estado. |
| `role` | Define el rol accesible de un elemento. |

## Reglas básicas

1. Utiliza HTML semántico siempre que sea posible.
2. Asocia etiquetas a los campos de formulario.
3. Añade textos alternativos a las imágenes informativas.
4. Permite navegar con el teclado.
5. Mantén un contraste suficiente entre texto y fondo.
6. Usa ARIA cuando aporte información que el HTML nativo no proporciona.
7. No ocultes información importante con `aria-hidden`.
8. Comprueba la accesibilidad en la práctica, no solo leyendo el código.

**Idea principal:** primero HTML semántico, después ARIA cuando sea necesario. El objetivo es que todas las personas puedan comprender el contenido y utilizar la página.