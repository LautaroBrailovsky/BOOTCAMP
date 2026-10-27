# Clase 3 — Objetos y métodos

## Objetivos

Al terminar esta clase deberías poder:

- Crear objetos en JavaScript.
- Acceder a sus propiedades.
- Crear y utilizar métodos dentro de un objeto.
- Modificar y eliminar propiedades.
- Utilizar métodos habituales de strings.
- Utilizar métodos habituales de numbers.
- Utilizar métodos básicos de arrays.

---

# 1. Objetos

Los objetos nos permiten guardar varios datos relacionados dentro de una misma variable.

Los datos se guardan como **clave: valor**.

```javascript
let persona = {
    name: "Ana",
    age: 25,
    city: "Valencia"
};
```

Un objeto puede tener diferentes tipos de valores:

```javascript
let person = {
    name: "Ana",
    age: 25,
    active: true
};
```

También puede contener funciones. Cuando una función pertenece a un objeto, hablamos de un **método**.

## 1.1 Acceder a las propiedades

Podemos acceder a una propiedad utilizando un punto:

```javascript
console.log(person.name);
console.log(person.age);
```

También podemos utilizar corchetes:

```javascript
console.log(person["name"]);
console.log(person["age"]);
```

Las dos formas permiten acceder a la misma propiedad.

### Ejemplo

```javascript
let actress = {
    name: "Angelina",
    lastName: "Jolie",
    age: 45,
    childs: true
};

console.log(actress.name);
console.log(actress["age"]);
```

## Ejercicio 1 — Crear un objeto

Crea un objeto llamado `student` con las propiedades `name`, `age`, `course` y `city`.

Después:

1. Muestra por consola el nombre.
2. Muestra la edad.
3. Accede a `course` utilizando corchetes.
4. Muestra la ciudad.

**Reto:** añade una propiedad `active` con valor `true` y muéstrala por consola.

---

# 2. Métodos dentro de objetos

Un objeto también puede tener funciones.

Cuando una función está dentro de un objeto, la llamamos **método**.

```javascript
let company = {
    name: "YouTube",
    employees: 2000,

    presentation: function () {
        return "Welcome to " + this.name;
    }
};

console.log(company.presentation());
```

Para acceder a una propiedad del propio objeto desde su método utilizamos `this`.

```javascript
let company = {
    name: "YouTube",
    employees: 2000,

    presentation: function () {
        return (
            "Welcome to " +
            this.name +
            ". We've got " +
            this.employees +
            " employees"
        );
    }
};

console.log(company.presentation());
```

## Ejercicio 2 — Método de un objeto

Crea un objeto `user` con `name` y `age`.

Añade un método `greet()` que devuelva:

```text
Hola, soy Ana y tengo 25 años
```

Utiliza `this.name` y `this.age`.

Después ejecuta:

```javascript
console.log(user.greet());
```

**Reto:** añade `city` y modifica el método para incluir también la ciudad.

---

# 3. Modificar y eliminar propiedades

Podemos modificar una propiedad directamente:

```javascript
let person = {
    name: "Ana",
    age: 25
};

person.age = 26;
person.city = "Valencia";

console.log(person);
```

Para eliminar una propiedad utilizamos `delete`:

```javascript
delete person.age;
```

## Ejercicio 3 — Modificar un objeto

Crea:

```javascript
let product = {
    name: "Laptop",
    price: 800,
    stock: 10
};
```

Después:

1. Cambia el precio a `750`.
2. Añade una propiedad `brand`.
3. Elimina `stock`.
4. Muestra el objeto completo.

---

# 4. Métodos de strings

Los strings tienen propiedades y métodos que nos permiten trabajar con su contenido.

## 4.1 `length`

```javascript
let information = "You shall not pass";

console.log(information.length);
```

## Ejercicio 4

Crea:

```javascript
let message = "JavaScript es divertido";
```

Muestra su longitud e indica cuántos caracteres tiene.

---

## 4.2 `indexOf()`

Busca un texto y devuelve la posición donde aparece.

```javascript
let information = "You shall not pass";

console.log(information.indexOf("shall"));
```

Si no encuentra el texto, devuelve `-1`.

## Ejercicio 5

Utiliza:

```javascript
let text = "Estoy aprendiendo JavaScript";
```

Comprueba la posición de `"JavaScript"` y de `"Python"`.

---

## 4.3 `lastIndexOf()`

Busca la última aparición de un texto.

```javascript
let text = "JavaScript es genial y JavaScript es divertido";

console.log(text.lastIndexOf("JavaScript"));
```

## Ejercicio 6

Busca la primera y la última aparición de `"JavaScript"` utilizando `indexOf()` y `lastIndexOf()`.

---

## 4.4 `slice()`

Obtiene una parte de un string.

```javascript
let text = "JavaScript";

console.log(text.slice(0, 4));
console.log(text.slice(4));
```

También admite posiciones negativas.

```javascript
console.log(text.slice(-3));
```

## Ejercicio 7

Obtén mediante `slice()`:

1. `"Java"`
2. `"Script"`
3. Los últimos 3 caracteres.

---

## 4.5 `substring()`

Es parecido a `slice()`, pero no permite posiciones negativas.

```javascript
let text = "JavaScript";

console.log(text.substring(0, 4));
```

## Ejercicio 8

Obtén `"Java"` y `"Script"` utilizando `substring()`.

Después prueba qué ocurre con un número negativo.

---

## 4.6 `replace()`

Permite sustituir una coincidencia por otro texto.

```javascript
let text = "Me gusta JavaScript";

let newText = text.replace("JavaScript", "HTML");

console.log(newText);
```

## Ejercicio 9

Cambia `"JavaScript"` por `"HTML"` y guarda el resultado en una nueva variable.

---

## 4.7 `toLowerCase()`

Convierte un string a minúsculas.

```javascript
let text = "Hola MUNDO";

console.log(text.toLowerCase());
```

También podemos utilizar `toUpperCase()` para convertirlo a mayúsculas.

## Ejercicio 10

Crea un texto con mayúsculas y minúsculas y muestra:

1. El original.
2. En minúsculas.
3. En mayúsculas.

---

## 4.8 `concat()`

Permite unir strings.

```javascript
let question = "¿Cómo estás?";
let information = "Estoy aprendiendo JavaScript.";

let result = question.concat(" ", information);

console.log(result);
```

## Ejercicio 11

Con:

```javascript
let name = "Ana";
let city = "Valencia";
```

obtén:

```text
Ana vive en Valencia
```

---

# 5. Métodos de numbers

## 5.1 `toString()`

Convierte un número en un string.

```javascript
let number = 2354;

let numberToString = number.toString();

console.log(numberToString);
console.log(typeof numberToString);
```

## Ejercicio 12

Crea un número, conviértelo a string y comprueba su tipo con `typeof`.

---

## 5.2 `toFixed()`

Permite indicar cuántos decimales queremos mostrar.

```javascript
let number = 23.344054;

console.log(number.toFixed(2));
console.log(number.toFixed(4));
```

## Ejercicio 13

Utiliza `19.9999` y muéstralo con 0, 2 y 3 decimales.

---

## 5.3 `Number()`

Permite convertir un valor a número.

```javascript
console.log(Number("20"));
console.log(Number("304.23"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("hola"));
```

Si no puede realizar la conversión, obtenemos `NaN`.

## Ejercicio 14

Prueba a convertir:

```text
"25"
"25.5"
"hola"
true
false
```

---

## 5.4 `parseInt()`

Convierte un texto en un número entero.

```javascript
console.log(parseInt("2040"));
console.log(parseInt("304.23"));
```

## Ejercicio 15

Predice y después comprueba el resultado de:

```javascript
parseInt("100");
parseInt("25.75");
parseInt("20 45");
parseInt("hola 30");
```

---

## 5.5 `parseFloat()`

Convierte un texto en un número manteniendo los decimales.

```javascript
console.log(parseFloat("2040"));
console.log(parseFloat("304.23"));
```

## Ejercicio 16

Prueba:

```javascript
parseFloat("20.50");
parseFloat("10.99");
parseFloat("hola 30");
```

Compara los resultados con `parseInt()`.

---

# 6. Métodos de arrays

Partimos de:

```javascript
let food = ["Fish", "Meat", "Cheese"];
```

## 6.1 `push()`

Añade un elemento al final.

```javascript
food.push("Tomato");

console.log(food);
```

## Ejercicio 17

Crea un array de tres películas y añade dos nuevas utilizando `push()`.

---

## 6.2 `pop()`

Elimina el último elemento.

```javascript
food.pop();

console.log(food);
```

## Ejercicio 18

Utiliza el array anterior:

1. Elimina la última película.
2. Muestra el array.
3. Añade otra película con `push()`.

---

## 6.3 `unshift()`

Añade un elemento al principio.

```javascript
food.unshift("Pizza");

console.log(food);
```

## Ejercicio 19

Crea un array de ciudades y añade una ciudad al principio.

---

## 6.4 `shift()`

Elimina el primer elemento.

```javascript
food.shift();

console.log(food);
```

## Ejercicio 20

Utiliza el array de ciudades:

1. Añade una ciudad al principio.
2. Elimina la primera ciudad.
3. Muestra el resultado.

---

## 6.5 `splice()`

Permite eliminar elementos indicando la posición inicial y el número de elementos.

```javascript
let food = ["Fish", "Meat", "Cheese", "Tomato"];

food.splice(1, 2);

console.log(food);
```

## Ejercicio 21

Utiliza:

```javascript
let colors = ["red", "blue", "green", "yellow", "black"];
```

Elimina `"green"` utilizando `splice()`.

Después intenta eliminar `"blue"` y `"yellow"`.

---

## 6.6 `slice()`

Crea un nuevo array a partir de una parte del original.

```javascript
let brands = ["Nike", "Adidas", "Puma", "Reebok"];

let newBrands = brands.slice(2);

console.log(newBrands);
```

El array original no se modifica.

## Ejercicio 22

Utiliza:

```javascript
let numbers = [10, 20, 30, 40, 50];
```

Crea nuevos arrays con:

1. Los tres primeros números.
2. Los dos últimos números.
3. Los números desde la posición `1`.

---

## 6.7 `concat()`

Une dos arrays y devuelve uno nuevo.

```javascript
let frontend = ["HTML", "CSS"];
let backend = ["Node.js", "Express"];

let technologies = frontend.concat(backend);

console.log(technologies);
```

## Ejercicio 23

Crea dos arrays de tecnologías frontend y backend y únelos en un nuevo array llamado `technologies`.

---

## 6.8 `includes()`

Comprueba si un elemento existe en un array.

Devuelve `true` o `false`.

```javascript
let brands = ["Nike", "Adidas", "Puma", "Reebok"];

console.log(brands.includes("Puma"));
console.log(brands.includes("Apple"));
```

## Ejercicio 24

Crea un array de lenguajes de programación y comprueba si contiene:

- JavaScript
- Python
- Java

---

## 6.9 `toString()` y `join()`

`toString()` convierte los elementos del array en un string separado por comas.

```javascript
let brands = ["Nike", "Adidas", "Puma"];

console.log(brands.toString());
```

Con `join()` podemos elegir el separador:

```javascript
console.log(brands.join(", "));
console.log(brands.join(" & "));
```

## Ejercicio 25

Crea un array con tres nombres y prueba:

```javascript
names.toString();
names.join(", ");
names.join(" - ");
names.join(" y ");
```

Observa las diferencias.

---

# 7. Práctica guiada — Ficha de usuario

Vamos a combinar varios conceptos.

Crea:

```javascript
let user = {
    name: "Ana",
    age: 25,
    city: "Valencia",
    hobbies: ["programming", "music", "travel"]
};
```

### Paso 1

Muestra por consola el nombre, la edad y la ciudad.

### Paso 2

Añade un nuevo hobby utilizando `push()`.

### Paso 3

Comprueba si tiene `"music"` utilizando `includes()`.

### Paso 4

Crea un método `presentation()` que devuelva una frase utilizando `this`.

### Paso 5

Modifica la edad.

### Paso 6

Elimina una propiedad que ya no necesites.

---

# 8. Ejercicio final — Perfil de usuario

Crea un objeto que represente el perfil de un usuario.

Debe contener como mínimo:

- `name`
- `age`
- `city`
- `email`
- `hobbies`

`hobbies` debe ser un array con varios elementos.

Además, crea dos métodos:

### `presentation()`

Debe devolver una frase presentando al usuario.

### `hasHobby(hobby)`

Debe recibir un hobby y devolver `true` o `false` dependiendo de si el usuario lo tiene.

Ejemplo:

```javascript
user.hasHobby("music");
```

Después:

1. Añade un nuevo hobby.
2. Elimina el último hobby.
3. Comprueba si tiene un hobby concreto.
4. Cambia la ciudad.
5. Muestra el número de caracteres del nombre utilizando `length`.
6. Convierte el nombre a mayúsculas utilizando `toUpperCase()`.
7. Muestra todos los hobbies utilizando `join()`.

---

# 9. Reto opcional — Catálogo de productos

Crea un pequeño catálogo utilizando objetos y arrays:

```javascript
let products = [
    {
        name: "Laptop",
        price: 900,
        category: "technology"
    },
    {
        name: "Mouse",
        price: 25,
        category: "technology"
    },
    {
        name: "Keyboard",
        price: 50,
        category: "technology"
    }
];
```

Intenta:

1. Añadir un producto.
2. Eliminar el último producto.
3. Comprobar si existe un producto concreto.
4. Obtener una parte del array utilizando `slice()`.
5. Mostrar los nombres de los productos.
6. Crear un método dentro de un objeto producto que muestre información sobre él.

---

# Resumen

## Objetos

```javascript
let user = {
    name: "Ana",
    age: 25
};

user.name;
user["name"];

user.age = 26;

delete user.age;
```

## Strings

```javascript
length
indexOf()
lastIndexOf()
slice()
substring()
replace()
toLowerCase()
toUpperCase()
concat()
```

## Numbers

```javascript
toString()
toFixed()
Number()
parseInt()
parseFloat()
```

## Arrays

```javascript
push()
pop()
unshift()
shift()
splice()
slice()
concat()
includes()
toString()
join()
```

## Recursos

- W3Schools — Objects: https://www.w3schools.com/js/js_objects.asp
- MDN — Introducción a objetos: https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics
- MDN — Trabajando con objetos: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects
- W3Schools — String Methods: https://www.w3schools.com/js/js_string_methods.asp
- W3Schools — Number Methods: https://www.w3schools.com/js/js_number_methods.asp
- W3Schools — Array Methods: https://www.w3schools.com/js/js_array_methods.asp