# 5. Formularios

## Objetivos

Vamos a practicar cómo leer y validar los datos de un formulario con JavaScript:

- Leer valores de `input`.
- Trabajar con `text`, `password`, `email` y `number`.
- Leer opciones de `select` y `radio`.
- Comprobar un `checkbox`.
- Detectar el envío de un formulario y mostrar un resultado.

> Las validaciones del navegador mejoran la experiencia, pero no sustituyen las validaciones del backend.

---

# 1. Leer el valor de un input

HTML:

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre">
<button id="boton">Mostrar nombre</button>
<p id="resultado"></p>
```

JavaScript:

```javascript
const nombre = document.getElementById("nombre");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    resultado.textContent = nombre.value;
});
```

`.value` permite leer lo que la persona ha escrito.

### Ejercicio 1 — Saludar

Crea un input para escribir un nombre. Al pulsar un botón, muestra `Hola, Ana`, usando el nombre que se haya introducido.

---

# 2. Diferentes tipos de input

```html
<input type="text" placeholder="Nombre">
<input type="password" placeholder="Contraseña">
<input type="email" placeholder="Correo electrónico">
<input type="number" placeholder="Edad">
```

- `text`: texto normal.
- `password`: oculta visualmente los caracteres.
- `email`: permite comprobar el formato básico de un correo.
- `number`: permite introducir un número.

### Ejercicio 2 — Datos básicos

Crea campos para nombre, correo y edad. Al pulsar un botón, muestra el nombre y la edad en un párrafo.

---

# 3. Validaciones HTML

HTML incorpora atributos para comprobar datos sin escribir JavaScript.

```html
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" required minlength="3" maxlength="30">

    <label for="correo">Correo:</label>
    <input type="email" id="correo" required>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" min="18" max="90" required>

    <button type="submit">Enviar</button>
</form>
```

Atributos importantes:

- `required`: campo obligatorio.
- `minlength` y `maxlength`: longitud mínima y máxima del texto.
- `min` y `max`: límites de un valor numérico.
- `disabled`: deshabilita el campo.
- `type`: define el tipo de dato esperado.

### Ejercicio 3 — Completar validaciones

1. Haz obligatorio el nombre.
2. Exige al menos 3 caracteres.
3. Haz obligatorio el correo.
4. Limita la edad entre 18 y 65 años.
5. Prueba a enviar datos incorrectos.

---

# 4. Trabajar con un select

Un `select` permite elegir una opción de una lista.

```html
<label for="profesion">¿A qué te dedicas?</label>

<select id="profesion">
    <option value="">Selecciona una opción</option>
    <option value="estudiante">Estudiante</option>
    <option value="desarrollo">Desarrollo web</option>
    <option value="diseno">Diseño</option>
    <option value="otro">Otra profesión</option>
</select>

<button id="mostrar-profesion">Mostrar selección</button>
<p id="resultado-profesion"></p>
```

```javascript
const profesion = document.getElementById("profesion");
const boton = document.getElementById("mostrar-profesion");
const resultado = document.getElementById("resultado-profesion");

boton.addEventListener("click", function () {
    resultado.textContent = profesion.value;
});
```

`profesion.value` devuelve el valor de la opción seleccionada.

### Ejercicio 4 — Selector de tema

Crea un `select` con JavaScript, HTML y CSS, y bases de datos. Al pulsar un botón, muestra el tema elegido.

**Ampliación:** muestra un mensaje diferente según la opción.

---

# 5. Trabajar con radio buttons

Los `radio` permiten elegir una opción de un grupo. Para agruparlos, comparten el mismo `name`.

```html
<p>¿Qué modalidad prefieres?</p>

<label><input type="radio" name="modalidad" value="presencial"> Presencial</label>
<label><input type="radio" name="modalidad" value="online"> Online</label>
<label><input type="radio" name="modalidad" value="hibrida"> Híbrida</label>

<button id="mostrar-modalidad">Mostrar modalidad</button>
<p id="resultado-modalidad"></p>
```

```javascript
const botonModalidad = document.getElementById("mostrar-modalidad");
const resultadoModalidad = document.getElementById("resultado-modalidad");

botonModalidad.addEventListener("click", function () {
    const seleccionada = document.querySelector(
        'input[name="modalidad"]:checked'
    );

    if (seleccionada) {
        resultadoModalidad.textContent = seleccionada.value;
    } else {
        resultadoModalidad.textContent = "Selecciona una modalidad";
    }
});
```

`:checked` permite encontrar el `radio` seleccionado.

### Ejercicio 5 — Método de contacto

Crea un grupo de `radio` para elegir entre correo, teléfono y WhatsApp. Al pulsar un botón, muestra la opción elegida. Si no hay ninguna, muestra un aviso.

---

# 6. Trabajar con un checkbox

Un `checkbox` permite marcar o desmarcar una opción. La propiedad `.checked` devuelve `true` si está marcado y `false` si no.

```html
<label>
    <input type="checkbox" id="acepto">
    Acepto las condiciones
</label>
```

```javascript
const acepto = document.getElementById("acepto");
console.log(acepto.checked);
```

### Ejercicio 6 — Aceptar condiciones

Al pulsar un botón, muestra `Condiciones aceptadas` si la casilla está marcada y `Debes aceptar las condiciones` si no lo está.

---

# 7. Ejemplo completo: formulario de contacto

## HTML

```html
<h1>Formulario de contacto</h1>

<form id="form-contacto">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" required minlength="2">

    <label for="correo">Correo electrónico:</label>
    <input type="email" id="correo" required>

    <label for="profesion">¿A qué te dedicas?</label>
    <select id="profesion" required>
        <option value="">Selecciona una opción</option>
        <option value="estudiante">Estudiante</option>
        <option value="desarrollo">Desarrollo web</option>
        <option value="diseno">Diseño</option>
        <option value="otro">Otra profesión</option>
    </select>

    <p>¿Cómo prefieres que te contactemos?</p>
    <label><input type="radio" name="contacto" value="correo" required> Correo electrónico</label>
    <label><input type="radio" name="contacto" value="telefono"> Teléfono</label>
    <label><input type="radio" name="contacto" value="whatsapp"> WhatsApp</label>

    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" required minlength="10"></textarea>

    <label>
        <input type="checkbox" id="acepto" required>
        Acepto que se utilicen mis datos para responder a este mensaje
    </label>

    <button type="submit">Enviar</button>
</form>

<div id="resultado"></div>
```

## JavaScript

```javascript
const formulario = document.getElementById("form-contacto");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const profesion = document.getElementById("profesion").value;
    const mensaje = document.getElementById("mensaje").value;

    const contacto = document.querySelector(
        'input[name="contacto"]:checked'
    );

    if (!contacto) {
        resultado.textContent = "Selecciona cómo prefieres que te contactemos.";
        return;
    }

    resultado.innerHTML = `
        <h2>Datos del formulario</h2>
        <p>Nombre: ${nombre}</p>
        <p>Correo: ${correo}</p>
        <p>Profesión: ${profesion}</p>
        <p>Contacto preferido: ${contacto.value}</p>
        <p>Mensaje: ${mensaje}</p>
    `;
});
```

## ¿Qué está pasando?

- `submit` detecta el envío del formulario.
- `event.preventDefault()` evita que la página se recargue.
- `.value` lee los campos y el `select`.
- `:checked` encuentra el `radio` seleccionado.
- Los atributos HTML comprueban los campos obligatorios y otros requisitos.

Este ejemplo muestra los datos en la página: **no los envía a un servidor**.

## Validar el correo y mostrar un mensaje propio

El navegador puede validar campos automáticamente con atributos como `required` y `type="email"`. Si un campo no cumple las reglas, normalmente bloquea el envío antes de que se ejecute el evento `submit`.

Si queremos controlar los mensajes y mostrarlos debajo de cada campo, podemos gestionar la validación con JavaScript. Para este ejemplo añadimos `novalidate` al formulario: así el navegador no muestra automáticamente sus mensajes, pero podemos consultar las reglas con `checkValidity()`.

### HTML

Añade `novalidate` al formulario y un párrafo debajo del correo:

```html
<form id="form-contacto" novalidate>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" required minlength="2">
    <p id="error-nombre"></p>

    <label for="correo">Correo electrónico:</label>
    <input type="email" id="correo" required>
    <p id="error-correo"></p>

    <!-- Mantén aquí el select, los radio, el mensaje y el checkbox -->
    <button type="submit">Enviar</button>
</form>
```

### JavaScript

```javascript
const formulario = document.getElementById("form-contacto");
const correo = document.getElementById("correo");
const errorCorreo = document.getElementById("error-correo");

function validarCorreo(valor) {
    // Ejemplo sencillo para practicar expresiones regulares.
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(valor);
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    errorCorreo.textContent = "";

    if (!correo.checkValidity()) {
        errorCorreo.textContent = "Introduce un correo válido.";
        return;
    }

    if (!validarCorreo(correo.value)) {
        errorCorreo.textContent = "Revisa el formato del correo.";
        return;
    }

    // Si llegamos aquí, el correo ha superado estas comprobaciones.
    // Continúa aquí con el resto de validaciones y muestra el resumen.
});
```

`checkValidity()` comprueba si el campo cumple las restricciones HTML, como `required` y `type="email"`. La función `validarCorreo()` muestra cómo encapsular una comprobación propia con una expresión regular sencilla. Esta expresión es didáctica: no cubre todos los formatos posibles de correo electrónico.

**Importante:** `event.preventDefault()` cancela la acción predeterminada del envío, por ejemplo, recargar o navegar a otra página. No evita que el evento se dispare ni sustituye las validaciones. En este ejemplo el manejador se ejecuta al enviar porque el formulario tiene `novalidate`; sin ese atributo, las restricciones HTML pueden bloquear el envío antes de que se dispare `submit`.

### Práctica guiada

Replica el ejemplo y comprueba estos casos:

1. Deja el correo vacío.
2. Escribe `hola`.
3. Escribe `hola@ejemplo.com`.

Después, integra esta validación en el formulario de contacto completo y muestra el resumen solo cuando los campos sean correctos.

---

# 8. Ejemplo corto: formulario de login

Este ejemplo sirve para practicar `text` y `password`. No implementa una autenticación real.

## HTML

```html
<h1>Iniciar sesión</h1>

<form id="form-login">
    <label for="usuario">Usuario:</label>
    <input type="text" id="usuario" required>

    <label for="contrasena">Contraseña:</label>
    <input type="password" id="contrasena" required minlength="4">

    <button type="submit">Entrar</button>
</form>

<p id="mensaje-login"></p>
```

## JavaScript

```javascript
const formularioLogin = document.getElementById("form-login");
const mensajeLogin = document.getElementById("mensaje-login");

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    mensajeLogin.textContent = `Formulario recibido para ${usuario}`;
});
```

La contraseña no se muestra ni se guarda. Una autenticación real debe comprobar las credenciales en el backend.

### Ejercicio 7 — Mejorar el login

1. Cambia el mensaje que aparece al enviar el formulario.
2. Añade un campo de correo.
3. Haz que todos los campos sean obligatorios.
4. Prueba qué ocurre cuando falta algún dato.

---

# 9. Ejercicio final — Formulario de inscripción

Crea un formulario para inscribirse en una actividad. Debe incluir:

- Nombre.
- Correo electrónico.
- Edad.
- Un `select` para elegir una actividad.
- Un grupo de `radio` para elegir modalidad: presencial u online.
- Un `checkbox` para aceptar las condiciones.
- Un botón para enviar.

Al enviar:

1. Evita que la página se recargue.
2. Lee los valores.
3. Muestra un resumen de la inscripción.
4. Permite que el navegador indique los errores de validación.

**Reto opcional:** añade un botón para limpiar el formulario.

---

# Resumen

| Elemento o propiedad | Para qué sirve |
|---|---|
| `.value` | Leer el valor de un campo o del `select` |
| `.checked` | Saber si un `checkbox` está marcado |
| `:checked` | Encontrar el `radio` seleccionado |
| `required` | Hacer obligatorio un campo |
| `min` / `max` | Limitar un valor numérico |
| `minlength` / `maxlength` | Limitar la longitud del texto |
| `type="email"` | Comprobar el formato básico de un correo |
| `submit` | Detectar el envío de un formulario |
| `event.preventDefault()` | Evitar la acción predeterminada del envío |
| `checkValidity()` | Comprobar si un campo cumple sus restricciones HTML |
| `novalidate` | Evitar los mensajes automáticos del navegador al enviar el formulario |

## Recursos

- [MDN — Validación de formularios](https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation)
- [MDN — Elemento form](https://developer.mozilla.org/es/docs/Web/HTML/Element/form)
- [MDN — Elemento select](https://developer.mozilla.org/es/docs/Web/HTML/Element/select)