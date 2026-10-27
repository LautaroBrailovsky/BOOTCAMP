# Trabajo con IA como herramienta de aprendizaje

## 1. Objetivos

- Entender para qué sirve la IA al aprender programación.
- Aprender a escribir prompts claros y con contexto.
- Pedir explicaciones, pistas, ejemplos y revisiones.
- Comprobar y modificar el código recibido.
- Reconocer los riesgos de utilizar IA sin criterio.

## 2. La IA es un asistente, no un sustituto

ChatGPT, Codex y Claude Code pueden ayudar a:

- Explicar conceptos.
- Resolver dudas.
- Proponer ejemplos y ejercicios.
- Revisar código.
- Detectar posibles errores.
- Interpretar mensajes de error.
- Ayudar a consultar documentación.

Pero la IA no sustituye nuestra comprensión.

> Si copias una solución que no entiendes, no has aprendido a programar: has copiado una solución.

Un programador debe poder leer, probar, modificar, depurar y explicar el código que utiliza.

## 3. Copiar ejercicios es hacerse trampas a uno mismo

Pedir a la IA que resuelva un ejercicio completo y entregarlo como propio puede hacer que el ejercicio parezca terminado, pero:

- No entrenamos la resolución de problemas.
- No detectamos nuestras lagunas.
- No aprendemos a interpretar errores.
- No sabemos validar la solución.
- Dependemos cada vez más de la herramienta.
- No podremos explicar nuestro trabajo en una entrevista o en un proyecto real.

Si no sabes qué ocurre detrás del código, tampoco puedes comprobar si la IA se ha equivocado.

### Regla

> Utiliza la IA para avanzar en tu aprendizaje, no para evitar el aprendizaje.

La IA puede escribir código, pero tú debes poder responder:

- ¿Qué hace este código?
- ¿Por qué se ha utilizado esta solución?
- ¿Qué pasaría si cambio esta parte?
- ¿Cómo sé que funciona?
- ¿Cómo lo corregiría si falla?

## 4. Riesgos y limitaciones

### Puede equivocarse

Puede producir errores de sintaxis, lógica o funcionamiento.

### Puede inventar información

Puede inventar funciones, propiedades, librerías, enlaces o métodos que no existen.

### Puede dar soluciones demasiado avanzadas

Si no indicamos nuestro nivel, puede utilizar conceptos, librerías o patrones que todavía no conocemos.

### Puede interpretar mal nuestra petición

Una pregunta ambigua produce respuestas ambiguas.

Por ejemplo:

```text
Hazme una web bonita.
```

No indica el nivel, el objetivo, las tecnologías, los contenidos ni las restricciones.

### Puede responder de forma diferente

Las respuestas no son necesariamente deterministas. Ante preguntas parecidas puede elegir soluciones distintas.

### Puede generar código que parece correcto, pero no lo es

Puede no cumplir el enunciado, ser innecesariamente complejo, inseguro o no funcionar en nuestro entorno.

### Cómo actuar

- Leer la respuesta críticamente.
- Probar el código.
- Compararlo con la documentación oficial.
- Pedir una explicación.
- Comprobar casos diferentes.
- No aceptar código que no entendemos.

## 5. Qué es un prompt

Un **prompt** es la pregunta o instrucción que escribimos para pedir algo a una IA.

### Petición poco concreta

```text
Explícame HTML.
```

### Petición con contexto

```text
Estoy empezando un bootcamp de desarrollo Full Stack.
Ahora estoy aprendiendo HTML y todavía no conozco CSS ni JavaScript.

Explícame qué es HTML, para qué sirve y cuál es la estructura
básica de un documento HTML.

Utiliza palabras sencillas y un ejemplo pequeño.
No introduzcas conceptos avanzados.
```

## 6. Cómo construir un buen prompt

Un prompt puede incluir:

| Elemento | Qué indicar |
|---|---|
| Contexto | Qué estamos estudiando |
| Nivel | Qué conocimientos tenemos |
| Objetivo | Qué queremos conseguir |
| Material | Código o información de partida |
| Restricciones | Qué no queremos utilizar |
| Tipo de ayuda | Explicación, pista, revisión, etc. |
| Formato | Pasos, tabla, ejemplo, preguntas, etc. |

### Plantilla

```text
Estoy aprendiendo [tema].

Mi nivel es [nivel].

Quiero conseguir [objetivo].

Estoy trabajando con [código o contexto].

Ayúdame de esta forma: [explicación, pistas, revisión...].

No utilices todavía [conceptos o tecnologías].
```

## 7. Tipos de preguntas útiles

### Explicación

```text
Estoy empezando a aprender HTML.
Explícame qué es una etiqueta HTML con palabras sencillas
y un ejemplo mínimo.
```

### Comparación

```text
Explícame la diferencia entre HTML y CSS con un ejemplo sencillo.
No introduzcas JavaScript.
```

### Explicación de código

```text
Explícame este código HTML línea por línea.
Estoy empezando y todavía no conozco conceptos avanzados.
```

### Pistas

```text
Quiero resolver este ejercicio yo mismo.
No me des el código completo.
Hazme preguntas y dame una pista cada vez.
```

### Revisión

```text
Revisa mi código.
Primero dime qué está bien, después qué problemas detectas
y finalmente dame pistas para corregirlos.
No lo reescribas entero.
```

### Ejercicio

```text
Estoy aprendiendo HTML básico.
Propón un ejercicio corto para practicar títulos, párrafos y listas.
No incluyas la solución hasta que te la pida.
```

### Preguntas de comprobación

```text
Hazme cinco preguntas para comprobar si he entendido este concepto.
No me des las respuestas todavía.
```

### Documentación

```text
¿Qué términos debería buscar en la documentación oficial de MDN
para resolver este problema? No me des directamente la solución.
```

## 8. Demostración del profesor: aprender HTML con IA

### Paso 1: explicación

```text
Estoy empezando un bootcamp de desarrollo Full Stack.
Ahora estoy aprendiendo HTML y todavía no conozco CSS ni JavaScript.

Explícame qué es HTML, para qué sirve y qué estructura básica
tiene un documento HTML.

Utiliza palabras sencillas y un ejemplo pequeño.
No introduzcas conceptos avanzados.
```

### Paso 2: explicación alternativa

```text
No he entendido del todo la diferencia entre la estructura de HTML
y el contenido de una página.

Explícamelo con una comparación sencilla y después con un ejemplo.
```

### Paso 3: comprobación

```text
Hazme tres preguntas cortas para comprobar si he entendido
la estructura básica de un documento HTML.
No me des las respuestas todavía.
```

### Paso 4: guía sin solución

```text
Quiero crear una página HTML con un título principal,
un párrafo y una lista de tres elementos.

Estoy empezando y quiero escribir el código yo mismo.
Guíame paso a paso, haciendo una pregunta cada vez.
No me des el código completo.
```

Si la IA entrega demasiado código:

```text
Te he pedido que me guíes, no que resuelvas el ejercicio.
Dame solo una pista o una pregunta cada vez.
```

## 9. Demostración: detectar un error

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi página</title>
  </head>
  <body>
    <h1>Mi primera página</h2>
    <p>Estoy aprendiendo HTML.</p>
  </body>
</html>
```

### Prompt para pedir una pista

```text
Estoy empezando a aprender HTML.

Este código tiene un error, pero quiero aprender a detectarlo.
No me lo corrijas directamente.

Dame una pista sobre la zona que debería revisar.
```

### Repregunta

```text
¿El problema tiene que ver con que las etiquetas de apertura
y cierre deben corresponderse?
Explícamelo sin darme todavía el código corregido.
```

### Comprobación

```text
Creo que ya he corregido el error.
Explícame cómo puedo comprobar en el navegador o en el editor
si el HTML está correctamente estructurado.
```

## 10. Demostración: HTML y CSS

HTML inicial:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi página</title>
  </head>
  <body>
    <h1>Mi primera página</h1>
    <p>Estoy aprendiendo desarrollo web.</p>
  </body>
</html>
```

### Pregunta inicial

```text
Estoy aprendiendo HTML y voy a empezar con CSS.

Quiero cambiar únicamente el color del título y el tamaño
del texto del párrafo.

Todavía no conozco selectores complejos.

Explícame qué conceptos necesito entender, pero no me des
el código completo todavía.
```

### Pregunta de seguimiento

```text
¿Qué selector tendría que utilizar para modificar el título?
¿Y qué propiedad CSS sirve para cambiar su color?
Explícamelo brevemente.
```

### Revisión del código propio

```text
He intentado resolverlo con este código.

Revísalo como si fueras mi profesor:
1. Dime qué está bien.
2. Señala los posibles problemas.
3. Dame una pista para corregirlos.
4. No reescribas todo el ejercicio.
```

### Modificación

```text
Ahora quiero centrar el título.
No me des directamente la solución.
Dime qué propiedad CSS debería investigar y qué efecto tiene.
```

## 11. ChatGPT, Codex y Claude Code

### ChatGPT

Se utilizará principalmente para:

- Explicar conceptos.
- Resolver dudas.
- Proponer ejemplos.
- Revisar código.
- Crear ejercicios.
- Dar pistas y preguntas.

### Codex

Herramienta orientada al trabajo con código y proyectos. Puede ayudar a leer archivos, explicar código, proponer cambios y revisar tareas.

### Claude Code

Herramienta orientada a trabajar con código desde el entorno de desarrollo o la terminal. Más adelante veremos cómo puede trabajar con archivos y proyectos.

En todos los casos:

> No aceptes cambios que no puedas leer, probar y explicar.

## 12. Ejercicios prácticos

### Ejercicio 1 — Mejorar un prompt

Transforma:

```text
Hazme una web de videojuegos.
```

Incluye nivel, objetivo, tecnologías, elementos y restricciones.

### Ejercicio 2 — Pedir una explicación adaptada

Pide a la IA que explique qué es una etiqueta HTML y después solicita:

1. Una explicación más sencilla.
2. Un ejemplo mínimo.
3. Una comparación.
4. Tres preguntas de comprobación.
5. Un error típico.

### Ejercicio 3 — Construir HTML con pistas

Crea una página con:

- Un título.
- Dos párrafos.
- Una lista de tres elementos.
- Un enlace.

No pidas el código completo. Escribe y prueba tú el código.

### Ejercicio 4 — Detectar errores

Utiliza:

```html
<h1>Mi página<h1>
<p>Este es mi primer párrafo.</p>
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2
  <li>Elemento 3</li>
</ul>
```

Pide pistas, corrige el código y comprueba el resultado.

### Ejercicio 5 — Explicar código propio

Escribe una página pequeña y pide:

```text
Explícame mi código línea por línea.
Después hazme tres preguntas para comprobar si entiendo
lo que he escrito.
```

### Ejercicio 6 — Revisar sin reescribir

Entrega código propio y pide una revisión con:

- Qué está bien.
- Qué podría mejorar.
- Qué errores hay.
- Qué investigar.
- Pistas antes que soluciones.

### Ejercicio 7 — Aprender CSS por descubrimiento

Pide qué propiedades investigar para:

- Cambiar el color de un título.
- Cambiar el tamaño de un párrafo.
- Centrar un título.

Después escribe el CSS personalmente.

### Ejercicio 8 — Comparar soluciones

Pide dos formas sencillas de cambiar el color de un título y analiza sus diferencias, ventajas e inconvenientes.

### Ejercicio 9 — Pedir un ejercicio sin solución

```text
Estoy aprendiendo HTML básico.
Propón un ejercicio de 15 minutos para practicar títulos,
párrafos, listas y enlaces.

No incluyas la solución.
Indica solo el enunciado y una lista de comprobación.
```

### Ejercicio 10 — Convertir una solución en aprendizaje

Pide a la IA que divida un ejemplo en partes y que proponga modificaciones para demostrar que lo has entendido.

### Ejercicio 11 — Investigar documentación

Pregunta qué términos buscar en MDN para cambiar el tamaño de un texto con CSS. Busca, lee, prueba y explica el resultado.

### Ejercicio 12 — Comprobar una respuesta dudosa

Investiga si existe una propiedad CSS llamada `text-color` y comprueba la respuesta en la documentación oficial.

### Ejercicio 13 — Corregir un mal contexto

Compara:

```text
Hazme un formulario.
```

con:

```text
Estoy empezando HTML y todavía no conozco JavaScript.

Quiero practicar un formulario HTML sencillo con nombre,
correo electrónico y un botón de envío.

No necesito que envíe datos realmente.
Quiero aprender qué etiquetas y atributos se utilizan.
No introduzcas CSS ni JavaScript.
```

### Ejercicio 14 — Tutor interactivo

```text
Actúa como un tutor de HTML para una persona principiante.

Quiero practicar títulos, párrafos y listas.
No me des soluciones completas.
Hazme una pregunta cada vez.
Si me equivoco, dame una pista.
```

### Ejercicio 15 — Revisar una respuesta de IA

Analiza una respuesta generada por IA:

- ¿Qué etiquetas utiliza?
- ¿Qué propiedades aparecen?
- ¿Qué partes entiendes?
- ¿Qué partes no entiendes?
- ¿Cómo comprobarías que es correcta?
- ¿Qué modificarías?

### Ejercicio 16 — Explicar antes de copiar

Antes de utilizar una solución, completa:

```text
Creo que este código sirve para:
...

Las partes que entiendo son:
...

Las partes que no entiendo son:
...

Voy a comprobarlo haciendo:
...

Una modificación que puedo probar es:
...
```

### Ejercicio 17 — Reto opcional

Crea una pequeña página personal con título, presentación, lista de intereses, enlace y un estilo CSS sencillo.

La IA puede explicar, dar pistas y revisar, pero debes poder explicar cada etiqueta y propiedad y realizar al menos tres modificaciones por tu cuenta.

## 13. Flujo de trabajo recomendado

```text
Entender el problema
        ↓
Pensar una primera solución
        ↓
Preguntar a la IA
        ↓
Leer y comprender
        ↓
Probar el código
        ↓
Modificarlo
        ↓
Comprobar el resultado
        ↓
Explicar lo que has hecho
```

## 14. Preguntas de comprobación

- ¿Qué es un prompt?
- ¿Qué información conviene incluir en una pregunta?
- ¿Por qué es útil indicar nuestro nivel?
- ¿Qué diferencia hay entre pedir una solución y pedir una pista?
- ¿Por qué no debemos copiar código que no entendemos?
- ¿Qué hacemos si la IA se equivoca?
- ¿Cómo comprobamos una respuesta?
- ¿Por qué puede ser peligroso aceptar una solución demasiado compleja?
- ¿Qué diferencia hay entre utilizar IA para aprender y utilizarla para evitar aprender?
- ¿Qué significa validar una solución?

## 15. Checklist final

- [ ] Sé qué es un prompt.
- [ ] Sé indicar contexto, nivel y objetivo.
- [ ] Sé pedir explicaciones sencillas.
- [ ] Sé pedir pistas en lugar de soluciones.
- [ ] Sé pedir una revisión de mi código.
- [ ] Sé pedir preguntas de comprobación.
- [ ] Sé que la IA puede equivocarse o inventar información.
- [ ] Sé que debo probar el código.
- [ ] No copio soluciones que no puedo explicar.
- [ ] Puedo modificar el código que utilizo.
- [ ] Utilizo la IA como asistente, no como sustituto del aprendizaje.