# JavaScript 5: Programación funcional, map, filter, reduce, destructuring y spread

Apuntes resumidos para consultar y practicar. No hace falta memorizar toda la sintaxis: aprende a reconocer qué problema resuelve cada herramienta y consulta la documentación cuando la necesites.

## 1. Expresiones regulares (RegExp)

Una **expresión regular** es un patrón que permite comprobar si un texto cumple una condición o encontrar partes de un texto.

En JavaScript se escribe normalmente entre barras `/.../`. El método `.test()` devuelve `true` o `false`.

### Ejemplo 1: comprobar un email

```js
const email = "ana23@gmail.com";
const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

console.log(emailRegex.test(email)); // true
console.log(emailRegex.test("esto-no-es-un-email")); // false
```

Es una comprobación sencilla del formato, no una garantía de que el correo exista o pueda recibir mensajes.

### Ejemplo 2: contraseña solo numérica o con letras y números, incluida una mayúscula

```js
const soloNumeros = /^\d+$/;
const letrasNumerosMayuscula = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/;

console.log(soloNumeros.test("123456"));       // true
console.log(soloNumeros.test("123a56"));       // false

console.log(letrasNumerosMayuscula.test("Clave123")); // true
console.log(letrasNumerosMayuscula.test("clave123")); // false: no hay mayúscula
```

- `^` y `$`: indican que se comprueba la cadena completa.
- `\d`: un dígito.
- `+`: uno o más caracteres.
- `[...]`: conjunto de caracteres permitidos.
- `test(texto)`: comprueba si el texto cumple el patrón.

**Cómo probar una expresión regular:** cambia el valor de las variables y ejecuta el código en la consola del navegador o en un editor online como [Regex101](https://regex101.com/). Prueba tanto un caso válido como uno inválido. También puedes pedir ayuda a la IA, pero comprueba siempre el resultado con ejemplos.

> Una expresión regular de contraseña sirve para validar un formato; no sustituye el almacenamiento seguro de contraseñas ni otras medidas de seguridad.

## 2. Objetos literales

Un **objeto** agrupa información relacionada mediante pares `clave: valor`. El valor puede ser un texto, número, booleano, array, otro objeto o una función.

```js
const producto = {
  nombre: "Teclado",
  precio: 29.99,
  disponible: true,
  etiquetas: ["USB", "periférico"]
};

console.log(producto.nombre); // "Teclado"
console.log(producto["precio"]); // 29.99
```

Las claves también se llaman *keys* o propiedades. Para recorrer las claves y sus valores:

```js
for (const key in producto) {
  console.log(key, producto[key]);
}
```

Métodos útiles:

```js
Object.keys(producto);   // array con las claves
Object.values(producto); // array con los valores
Object.entries(producto); // array de pares [clave, valor]
```

### Copiar un objeto con spread

```js
const productoActualizado = {
  ...producto,
  precio: 24.99
};
```

Se crea un objeto nuevo con las propiedades de `producto`, pero con otro precio. **Es una copia superficial**: si hay objetos o arrays anidados, esos elementos internos siguen compartiéndose.

## 3. Destructuring: extraer valores

La **desestructuración** permite extraer valores de arrays u objetos y guardarlos en variables.

### Con arrays

```js
const colores = ["rojo", "verde", "azul"];

const [primero, segundo] = colores;

console.log(primero); // "rojo"
console.log(segundo); // "verde"
```

El orden importa: la primera variable recibe el primer elemento.

### Con objetos

```js
const usuario = {
  nombre: "Ana",
  email: "ana@example.com"
};

const { nombre, email } = usuario;

console.log(nombre); // "Ana"
console.log(email);  // "ana@example.com"
```

Por defecto, el nombre de la variable coincide con la clave del objeto. También se puede cambiar:

```js
const { nombre: nombreUsuario } = usuario;
```

## 4. Spread y rest (`...`)

Los dos usan tres puntos, pero hacen cosas distintas según dónde se utilicen.

### Spread: expandir o copiar

```js
const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5];

console.log(masNumeros); // [1, 2, 3, 4, 5]
```

También permite combinar objetos:

```js
const datosBase = { nombre: "Leo", edad: 25 };
const datosCompletos = { ...datosBase, ciudad: "Valencia" };
```

Si dos objetos tienen la misma clave, gana el valor que aparece más a la derecha.

### Rest: recoger lo que queda

En una desestructuración, `...resto` recoge los elementos restantes:

```js
const [primero, ...resto] = [10, 20, 30, 40];

console.log(primero); // 10
console.log(resto);   // [20, 30, 40]
```

También permite recibir varios argumentos en una función:

```js
function sumar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(sumar(2, 3, 4)); // 9
```

**Idea para recordar:** spread reparte; rest recoge.

## 5. Programación funcional, en pocas palabras

La programación funcional consiste en construir operaciones combinando funciones pequeñas. En JavaScript se utiliza mucho con arrays.

Una **función pura**:
- devuelve el mismo resultado cuando recibe las mismas entradas;
- no modifica datos externos ni produce efectos secundarios.

```js
function duplicar(numero) {
  return numero * 2;
}
```

En cambio, esta función modifica una variable externa:

```js
let total = 0;

function sumarAlTotal(numero) {
  total += numero;
}
```

Cuando transformamos arrays, normalmente es preferible crear un resultado nuevo en lugar de modificar los datos originales sin necesidad.

Las *arrow functions* (`=>`) permiten escribir funciones de forma breve:

```js
const duplicar = numero => numero * 2;
const sumar = (a, b) => a + b;
```

Si se usa `{}` para escribir varias instrucciones, hay que indicar `return` para devolver un valor:

```js
const duplicar = numero => {
  return numero * 2;
};
```

## 6. Tres métodos de arrays que debes reconocer

Partimos de estos datos:

```js
const precios = [10, 20, 30, 40];
```

### `map()`: transformar cada elemento

Devuelve un array nuevo con el resultado de aplicar una función a cada elemento.

```js
const preciosConIVA = precios.map(precio => precio * 1.21);

console.log(preciosConIVA); // [12.1, 24.2, 36.3, 48.4]
```

### `filter()`: quedarse con algunos elementos

Devuelve un array nuevo con los elementos que cumplen una condición.

```js
const preciosAltos = precios.filter(precio => precio >= 30);

console.log(preciosAltos); // [30, 40]
```

### `reduce()`: obtener un único resultado

Acumula los elementos para producir un resultado, por ejemplo, una suma.

```js
const total = precios.reduce((acumulado, precio) => acumulado + precio, 0);

console.log(total); // 100
```

En `reduce()`, el `0` es el valor inicial del acumulador.

| Método | ¿Para qué sirve? | Resultado habitual |
|---|---|---|
| `map()` | Transformar todos los elementos | Un array nuevo |
| `filter()` | Seleccionar elementos | Un array nuevo, posiblemente más pequeño |
| `reduce()` | Acumular o combinar elementos | Un valor, aunque también puede ser un array u objeto |

**No los confundas con `forEach()`:** sirve para ejecutar una acción por cada elemento, pero no devuelve un array transformado. Si quieres transformar los datos, normalmente utiliza `map()`.

## 7. Otras herramientas de ES6, muy brevemente

### Operador ternario

Una forma breve de elegir entre dos valores según una condición:

```js
const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
```

### `for...of` y `for...in`

- `for...of`: recorre los valores de un array.
- `for...in`: recorre las claves enumerables de un objeto.

```js
for (const precio of precios) {
  console.log(precio);
}

for (const clave in producto) {
  console.log(clave, producto[clave]);
}
```

### Parámetros por defecto

Permiten usar un valor si no se proporciona el argumento:

```js
function saludar(nombre = "amigo") {
  return `Hola, ${nombre}`;
}
```

## Para consultar

- [MDN: expresiones regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions)
- [MDN: objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN: asignación por desestructuración](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN: spread syntax](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN: `map()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: `filter()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: `reduce()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)