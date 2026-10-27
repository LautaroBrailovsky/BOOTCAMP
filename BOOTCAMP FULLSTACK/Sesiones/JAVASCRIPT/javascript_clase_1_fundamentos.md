
# JavaScript — Clase 1
## Fundamentos, variables, operadores, condicionales y bucles

> **Objetivo de la clase:** empezar a programar con JavaScript entendiendo qué estamos escribiendo y por qué funciona.
>
> En esta clase vamos a trabajar con **variables, tipos de datos, operadores, condiciones y bucles**. No vamos todavía a trabajar con objetos ni con programación funcional.

---

# 1. ¿Qué es JavaScript?

Hasta ahora hemos trabajado principalmente con:

- **HTML** → estructura y contenido.
- **CSS** → apariencia y diseño.
- **JavaScript** → comportamiento y lógica.

Una forma sencilla de verlo:

```text
HTML       → qué hay en la página
CSS        → cómo se ve
JavaScript → qué hace
```

Por ejemplo, podemos tener un botón:

```html
<button>Comprar</button>
```

HTML crea el botón.

CSS puede cambiar su aspecto.

JavaScript podrá hacer que **ocurra algo cuando el usuario interactúe con él**.

Pero antes de llegar a botones, formularios o eventos, necesitamos aprender a programar.

JavaScript no sirve únicamente para páginas web. También se utiliza en servidores, aplicaciones, herramientas y muchos otros entornos. En este bootcamp empezaremos utilizándolo dentro del navegador y más adelante veremos otros entornos.

---

# 2. ¿Dónde podemos escribir JavaScript?

Durante estas primeras clases utilizaremos dos sitios:

## Opción 1: dentro de una página HTML

Podemos escribir JavaScript dentro de un elemento `<script>`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi primera página con JavaScript</title>
</head>
<body>

    <h1>Mi primera página</h1>

    <script>
        console.log("Hola desde JavaScript");
    </script>

</body>
</html>
```

El navegador carga el HTML y ejecuta el código que encuentra dentro de `<script>`.

> En estas primeras clases trabajaremos directamente dentro del `<script>` para centrarnos en JavaScript. Más adelante veremos otras formas de organizar el código.

---

## Opción 2: consola del navegador

También podemos utilizar las herramientas de desarrollo del navegador.

En Chrome, Edge o Firefox podemos abrir:

**F12 → Consola / Console**

Y escribir:

```javascript
console.log("Hola");
```

Pulsamos Enter y veremos:

```text
Hola
```

La consola será una herramienta fundamental durante todo el curso.

Nos permite:

- probar código rápidamente;
- comprobar valores;
- detectar errores;
- investigar cómo funciona algo.

### Idea importante

No necesitamos crear una página cada vez que queremos probar una pequeña cosa.

Podemos experimentar directamente en la consola.

---

# 3. `console.log()`

`console.log()` sirve para mostrar información en la consola.

```javascript
console.log("Hola");
console.log(25);
console.log(true);
```

Podemos mostrar variables:

```javascript
let nombre = "Laura";

console.log(nombre);
```

También podemos mostrar varias cosas:

```javascript
let nombre = "Laura";
let edad = 25;

console.log(nombre, edad);
```

### Ejemplo dentro de una página

```html
<script>
    let nombre = "Laura";
    let edad = 25;

    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
</script>
```

### Ejercicio 1 — Prueba rápida

Crea tres variables:

- tu nombre;
- tu edad;
- si estás estudiando JavaScript (`true` o `false`).

Muestra las tres en la consola.

**Objetivo:** acostumbrarnos a crear valores y comprobarlos con `console.log()`.

---

# 4. Variables: guardar información

Una variable es un **nombre que utilizamos para guardar y consultar un valor**.

Una analogía sencilla:

> Una variable es como una caja con una etiqueta.

```javascript
let nombre = "Laura";
```

Podemos imaginar:

```text
nombre
┌───────────┐
│  "Laura"  │
└───────────┘
```

Después podemos utilizar esa caja:

```javascript
console.log(nombre);
```

O utilizar su valor para realizar operaciones:

```javascript
let edad = 25;

console.log(edad + 1);
```

---

# 5. `let`, `const` y `var`

Actualmente utilizaremos principalmente:

- `let`
- `const`

También existe `var`, pero pertenece al JavaScript más antiguo y tiene un comportamiento de ámbito diferente que puede provocar confusión.

## `let`

Utilizamos `let` cuando una variable puede cambiar de valor.

```javascript
let edad = 25;

edad = 26;

console.log(edad);
```

La variable sigue siendo `edad`, pero ahora contiene `26`.

---

## `const`

Utilizamos `const` cuando no vamos a **reasignar** la variable.

```javascript
const nombre = "Laura";

console.log(nombre);
```

Esto no está permitido:

```javascript
const nombre = "Laura";

nombre = "Ana";
```

---

## Regla práctica

Para empezar:

```text
¿El valor va a cambiar?
        ↓
       Sí → let
        ↓
       No → const
```

Ejemplo:

```javascript
const nombre = "Laura";
let puntos = 0;

puntos = puntos + 10;
```

`nombre` no cambia.

`puntos` sí cambia.

---

# 6. ¿Qué pasa con `var`?

`var` es una forma antigua de declarar variables:

```javascript
var nombre = "Laura";
```

Todavía podemos encontrarla en código antiguo.

Pero para código nuevo utilizaremos normalmente:

```javascript
let
const
```

### ¿Por qué no usamos `var`?

Una diferencia importante está en el **scope**, es decir, en la zona del programa donde podemos utilizar una variable.

`let` y `const` tienen **scope de bloque**.

```javascript
if (true) {
    let mensaje = "Hola";
    console.log(mensaje);
}

console.log(mensaje); // Error
```

La variable `mensaje` solo existe dentro de ese bloque.

Con `var`, el comportamiento es diferente:

```javascript
if (true) {
    var mensaje = "Hola";
}

console.log(mensaje);
```

`var` no respeta el scope de bloque de la misma manera.

No necesitamos dominar todavía todos los detalles históricos de `var`. Lo importante ahora es:

> **En JavaScript moderno, piensa primero en `const` y `let`. `var` lo reconoceremos cuando aparezca en código antiguo.**

---

# 7. Tipos de datos básicos

JavaScript puede trabajar con diferentes tipos de valores.

Los más importantes en este momento son:

```text
String    → texto
Number    → números
Boolean   → verdadero / falso
Undefined → valor no definido
Null      → ausencia intencionada de valor
```

---

## 7.1 String

Un `string` es texto.

```javascript
const nombre = "Laura";
const ciudad = "Valencia";
const mensaje = "Hola mundo";
```

Podemos utilizar comillas simples o dobles:

```javascript
const nombre1 = "Laura";
const nombre2 = 'Laura';
```

Lo importante es ser consistentes.

---

## 7.2 Number

Los números no llevan comillas:

```javascript
const edad = 25;
const precio = 19.99;
const temperatura = -2;
```

Esto es texto:

```javascript
const edad = "25";
```

Esto es un número:

```javascript
const edad = 25;
```

Aunque visualmente se parezcan, **no son el mismo tipo de dato**.

---

## 7.3 Boolean

Un booleano solo puede tener dos valores:

```javascript
true
false
```

Ejemplo:

```javascript
const usuarioLogueado = true;
const tieneDescuento = false;
```

No llevan comillas.

Esto:

```javascript
true
```

es un booleano.

Esto:

```javascript
"true"
```

es un string.

---

## 7.4 `undefined`

Significa que una variable existe pero todavía no tiene un valor asignado.

```javascript
let nombre;

console.log(nombre);
```

Resultado:

```text
undefined
```

---

## 7.5 `null`

`null` representa intencionadamente la ausencia de un valor.

```javascript
let usuarioSeleccionado = null;
```

Aquí estamos diciendo:

> Ahora mismo no hay ningún usuario seleccionado.

`undefined` y `null` no significan exactamente lo mismo.

Para empezar podemos pensar:

```text
undefined → todavía no hay valor
null      → hemos indicado que no hay valor
```

---

# 8. `typeof`: averiguar qué tipo de dato tenemos

Podemos utilizar `typeof`:

```javascript
const nombre = "Laura";
const edad = 25;
const activo = true;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof activo);
```

Resultado:

```text
string
number
boolean
```

Esto es muy útil para investigar qué contiene una variable.

### Un detalle curioso

En JavaScript:

```javascript
typeof null
```

devuelve:

```text
object
```

Es un comportamiento histórico de JavaScript que debemos conocer, pero **no necesitamos memorizarlo como si fuera una regla lógica**.

---

# 9. Strings y template literals

Una de las cosas que utilizaremos constantemente será construir mensajes.

Podemos concatenar:

```javascript
const nombre = "Laura";
const edad = 25;

console.log("Me llamo " + nombre + " y tengo " + edad + " años.");
```

Funciona, pero puede resultar difícil de leer.

JavaScript tiene los **template literals**, que utilizan backticks:

```javascript
const nombre = "Laura";
const edad = 25;

console.log(`Me llamo ${nombre} y tengo ${edad} años.`);
```

La forma:

```javascript
${variable}
```

permite insertar el valor de una variable dentro del texto.

### Ejemplo

```javascript
const producto = "Camiseta";
const precio = 25;

console.log(`El producto ${producto} cuesta ${precio} €.`);
```

### Ejercicio 2 — Mensaje personalizado

Crea:

```javascript
const nombre = "...";
const ciudad = "...";
const edad = ...;
```

Y muestra:

```text
Hola, soy Laura, tengo 25 años y vivo en Valencia.
```

Utiliza un **template literal**.

---

# 10. Operadores

Los operadores nos permiten trabajar con valores.

Por ejemplo:

```javascript
const resultado = 10 + 5;
```

Aquí `+` es un operador.

---

## 10.1 Operadores matemáticos

```javascript
+   suma
-   resta
*   multiplicación
/   división
%   resto
```

Ejemplos:

```javascript
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
```

El operador `%` devuelve el resto de una división:

```javascript
console.log(10 % 3); // 1
```

Esto será útil, por ejemplo, para saber si un número es par:

```javascript
const numero = 8;

console.log(numero % 2 === 0);
```

---

# 11. Operadores de comparación

Los operadores de comparación producen un booleano:

```javascript
const edad = 25;

console.log(edad > 18);
```

Resultado:

```text
true
```

Principales operadores:

```text
>    mayor que
<    menor que
>=   mayor o igual que
<=   menor o igual que
===  igual en valor y tipo
!==  diferente en valor o tipo
```

---

# 12. MUY IMPORTANTE: `==` frente a `===`

Esta diferencia es importante y conviene entenderla bien desde el principio.

Tenemos:

```javascript
10 == "10"
```

y:

```javascript
10 === "10"
```

No significan exactamente lo mismo.

## `==`

`==` compara intentando convertir los valores para poder compararlos.

```javascript
10 == "10"
```

da:

```text
true
```

¿Por qué?

Porque JavaScript convierte `"10"` —que es texto— para poder hacer la comparación.

---

## `===`

`===` realiza una comparación estricta.

Comprueba:

1. que el valor sea equivalente;
2. que el tipo de dato sea el mismo.

```javascript
10 === 10
```

Resultado:

```text
true
```

Pero:

```javascript
10 === "10"
```

Resultado:

```text
false
```

Porque:

```text
10    → number
"10"  → string
```

Aunque visualmente representan "10", **son tipos diferentes**.

### Una forma sencilla de recordarlo

```text
==   → comparación con conversión de tipos
===  → comparación estricta
```

En código JavaScript moderno, como regla general:

> **Utilizaremos `===` y `!==`.**

Así evitamos conversiones automáticas que pueden producir resultados sorprendentes.

### Ejemplo

```javascript
const edad = 18;

if (edad === 18) {
    console.log("Tiene exactamente 18 años");
}
```

---

# 13. Operadores lógicos

Nos permiten combinar condiciones.

## `&&` — AND

Significa:

> Las dos condiciones deben cumplirse.

```javascript
const edad = 25;
const tieneEntrada = true;

console.log(edad >= 18 && tieneEntrada === true);
```

Las dos condiciones son verdaderas, así que obtenemos:

```text
true
```

---

## `||` — OR

Significa:

> Basta con que una condición sea verdadera.

```javascript
const tieneTarjeta = false;
const tieneEntrada = true;

console.log(tieneTarjeta || tieneEntrada);
```

Resultado:

```text
true
```

---

## `!` — NOT

Invierte un booleano.

```javascript
const activo = true;

console.log(!activo);
```

Resultado:

```text
false
```

---

# 14. Ejercicio — Combinando operadores

Tenemos:

```javascript
const edad = 22;
const tieneEntrada = true;
```

Queremos comprobar si una persona puede entrar.

Debe:

- tener 18 años o más;
- tener entrada.

Escribe una condición que produzca `true` solamente cuando se cumplan ambas condiciones.

Después prueba diferentes valores.

---

# 15. Condicionales: `if`

Los condicionales permiten que el programa **tome decisiones**.

Una analogía:

> Si ocurre esto, hago una cosa. Si no ocurre, hago otra.

```javascript
const edad = 20;

if (edad >= 18) {
    console.log("Puedes entrar");
}
```

La condición:

```javascript
edad >= 18
```

produce `true` o `false`.

Si produce `true`, ejecutamos el código entre `{ }`.

---

# 16. `if / else`

Podemos indicar qué ocurre cuando la condición no se cumple.

```javascript
const edad = 16;

if (edad >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}
```

---

# 17. `if / else if / else`

Podemos comprobar varias posibilidades:

```javascript
const nota = 7;

if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}
```

JavaScript comprueba las condiciones **de arriba hacia abajo**.

Cuando encuentra una condición verdadera, ejecuta ese bloque y continúa después del condicional.

### Ejercicio 3 — Clasificador de edad

Crea una variable:

```javascript
const edad = 25;
```

Muestra:

- `"Niño"` si es menor de 13.
- `"Adolescente"` si tiene entre 13 y 17.
- `"Adulto"` si tiene entre 18 y 64.
- `"Adulto mayor"` si tiene 65 o más.

Prueba diferentes edades.

---

# 18. `switch`

`switch` resulta útil cuando queremos comparar **un mismo valor con diferentes posibilidades**.

Por ejemplo:

```javascript
const dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Empieza la semana");
        break;

    case "viernes":
        console.log("Ya casi es fin de semana");
        break;

    case "sábado":
    case "domingo":
        console.log("Fin de semana");
        break;

    default:
        console.log("Día normal");
}
```

## ¿Qué hace `break`?

`break` indica que queremos salir del `switch`.

Sin `break`, JavaScript puede continuar ejecutando los siguientes `case`.

### ¿Cuándo usar `if` y cuándo `switch`?

No existe una regla absoluta.

Como orientación:

```text
¿Estoy comprobando condiciones?
→ if

¿Estoy comparando un mismo valor con varias opciones concretas?
→ switch
```

No necesitamos abusar de `switch`. En muchos casos un `if / else if` es perfectamente válido.

### Ejercicio 4 — Menú

Crea:

```javascript
const opcion = 2;
```

Utiliza `switch` para mostrar:

```text
1 → "Ver perfil"
2 → "Configuración"
3 → "Cerrar sesión"
```

Si no es ninguna de esas opciones:

```text
"Opción no válida"
```

---

# 19. Bucles

Un bucle sirve para **repetir código**.

Por ejemplo, si queremos mostrar los números del 1 al 10, podríamos escribir:

```javascript
console.log(1);
console.log(2);
console.log(3);
...
```

Pero sería absurdo escribirlo así.

Para eso existen los bucles.

---

# 20. Bucle `for`

La estructura básica es:

```javascript
for (inicio; condición; actualización) {
    // código que se repite
}
```

Ejemplo:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Resultado:

```text
1
2
3
4
5
```

Vamos a leerlo paso a paso:

```javascript
let i = 1
```

Empezamos en 1.

```javascript
i <= 5
```

Mientras `i` sea menor o igual que 5, continuamos.

```javascript
i++
```

Después de cada vuelta aumentamos `i` en 1.

---

# 21. Entender un `for` paso a paso

Este código:

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i);
}
```

funciona así:

```text
i = 0
¿0 < 3? → sí → muestra 0
i++

i = 1
¿1 < 3? → sí → muestra 1
i++

i = 2
¿2 < 3? → sí → muestra 2
i++

i = 3
¿3 < 3? → no → termina
```

Resultado:

```text
0
1
2
```

### Idea importante

En programación es muy habitual trabajar desde `0`.

Por eso veremos muchas veces:

```javascript
i = 0
```

---

# 22. `i++`

Esto:

```javascript
i++;
```

significa:

```javascript
i = i + 1;
```

También existen:

```javascript
i--;
```

que equivale a:

```javascript
i = i - 1;
```

Ejemplo:

```javascript
let contador = 5;

contador++;
console.log(contador); // 6

contador--;
console.log(contador); // 5
```

---

# 23. `break`

`break` permite salir de un bucle antes de llegar al final.

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Resultado:

```text
1
2
3
4
```

Cuando `i` llega a 5, ejecutamos `break` y terminamos el bucle.

---

# 24. `continue`

`continue` no termina el bucle.

Lo que hace es **saltar esa vuelta** y continuar con la siguiente.

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Resultado:

```text
1
2
4
5
```

El 3 se ha saltado.

---

# 25. Bucle `while`

`while` significa:

> Mientras se cumpla esta condición, repite el código.

```javascript
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
```

Resultado:

```text
1
2
3
4
5
```

Aquí debemos tener cuidado de modificar la variable que controla la condición.

Este código sería peligroso:

```javascript
let contador = 1;

while (contador <= 5) {
    console.log(contador);
}
```

`contador` nunca cambia, por lo que la condición siempre sería verdadera.

---

# 26. `do...while`

Existe también:

```javascript
do {
    // código
} while (condición);
```

La diferencia principal es que el código se ejecuta **al menos una vez** antes de comprobar la condición.

```javascript
let numero = 10;

do {
    console.log(numero);
    numero++;
} while (numero < 5);
```

Aunque `10 < 5` es falso, veremos una vez:

```text
10
```

Lo conoceremos porque aparece en JavaScript, pero en nuestro código utilizaremos mucho más `for` y `while`.

---

# 27. `for...of`

Cuando tengamos una colección de valores, también podemos recorrerla con `for...of`.

Por ejemplo:

```javascript
const colores = ["rojo", "verde", "azul"];

for (const color of colores) {
    console.log(color);
}
```

Resultado:

```text
rojo
verde
azul
```

Aquí no estamos trabajando todavía con `forEach`, `map`, `filter` ni programación funcional.

Simplemente estamos utilizando otra forma de recorrer una colección.

---

# 28. Ejercicio 5 — Números

Crea un bucle que muestre:

```text
1
2
3
4
5
6
7
8
9
10
```

Después modifica el ejercicio para mostrar solamente los números pares del 1 al 20.

Pista:

```javascript
numero % 2
```

---

# 29. Ejercicio 6 — Cuenta atrás

Crea un bucle que muestre:

```text
10
9
8
7
6
5
4
3
2
1
```

Después muestra:

```text
¡Despegue!
```

---

# 30. Ejercicio 7 — Tabla de multiplicar

Crea una variable:

```javascript
const numero = 7;
```

Utiliza un `for` para mostrar:

```text
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
```

Utiliza template literals.

---

# 31. Ejercicio 8 — FizzBuzz

Este ejercicio es un clásico para practicar condiciones y bucles.

Recorre los números del 1 al 30.

- Si el número es divisible entre 3 → muestra `"Fizz"`.
- Si es divisible entre 5 → muestra `"Buzz"`.
- Si es divisible entre 3 y 5 → muestra `"FizzBuzz"`.
- En cualquier otro caso → muestra el número.

Pista:

```javascript
numero % 3 === 0
```

y:

```javascript
numero % 5 === 0
```

---

# 32. Ejercicio final — Sistema sencillo de acceso

Vamos a juntar todo lo aprendido.

Tenemos:

```javascript
const usuario = "Laura";
const password = "1234";
const edad = 25;
```

Queremos comprobar:

1. Si la edad es menor de 18:
   ```text
   Acceso denegado: eres menor de edad.
   ```

2. Si la edad es válida pero la contraseña no es `"1234"`:
   ```text
   Contraseña incorrecta.
   ```

3. Si todo es correcto:
   ```text
   Bienvenida Laura.
   ```

Después añade un número de intentos:

```javascript
let intentos = 3;
```

Y utiliza un bucle para simular diferentes comprobaciones.

> **Objetivo del ejercicio:** utilizar variables, tipos, comparaciones, operadores lógicos, `if / else` y bucles en un mismo problema.

---

# 33. Mini resumen

Al terminar esta clase debemos entender:

### JavaScript

```text
HTML → estructura
CSS → apariencia
JS → comportamiento y lógica
```

### Variables

```javascript
const nombre = "Laura";
let puntos = 0;
```

### Tipos

```javascript
"Hola"   // string
25       // number
true     // boolean
```

### Comparación

```javascript
===   // igualdad estricta
!==   // desigualdad estricta
```

### Condiciones

```javascript
if (...) {
    ...
} else {
    ...
}
```

### Bucles

```javascript
for (...) {
    ...
}
```

```javascript
while (...) {
    ...
}
```

### Consola

```javascript
console.log(...)
```

---

## Idea para recordar

> **Programar consiste, en gran parte, en guardar información, tomar decisiones y repetir acciones.**

En esta clase hemos empezado precisamente por esas tres cosas.