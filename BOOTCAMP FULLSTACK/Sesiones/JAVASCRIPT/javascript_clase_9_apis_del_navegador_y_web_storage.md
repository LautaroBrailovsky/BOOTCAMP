# JavaScript avanzado — APIs del navegador y almacenamiento web

**Duración orientativa:** 1 h 30 min  
**Prioridad:** alta para las APIs del navegador; baja para gráficas

## Objetivos

- Entender qué es una API del navegador.
- Guardar información en `localStorage` y `sessionStorage`.
- Solicitar la ubicación del usuario con Geolocation.
- Conocer las condiciones para mostrar notificaciones.
- Reconocer otras APIs habituales del navegador.
- Saber que existen librerías para mostrar gráficas sin tener que dibujarlas desde cero.

## 1. ¿Qué es una API del navegador?

Una API es una interfaz que nos permite utilizar una funcionalidad sin tener que implementarla desde cero.

El navegador ofrece APIs de JavaScript para interactuar con el dispositivo y con la página. Por ejemplo:

- Guardar datos en el navegador.
- Obtener la ubicación, si el usuario da permiso.
- Mostrar notificaciones.
- Acceder al portapapeles, en condiciones compatibles.
- Consultar información de la página o del historial.
- Realizar peticiones HTTP con `fetch()`.

Muchas se utilizan desde objetos como `window`, `document` o `navigator`.

> **Importante:** que una API exista no significa que funcione en cualquier situación. Algunas necesitan permiso del usuario, HTTPS o un navegador compatible.

## 2. Web Storage: guardar datos en el navegador

Web Storage permite guardar información en el navegador mediante pares **clave–valor**. Los valores se almacenan como cadenas de texto.

Hay dos opciones principales:

| API | ¿Cuánto dura? |
|---|---|
| `localStorage` | Se conserva al cerrar y volver a abrir el navegador, hasta que se borre. |
| `sessionStorage` | Se mantiene durante la sesión de esa pestaña y normalmente desaparece al cerrarla. |

El almacenamiento pertenece al origen de la web (protocolo, dominio y puerto). No es una base de datos compartida entre todos los sitios.

### Guardar, leer y borrar

```js
// Guardar
localStorage.setItem("nombre", "Ada");

// Leer
const nombre = localStorage.getItem("nombre");
console.log(nombre);

// Borrar una clave
localStorage.removeItem("nombre");

// Borrar todo el almacenamiento de este origen
localStorage.clear();
```

`sessionStorage` tiene métodos equivalentes:

```js
sessionStorage.setItem("tema", "oscuro");
console.log(sessionStorage.getItem("tema"));
```

### ¿Y si queremos guardar un objeto o un array?

Web Storage almacena cadenas, así que usamos `JSON.stringify()` para convertir los datos en texto y `JSON.parse()` para recuperarlos.

```js
const usuario = {
  nombre: "Ada",
  curso: "Full Stack"
};

// Convertir el objeto a texto y guardarlo
localStorage.setItem("usuario", JSON.stringify(usuario));

// Leer el texto y convertirlo otra vez en objeto
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioGuardado.nombre);
```

Para guardar un array, se hace lo mismo:

```js
const tareas = ["Estudiar", "Practicar", "Descansar"];

localStorage.setItem("tareas", JSON.stringify(tareas));

const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
console.log(tareasGuardadas);
```

Si la clave todavía no existe, `getItem()` devuelve `null`. Para un array guardado, podemos utilizar un valor inicial:

```js
const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
```

### Mini práctica: recordar el nombre

Crea un HTML con un campo de texto, un botón y un párrafo. Al pulsar el botón, guarda el nombre en `localStorage`; cuando la página se abra, recupera el nombre y saluda al usuario.

**Pregunta:** ¿qué ocurriría si utilizaras `sessionStorage` en vez de `localStorage`?

### Límites importantes

- El almacenamiento es limitado y depende del navegador.
- El usuario puede borrarlo.
- No es una base de datos segura ni debe usarse para guardar contraseñas, secretos o información sensible.
- Los datos se guardan en el dispositivo del usuario, no en nuestro servidor.

## 3. Cookies: ¿son lo mismo?

No exactamente. Las cookies también permiten almacenar pequeños datos, pero tienen características diferentes.

- `localStorage` y `sessionStorage` se utilizan desde JavaScript y no se envían automáticamente con cada petición HTTP.
- Las cookies pueden enviarse al servidor con las peticiones que correspondan, por eso se usan a menudo en sesiones y autenticación.
- Las cookies tienen opciones de caducidad y seguridad, como `HttpOnly`, `Secure` y `SameSite`.

No guardes contraseñas en `localStorage` ni en cookies accesibles desde JavaScript. La gestión de sesiones y autenticación requiere medidas de seguridad específicas.

## 4. Geolocation: obtener la ubicación

La API de geolocalización permite solicitar la posición del usuario. El navegador pide permiso y el usuario puede rechazarlo.

Ejemplo mínimo:

```html
<button id="ubicacion">¿Dónde estoy?</button>
<p id="resultado">Todavía no hemos consultado la ubicación.</p>

<script>
  const boton = document.querySelector("#ubicacion");
  const resultado = document.querySelector("#resultado");

  boton.addEventListener("click", () => {
    if (!("geolocation" in navigator)) {
      resultado.textContent = "Este navegador no ofrece geolocalización.";
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;

        resultado.textContent =
          `Latitud: ${latitud.toFixed(4)}, longitud: ${longitud.toFixed(4)}`;
      },
      (error) => {
        resultado.textContent =
          "No se pudo obtener la ubicación. Comprueba el permiso del navegador.";
        console.error(error);
      }
    );
  });
</script>
```

La ubicación suele requerir un contexto seguro (HTTPS; `localhost` se considera seguro para desarrollo). También necesita permiso del usuario.

- `getCurrentPosition()` solicita una posición.
- `watchPosition()` permite recibir actualizaciones cuando cambia la posición.
- `clearWatch()` detiene el seguimiento iniciado con `watchPosition()`.

No pidas ni sigas la ubicación sin una razón clara y sin informar al usuario.

## 5. Mapas con Leaflet (opcional)

La API Geolocation obtiene coordenadas, pero no dibuja un mapa. Para mostrar mapas interactivos podemos usar una librería como **Leaflet**.

Con Leaflet se pueden añadir mapas, marcadores, círculos, polígonos y ventanas emergentes. El material original también combina Leaflet con una API pública de terremotos para colocar marcadores en un mapa.

Recursos:

- [Leaflet — documentación oficial](https://leafletjs.com/)
- [Feed público de terremotos de USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson)

**Para esta sesión:** basta con entender la diferencia entre obtener coordenadas y representarlas en un mapa. Configurar capas, proveedores de mapas y claves de API puede dejarse para otra práctica.

## 6. Notificaciones del navegador

La API `Notification` puede mostrar notificaciones del sistema, pero el usuario debe conceder permiso. Es mejor solicitarlo como consecuencia de pulsar un botón.

```html
<button id="notificar">Probar notificación</button>

<script>
  document.querySelector("#notificar").addEventListener("click", async () => {
    if (!("Notification" in window)) {
      alert("Este navegador no admite notificaciones.");
      return;
    }

    const permiso = await Notification.requestPermission();

    if (permiso === "granted") {
      new Notification("¡Hola!", {
        body: "Esta es una notificación de prueba."
      });
    } else {
      alert("No se ha concedido permiso para las notificaciones.");
    }
  });
</script>
```

Ten en cuenta:

- El navegador puede no admitir esta API.
- Normalmente requiere HTTPS o `localhost`.
- El usuario puede rechazar el permiso.
- No se debe bombardear al usuario con notificaciones.
- Para notificaciones fiables cuando la web está cerrada suelen hacer falta tecnologías adicionales, como service workers y Push API. Eso queda fuera de esta introducción.

## 7. Otras APIs del navegador que conviene conocer

No vamos a practicarlas todas hoy. La idea es saber que existen y buscar su documentación cuando un proyecto las necesite.

| API | ¿Para qué sirve? |
|---|---|
| DOM (`document`) | Leer y modificar el HTML, crear elementos y gestionar eventos. |
| Fetch (`fetch`) | Hacer peticiones HTTP para consumir APIs. |
| Web Storage | Guardar pequeños datos en el navegador. |
| Geolocation | Solicitar la ubicación del usuario. |
| Notifications | Mostrar notificaciones con permiso. |
| Clipboard | Leer o escribir en el portapapeles, con restricciones de seguridad y permisos. |
| History | Consultar o modificar el historial de navegación de la página. |
| URL / URLSearchParams | Crear, leer y modificar URLs y sus parámetros. |
| Canvas | Dibujar gráficos, formas o imágenes dentro de un `<canvas>`. |
| Drag and Drop | Implementar interacciones de arrastrar y soltar. |
| Web Workers | Ejecutar ciertos cálculos en otro hilo para no bloquear la interfaz. |
| MediaDevices | Acceder a cámara o micrófono, normalmente con permiso. |
| WebSockets | Mantener una comunicación bidireccional con un servidor. |

No todas estas APIs forman parte de una única especificación llamada “HTML5”. Es una forma habitual, aunque imprecisa, de referirse a capacidades modernas de la plataforma web.

## 8. Librerías de gráficas: solo una introducción

Si necesitamos representar datos con barras, líneas o sectores, podemos utilizar una librería en vez de dibujar todo manualmente.

- **[Chart.js](https://www.chartjs.org/):** opción accesible para gráficas comunes.
- **[Apache ECharts](https://echarts.apache.org/):** muchas opciones y tipos de visualización.
- **[D3.js](https://d3js.org/):** muy flexible y potente, pero requiere más trabajo.
- **[Plotly.js](https://plotly.com/javascript/):** gráficas interactivas.
- **[Leaflet](https://leafletjs.com/):** mapas interactivos; no es una librería general de gráficas.

El material original utiliza **Chartist** para representar precios de productos y propone un ejercicio con datos de Star Wars. Chartist aparece en el material de origen, pero antes de elegir una librería para un proyecto nuevo conviene comprobar si sigue mantenida.

### Idea del ejemplo original

1. Obtener datos con `fetch()`, por ejemplo, productos de una API.
2. Preparar etiquetas y valores numéricos.
3. Pasar esos datos a la librería de gráficas.

Así conectamos tres conceptos que ya conocemos: APIs, tratamiento de arrays y representación de datos.

## 9. Mini práctica final

Escoge una de estas tareas:

1. **Guardar una preferencia:** permite seleccionar un tema claro u oscuro y recordar la elección con `localStorage`.
2. **Mostrar la ubicación:** utiliza el ejemplo de Geolocation y muestra latitud y longitud.
3. **Notificación:** crea un botón que solicite permiso y muestre una notificación de prueba.

Si terminas rápido, combina dos funcionalidades: por ejemplo, guardar el nombre en `localStorage` y mostrarlo en una notificación.

## Resumen

- Las APIs del navegador nos permiten utilizar funcionalidades ya disponibles.
- `localStorage` persiste entre visitas; `sessionStorage` está asociado a la sesión de la pestaña.
- Web Storage almacena cadenas: para objetos y arrays utilizamos `JSON.stringify()` y `JSON.parse()`.
- Geolocation y Notifications necesitan permisos y pueden requerir un contexto seguro.
- Leaflet sirve para mostrar mapas; una API de datos puede proporcionar la información que dibujamos.
- Chart.js y otras librerías ayudan a crear gráficas sin implementarlas desde cero.

## Documentación oficial

- [MDN — Web Storage API](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API)
- [MDN — Geolocation API](https://developer.mozilla.org/es/docs/Web/API/Geolocation_API)
- [MDN — Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
- [MDN — Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [MDN — Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [Chart.js — documentación](https://www.chartjs.org/docs/latest/)