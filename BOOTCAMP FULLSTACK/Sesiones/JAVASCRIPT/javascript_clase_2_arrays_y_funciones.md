# JavaScript — Clase 2
## Arrays y funciones

> **Objetivo de la clase:** aprender a trabajar con colecciones de datos y a crear código reutilizable mediante funciones.
>
> En esta clase vamos a centrarnos en **arrays y funciones**. Todavía no vamos a entrar en objetos, `map()`, `filter()`, `find()`, `some()`, `every()` ni programación funcional. Esos conceptos tendrán su propia clase.

---

# 1. Arrays: guardar varios valores

Hasta ahora hemos guardado un valor en una variable:

```javascript
const nombre = "Laura";
```

Pero imaginemos que queremos guardar 5 nombres.

Podríamos hacer:

```javascript
const nombre1 = "Laura";
const nombre2 = "María";
const nombre3 = "Sonia";
const nombre4 = "Carlos";
const nombre5 = "Pablo";
```

Funciona, pero es incómodo.

Un **array** nos permite guardar varios valores dentro de una misma variable:

```javascript
const nombres = [
    "Laura",
    "María",
    "Sonia",
    "Carlos",
    "Pablo"
];
```

Podemos imaginarlo como una fila de casillas:

```text
Índice:     0        1        2        3        4
         ┌────────┬────────┬────────┬────────┬────────┐
Valor:   │ Laura  │ María  │ Sonia  │ Carlos │ Pablo  │
         └────────┴────────┴────────┴────────┴────────┘
```

### Idea fundamental

> Un array es una colección ordenada de valores.

---

# 2. Los índices empiezan en 0

Este concepto es MUY importante.

El primer elemento está en la posición:

```text
0
```

El segundo:

```text
1
```

El tercero:

```text
2
```

Por ejemplo:

```javascript
const nombres = ["Laura", "María", "Sonia"];
```

Tenemos:

```text
nombres[0] → "Laura"
nombres[1] → "María"
nombres[2] → "Sonia"
```

---

# 3. Acceder a un elemento

Para obtener un elemento utilizamos:

```javascript
array[indice]
```

Ejemplo:

```javascript
const nombres = ["Laura", "María", "Sonia"];

console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
```

Resultado:

```text
Laura
María
Sonia
```

---

# 4. El último elemento

Aquí hay una idea que utilizaremos muchísimo.

Si tenemos:

```javascript
const nombres = ["Laura", "María", "Sonia"];
```

La longitud es:

```javascript
nombres.length
```

Resultado:

```text
3
```

Pero los índices son:

```text
0
1
2
```

Por tanto, el último elemento está en:

```javascript
nombres[nombres.length - 1]
```

Ejemplo:

```javascript
console.log(nombres[nombres.length - 1]);
```

Resultado:

```text
Sonia
```

### ¿Por qué `length - 1`?

Porque:

```text
length = cantidad de elementos
último índice = cantidad de elementos - 1
```

Si tenemos 5 elementos:

```text
length = 5
último índice = 4
```

### El penúltimo

Podemos hacer:

```javascript
nombres[nombres.length - 2]
```

Y el tercero empezando por el final:

```javascript
nombres[nombres.length - 3]
```

Esto es muy importante porque funciona aunque el array cambie de tamaño.

---

# 5. Ejercicio 1 — Acceder a posiciones

Crea:

```javascript
const ciudades = [
    "Valencia",
    "Madrid",
    "Barcelona",
    "Sevilla",
    "Bilbao"
];
```

Muestra en consola:

1. La primera ciudad.
2. La tercera ciudad.
3. La última ciudad.
4. La penúltima ciudad.

**No escribas los índices a mano para las dos últimas.**

Utiliza:

```javascript
length
```

---

# 6. `length`

`length` nos dice cuántos elementos tiene un array.

```javascript
const frutas = ["manzana", "pera", "plátano"];

console.log(frutas.length);
```

Resultado:

```text
3
```

Si añadimos más elementos:

```javascript
const frutas = [
    "manzana",
    "pera",
    "plátano",
    "naranja"
];

console.log(frutas.length);
```

Resultado:

```text
4
```

---

# 7. Recorrer un array con `for`

Como ya conocemos los bucles, podemos utilizarlos para recorrer arrays.

```javascript
const nombres = [
    "Laura",
    "María",
    "Sonia",
    "Carlos"
];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

Resultado:

```text
Laura
María
Sonia
Carlos
```

Vamos a entenderlo:

```javascript
let i = 0;
```

Empezamos por la primera posición.

```javascript
i < nombres.length;
```

Mientras `i` sea menor que la cantidad de elementos.

```javascript
nombres[i]
```

Obtenemos el elemento que corresponde a esa posición.

---

# 8. Ver también el índice

Podemos mostrar el índice y el valor:

```javascript
const nombres = ["Laura", "María", "Sonia"];

for (let i = 0; i < nombres.length; i++) {
    console.log(`Índice ${i}: ${nombres[i]}`);
}
```

Resultado:

```text
Índice 0: Laura
Índice 1: María
Índice 2: Sonia
```

Esto será muy útil cuando necesitemos saber **dónde está cada elemento**.

---

# 9. Ejercicio 2 — Recorrer un array

Crea un array con 5 películas.

Recórrelo con un `for` y muestra:

```text
Película 1: ...
Película 2: ...
Película 3: ...
Película 4: ...
Película 5: ...
```

Pista:

El índice empieza en `0`, pero podemos mostrar `i + 1` al usuario.

---

# 10. Modificar un elemento

Podemos cambiar directamente el valor de una posición.

```javascript
const frutas = [
    "manzana",
    "pera",
    "plátano"
];

frutas[1] = "naranja";

console.log(frutas);
```

Resultado:

```text
["manzana", "naranja", "plátano"]
```

No hemos creado otro array.

Hemos cambiado el elemento que estaba en la posición `1`.

---

# 11. Añadir elementos: `push()`

`push()` añade un elemento **al final** del array.

```javascript
const frutas = ["manzana", "pera"];

frutas.push("naranja");

console.log(frutas);
```

Resultado:

```text
["manzana", "pera", "naranja"]
```

Podemos añadir varios:

```javascript
frutas.push("plátano", "kiwi");
```

---

# 12. Eliminar el último: `pop()`

`pop()` elimina el último elemento.

```javascript
const frutas = [
    "manzana",
    "pera",
    "naranja"
];

frutas.pop();

console.log(frutas);
```

Resultado:

```text
["manzana", "pera"]
```

Además, `pop()` devuelve el elemento eliminado:

```javascript
const frutaEliminada = frutas.pop();

console.log(frutaEliminada);
```

---

# 13. Añadir al principio: `unshift()`

`unshift()` añade uno o varios elementos al principio.

```javascript
const frutas = ["pera", "naranja"];

frutas.unshift("manzana");

console.log(frutas);
```

Resultado:

```text
["manzana", "pera", "naranja"]
```

---

# 14. Eliminar el primero: `shift()`

`shift()` elimina el primer elemento.

```javascript
const frutas = [
    "manzana",
    "pera",
    "naranja"
];

frutas.shift();

console.log(frutas);
```

Resultado:

```text
["pera", "naranja"]
```

Al igual que `pop()`, devuelve el elemento eliminado:

```javascript
const primeraFruta = frutas.shift();

console.log(primeraFruta);
```

---

# 15. Resumen de los cuatro métodos básicos

```text
push()    → añade al final
pop()     → elimina del final
unshift() → añade al principio
shift()   → elimina del principio
```

Una forma sencilla de visualizarlo:

```text
                 PRINCIPIO                     FINAL
                    ↓                            ↓
             [ A ][ B ][ C ][ D ]

push(E)    → [ A ][ B ][ C ][ D ][ E ]
pop()      → [ A ][ B ][ C ]  ← D

unshift(X) → [ X ][ A ][ B ][ C ][ D ]
shift()    → [ A ][ B ][ C ][ D ]  ← X
```

---

# 16. Ejercicio 3 — Lista de tareas

Crea:

```javascript
const tareas = [
    "Estudiar JavaScript",
    "Hacer ejercicio"
];
```

Después:

1. Añade `"Comprar comida"` al final.
2. Añade `"Desayunar"` al principio.
3. Elimina la última tarea.
4. Elimina la primera tarea.
5. Muestra el array final.

Después repite el ejercicio con tus propias tareas.

---

# 17. `splice()`: añadir, eliminar o sustituir en una posición

`push`, `pop`, `shift` y `unshift` cubren los extremos del array.

¿Pero qué ocurre si queremos modificar una posición intermedia?

Podemos utilizar `splice()`.

Ejemplo:

```javascript
const frutas = [
    "manzana",
    "pera",
    "plátano",
    "naranja"
];

frutas.splice(1, 1);

console.log(frutas);
```

Resultado:

```text
["manzana", "plátano", "naranja"]
```

Estamos diciendo:

```javascript
splice(1, 1)
```

- empieza en el índice `1`;
- elimina `1` elemento.

---

## Añadir con `splice()`

También podemos insertar elementos:

```javascript
const frutas = [
    "manzana",
    "plátano"
];

frutas.splice(1, 0, "pera");

console.log(frutas);
```

Resultado:

```text
["manzana", "pera", "plátano"]
```

Aquí:

```javascript
splice(1, 0, "pera")
```

significa:

```text
empieza en índice 1
elimina 0 elementos
añade "pera"
```

No necesitamos memorizar todas las posibilidades de `splice()` ahora. Lo importante es entender para qué sirve.

---

# 18. Ejercicio 4 — Modificar una lista

Tenemos:

```javascript
const colores = [
    "rojo",
    "verde",
    "azul",
    "amarillo"
];
```

Haz lo siguiente:

1. Cambia `"verde"` por `"negro"`.
2. Elimina `"azul"` utilizando `splice()`.
3. Inserta `"blanco"` entre `"rojo"` y `"negro"`.
4. Muestra el resultado.

---

# 19. Recorrer arrays con `for...of`

Ya hemos visto:

```javascript
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

También podemos utilizar:

```javascript
for (const nombre of nombres) {
    console.log(nombre);
}
```

Esto nos da directamente el valor.

Por ahora utilizaremos ambas formas:

### Necesito el índice

```javascript
for (let i = 0; i < nombres.length; i++) {
    console.log(i, nombres[i]);
}
```

### Solo necesito el valor

```javascript
for (const nombre of nombres) {
    console.log(nombre);
}
```

> Todavía no estamos utilizando `forEach()`, `map()`, `filter()` ni otros métodos de programación funcional. Los estudiaremos más adelante.

---

# 20. Ejercicio 5 — Buscar manualmente

Tenemos:

```javascript
const nombres = [
    "Laura",
    "Carlos",
    "María",
    "Sonia"
];
```

Crea una variable:

```javascript
const nombreBuscado = "María";
```

Recorre el array con un `for`.

Si encuentras el nombre, muestra:

```text
María está en la lista.
```

Si no lo encuentras, muestra:

```text
María no está en la lista.
```

**Importante:** hazlo utilizando un bucle y una condición. No utilices todavía `find()`, `includes()` ni otros métodos avanzados.

---

# 21. Funciones: reutilizar código

Una función es un **bloque de código que podemos ejecutar cuando lo necesitemos**.

Imagina que tenemos que mostrar este mensaje diez veces:

```javascript
console.log("Bienvenido");
```

Podríamos copiarlo diez veces.

Pero sería mejor crear una función:

```javascript
function mostrarBienvenida() {
    console.log("Bienvenido");
}
```

Ahora podemos ejecutarla cuando queramos:

```javascript
mostrarBienvenida();
```

Y volver a ejecutarla:

```javascript
mostrarBienvenida();
mostrarBienvenida();
mostrarBienvenida();
```

### Analogía

Una función es como una **máquina**.

Le podemos dar datos:

```text
entrada → [ MÁQUINA ] → salida
```

Por ejemplo:

```text
5 + 3 → [ sumar ] → 8
```

---

# 22. Declarar y ejecutar una función

Tenemos dos acciones diferentes.

## Declarar

Estamos creando la función:

```javascript
function saludar() {
    console.log("Hola");
}
```

## Invocar

Estamos ejecutando la función:

```javascript
saludar();
```

Los paréntesis:

```javascript
()
```

son importantes porque indican que queremos **invocar/ejecutar** la función.

---

# 23. Parámetros

Podemos hacer que una función reciba información.

```javascript
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
```

Ahora:

```javascript
saludar("Laura");
```

Resultado:

```text
Hola Laura
```

Y:

```javascript
saludar("Carlos");
```

Resultado:

```text
Hola Carlos
```

`nombre` es el **parámetro** de la función.

El valor que pasamos al invocarla es el **argumento**:

```javascript
saludar("Laura");
        ↑
     argumento
```

---

# 24. Varios parámetros

Podemos recibir varios valores:

```javascript
function presentar(nombre, edad) {
    console.log(`Me llamo ${nombre} y tengo ${edad} años.`);
}
```

Invocamos:

```javascript
presentar("Laura", 25);
```

Resultado:

```text
Me llamo Laura y tengo 25 años.
```

---

# 25. `return`: devolver un resultado

Una función puede hacer algo y **devolver un valor**.

```javascript
function sumar(a, b) {
    return a + b;
}
```

Podemos guardar el resultado:

```javascript
const resultado = sumar(5, 3);

console.log(resultado);
```

Resultado:

```text
8
```

La idea es:

```text
5 + 3
   ↓
sumar()
   ↓
  8
```

---

# 26. `console.log()` no es lo mismo que `return`

Esta diferencia es MUY importante.

Mira:

```javascript
function sumar(a, b) {
    console.log(a + b);
}
```

La función muestra el resultado:

```javascript
sumar(5, 3);
```

Veremos:

```text
8
```

Pero no podemos utilizar ese resultado directamente:

```javascript
const resultado = sumar(5, 3);
```

La función no está devolviendo el `8`.

Ahora:

```javascript
function sumar(a, b) {
    return a + b;
}
```

Sí podemos:

```javascript
const resultado = sumar(5, 3);

console.log(resultado);
```

### Regla para recordar

```text
console.log() → muestra algo
return        → devuelve un valor
```

Una función puede utilizar ambos:

```javascript
function sumar(a, b) {
    const resultado = a + b;

    console.log("El resultado es:", resultado);

    return resultado;
}
```

---

# 27. ¿Qué devuelve una función si no utilizamos `return`?

Si una función no devuelve explícitamente un valor, el resultado de la llamada es:

```javascript
undefined
```

Ejemplo:

```javascript
function saludar() {
    console.log("Hola");
}

const resultado = saludar();

console.log(resultado);
```

Primero veremos:

```text
Hola
```

Y después:

```text
undefined
```

Esto ayuda a entender por qué `return` es importante.

---

# 28. Ejercicio 6 — Funciones sencillas

Crea una función:

```javascript
saludar(nombre)
```

que muestre:

```text
Hola Laura
```

cuando hagamos:

```javascript
saludar("Laura");
```

Después crea:

```javascript
mostrarEdad(nombre, edad)
```

que muestre:

```text
Laura tiene 25 años.
```

---

# 29. Ejercicio 7 — Funciones que calculan

Crea estas funciones:

```javascript
sumar(a, b)
restar(a, b)
multiplicar(a, b)
dividir(a, b)
```

Cada una debe **devolver** el resultado.

Ejemplo:

```javascript
const resultado = multiplicar(5, 4);

console.log(resultado);
```

Resultado:

```text
20
```

Después prueba a utilizar el resultado de una función dentro de otra operación:

```javascript
const resultado = sumar(10, 5) * 2;

console.log(resultado);
```

---

# 30. Funciones y arrays

Ahora podemos combinar lo que hemos aprendido.

Tenemos:

```javascript
const numeros = [10, 20, 30, 40];
```

Podemos crear una función que reciba un array y muestre sus elementos:

```javascript
function mostrarArray(array) {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

}
```

Y ejecutarla:

```javascript
mostrarArray(numeros);
```

Esto es importante:

> Una función puede recibir un array como parámetro.

---

# 31. Funciones que trabajan con arrays

Podemos crear una función que calcule la suma de todos los números:

```javascript
function sumarArray(numeros) {

    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }

    return total;
}
```

Después:

```javascript
const numeros = [10, 20, 30, 40];

const resultado = sumarArray(numeros);

console.log(resultado);
```

Resultado:

```text
100
```

Aquí estamos combinando:

- arrays;
- `length`;
- `for`;
- variables;
- operaciones;
- funciones;
- parámetros;
- `return`.

Esto es exactamente lo que queremos empezar a dominar.

---

# 32. Funciones como pequeñas herramientas

Una buena forma de pensar en las funciones es:

```text
DATOS
  ↓
FUNCIÓN
  ↓
RESULTADO
```

Por ejemplo:

```javascript
function calcularPrecioFinal(precio, descuento) {
    return precio - descuento;
}
```

Uso:

```javascript
const resultado = calcularPrecioFinal(100, 20);

console.log(resultado);
```

Resultado:

```text
80
```

La función nos permite reutilizar esa lógica:

```javascript
calcularPrecioFinal(50, 10);
calcularPrecioFinal(200, 30);
calcularPrecioFinal(80, 15);
```

---

# 33. Funciones anónimas

JavaScript también permite guardar una función en una variable:

```javascript
const saludar = function(nombre) {
    console.log(`Hola ${nombre}`);
};
```

Después:

```javascript
saludar("Laura");
```

En este caso la función no tiene un nombre propio después de `function`.

La función está guardada en la variable:

```javascript
saludar
```

### ¿Por qué debemos conocer esta sintaxis?

Porque aparecerá en código JavaScript y porque más adelante encontraremos funciones como valores.

Por ahora no necesitamos profundizar más.

---

# 34. Arrow functions

JavaScript moderno también permite escribir funciones utilizando una **arrow function**:

```javascript
const saludar = (nombre) => {
    console.log(`Hola ${nombre}`);
};
```

La función anterior y esta realizan lo mismo:

```javascript
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
```

y:

```javascript
const saludar = (nombre) => {
    console.log(`Hola ${nombre}`);
};
```

Por ahora lo importante es reconocer las dos formas.

### Con varios parámetros

```javascript
const sumar = (a, b) => {
    return a + b;
};
```

La ejecutamos igual:

```javascript
console.log(sumar(5, 3));
```

---

# 35. ¿Qué sintaxis utilizaremos?

En esta clase quiero que dominemos especialmente:

```javascript
function sumar(a, b) {
    return a + b;
}
```

Las funciones tradicionales son muy importantes para entender claramente:

- parámetros;
- argumentos;
- `return`;
- ámbito;
- ejecución.

Las funciones anónimas y las arrow functions las conoceremos también porque forman parte del JavaScript moderno, pero **no necesitamos convertir esta clase en una clase sobre todas las formas posibles de escribir funciones**.

---

# 36. Una nota importante sobre funciones y objetos

Más adelante estudiaremos los objetos con profundidad.

Solo debemos adelantar ahora una idea:

> **En JavaScript, las funciones son objetos.**

Esto explica algunas características interesantes del lenguaje, pero **no necesitamos desarrollar todavía esta idea**.

En la siguiente clase, cuando estudiemos objetos, volveremos sobre ello.

---

# 37. Ejercicio 8 — Función que busca un valor

Tenemos:

```javascript
const nombres = [
    "Laura",
    "Carlos",
    "María",
    "Sonia"
];
```

Crea:

```javascript
buscarNombre(array, nombre)
```

La función debe recorrer el array y devolver:

```text
true
```

si encuentra el nombre.

Y:

```text
false
```

si no lo encuentra.

Ejemplo:

```javascript
console.log(buscarNombre(nombres, "María"));
```

Resultado:

```text
true
```

Y:

```javascript
console.log(buscarNombre(nombres, "Pedro"));
```

Resultado:

```text
false
```

**No utilices `includes()`, `find()` ni otros métodos.**

Queremos practicar:

- parámetros;
- arrays;
- `for`;
- `if`;
- `return`.

---

# 38. Ejercicio 9 — Obtener el mayor número

Crea:

```javascript
const numeros = [12, 5, 28, 7, 19];
```

Y una función:

```javascript
obtenerMayor(array)
```

que devuelva el número más grande.

Resultado:

```text
28
```

### Pista

Puedes empezar suponiendo que el primer elemento es el mayor:

```javascript
let mayor = array[0];
```

Después recorre el resto del array y compara.

Este ejercicio es importante porque obliga a pensar en el algoritmo, no simplemente en escribir sintaxis.

---

# 39. Ejercicio 10 — Contar números

Crea una función:

```javascript
contarMayoresDeEdad(edades)
```

que reciba un array:

```javascript
const edades = [12, 18, 25, 16, 32, 15, 21];
```

Y devuelva cuántas personas tienen 18 años o más.

Resultado:

```text
4
```

Utiliza:

- una variable contador;
- un `for`;
- una condición;
- `return`.

---

# 40. Ejercicio final — Gestionar una lista

Vamos a juntar todo lo aprendido.

Tenemos:

```javascript
const tareas = [
    "Estudiar HTML",
    "Estudiar CSS",
    "Estudiar JavaScript",
    "Hacer ejercicios"
];
```

Crea las siguientes funciones:

### 1. `mostrarTareas(array)`

Debe mostrar todas las tareas.

Por ejemplo:

```text
1. Estudiar HTML
2. Estudiar CSS
3. Estudiar JavaScript
4. Hacer ejercicios
```

---

### 2. `contarTareas(array)`

Debe devolver:

```text
4
```

---

### 3. `obtenerPrimeraTarea(array)`

Debe devolver:

```text
"Estudiar HTML"
```

---

### 4. `obtenerUltimaTarea(array)`

Debe devolver:

```text
"Hacer ejercicios"
```

Utiliza:

```javascript
array[array.length - 1]
```

---

### 5. `buscarTarea(array, tarea)`

Debe devolver `true` si existe y `false` si no existe.

No utilices `includes()`.

---

### 6. `agregarTarea(array, tarea)`

Debe añadir una nueva tarea utilizando `push()`.

---

### 7. `eliminarUltimaTarea(array)`

Debe eliminar la última tarea utilizando `pop()`.

---

## Objetivo del ejercicio final

No se trata solamente de que el código funcione.

Queremos comprobar que sabemos utilizar juntos:

```text
variables
↓
arrays
↓
índices
↓
length
↓
for
↓
if
↓
funciones
↓
parámetros
↓
return
↓
métodos básicos de arrays
```

---

# 41. Mini resumen

## Arrays

```javascript
const nombres = ["Laura", "Carlos", "María"];
```

Acceder:

```javascript
nombres[0];
```

Último:

```javascript
nombres[nombres.length - 1];
```

Longitud:

```javascript
nombres.length;
```

Modificar:

```javascript
nombres[1] = "Ana";
```

Métodos básicos:

```javascript
push()
pop()
shift()
unshift()
splice()
```

Recorrer:

```javascript
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
```

o:

```javascript
for (const nombre of nombres) {
    console.log(nombre);
}
```

---

## Funciones

Declarar:

```javascript
function sumar(a, b) {
    return a + b;
}
```

Ejecutar:

```javascript
sumar(5, 3);
```

Guardar resultado:

```javascript
const resultado = sumar(5, 3);
```

Función anónima:

```javascript
const sumar = function(a, b) {
    return a + b;
};
```

Arrow function:

```javascript
const sumar = (a, b) => {
    return a + b;
};
```

---

# Idea para recordar

> **Los arrays nos permiten trabajar con colecciones de datos.**
>
> **Las funciones nos permiten reutilizar lógica.**

Y una de las combinaciones más importantes que empezamos a dominar en esta clase es:

```text
ARRAY
  ↓
FUNCIÓN
  ↓
RECORRER + PROCESAR
  ↓
RESULTADO
```

Esto será la base de muchas de las cosas que construiremos más adelante con JavaScript.