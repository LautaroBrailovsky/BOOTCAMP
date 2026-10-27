# JavaScript avanzado — Programación orientada a objetos (POO)

**Duración orientativa:** 1 h 30 min  
**Prioridad:** alta

## Objetivos

Al terminar, deberías poder:

- Entender para qué sirve la programación orientada a objetos.
- Diferenciar una clase de un objeto.
- Crear clases con propiedades, constructor y métodos.
- Crear objetos a partir de una clase.
- Entender la idea básica de herencia.
- Reconocer conceptos como encapsulación, abstracción y polimorfismo, sin profundizar todavía en ellos.

## 1. Ya conocemos los objetos

Hemos utilizado objetos en JavaScript para agrupar información:

```js
const persona = {
  nombre: "Ada",
  edad: 28,
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona.saludar();
```

Este objeto agrupa **datos** (`nombre`, `edad`) y un **comportamiento** (`saludar`).

¿Y si queremos crear cien personas con una estructura parecida? Podríamos escribir cien objetos a mano, pero sería repetitivo. Para eso podemos utilizar una clase.

## 2. ¿Qué es la programación orientada a objetos?

La **programación orientada a objetos (POO)** es una forma de organizar un programa alrededor de objetos que contienen datos y comportamientos.

Una comparación sencilla:

- **Clase:** el molde o la plantilla.
- **Objeto:** una instancia concreta creada a partir de ese molde.
- **Propiedad:** un dato del objeto.
- **Método:** una función asociada al objeto.
- **Constructor:** el método que prepara el objeto cuando lo creamos.
- **`this`:** hace referencia al objeto con el que estamos trabajando en ese método.

Una clase no es un objeto concreto: describe cómo serán los objetos que creemos a partir de ella.

## 3. Nuestra primera clase

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
}

const persona1 = new Persona("Ada", 28);
const persona2 = new Persona("Luis", 22);

persona1.saludar();
persona2.saludar();
```

### Leamos el código

1. `class Persona` define el molde.
2. `constructor(nombre, edad)` recibe los datos iniciales.
3. `this.nombre = nombre` guarda el nombre en el objeto que se está creando.
4. `new Persona(...)` crea una nueva instancia.
5. `persona1` y `persona2` son objetos distintos creados con la misma clase.
6. `saludar()` es un método que pueden utilizar esas instancias.

Prueba a cambiar los datos o a crear una tercera persona.

## 4. Propiedades y métodos

Las **propiedades** describen al objeto; los **métodos** representan acciones que puede realizar.

```js
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarInfo() {
    console.log(`${this.nombre}: ${this.precio} €`);
  }

  aplicarDescuento(porcentaje) {
    this.precio = this.precio * (1 - porcentaje / 100);
  }
}

const teclado = new Producto("Teclado", 50);
teclado.mostrarInfo();

teclado.aplicarDescuento(10);
teclado.mostrarInfo(); // Teclado: 45 €
```

El método `aplicarDescuento()` modifica el estado del objeto: después de ejecutarlo, su precio ha cambiado.

## 5. Los conceptos importantes de la POO

No hace falta dominarlos todos hoy. Lo importante es reconocerlos.

- **Encapsulación:** agrupar los datos y las operaciones relacionadas dentro de un objeto. También puede servir para controlar cómo se accede a ciertos datos.
- **Abstracción:** quedarse con las características relevantes para el problema. Para representar un coche en una aplicación de alquiler quizá importen la matrícula y el modelo, pero no cada pieza del motor.
- **Herencia:** crear una clase a partir de otra y reutilizar parte de su comportamiento.
- **Polimorfismo:** poder utilizar una misma operación con objetos diferentes, aunque cada uno la realice a su manera.

## 6. Herencia con `extends` y `super`

Imaginemos que estudiantes y profesores comparten nombre y correo. Podemos poner esos datos comunes en una clase `Persona`.

```js
class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  presentarse() {
    console.log(`Soy ${this.nombre}`);
  }
}

class Estudiante extends Persona {
  constructor(nombre, email, curso) {
    super(nombre, email);
    this.curso = curso;
  }

  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.curso}`);
  }
}

const estudiante = new Estudiante("Nora", "nora@example.com", "JavaScript");

estudiante.presentarse();
estudiante.estudiar();
```

- `extends Persona` indica que `Estudiante` hereda de `Persona`.
- `super(nombre, email)` llama al constructor de la clase padre.
- El estudiante tiene `nombre` y `email` heredados, además de su propiedad `curso` y su método `estudiar()`.

**No hay que utilizar herencia para todo.** Si dos clases no tienen una relación clara, forzar una herencia puede complicar el diseño.

## 7. Otras características que conviene reconocer

### Métodos estáticos

Pertenecen a la clase y se llaman sin crear una instancia. Pueden ser útiles para operaciones relacionadas con la clase en general.

```js
class Calculadora {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Calculadora.sumar(2, 3)); // 5
```

### Getters, setters y campos privados

Son herramientas para controlar el acceso a los datos de un objeto. No necesitamos profundizar ahora, pero conviene reconocer su sintaxis.

```js
class Cuenta {
  #saldo = 0;

  ingresar(cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad;
    }
  }

  get saldo() {
    return this.#saldo;
  }
}

const cuenta = new Cuenta();
cuenta.ingresar(50);

console.log(cuenta.saldo); // 50
// console.log(cuenta.#saldo); // No se puede acceder desde fuera
```

El símbolo `#` declara un campo privado. Desde fuera de la clase no podemos leerlo directamente.

## 8. JavaScript y las clases

JavaScript utiliza un sistema de objetos basado en **prototipos**. La sintaxis `class`, incorporada en ES6, ofrece una forma más familiar de trabajar con clases, pero no convierte JavaScript en un lenguaje idéntico a Java o C#.

Para este curso, utiliza primero la sintaxis `class`, `constructor`, `new`, `extends` y `super`. No hace falta estudiar ahora en detalle los prototipos antiguos, `Object.create()` o todas las variantes históricas de creación de objetos.

## Práctica guiada

### Ejercicio 1 — Producto

Crea una clase `Producto` con:

- Propiedades `nombre` y `precio`.
- Método `mostrarInfo()` que muestre el nombre y el precio.
- Dos productos distintos creados con `new`.

### Ejercicio 2 — Cuenta bancaria

Crea una clase `CuentaBancaria` con:

- Propiedad `titular`.
- Propiedad `saldo`, que comienza en `0`.
- Método `ingresar(cantidad)`.
- Método `consultarSaldo()`.

Como mejora, evita que se pueda ingresar una cantidad negativa.

### Ejercicio 3 — Estudiante y profesor

Crea una clase `Persona` y dos clases que hereden de ella:

- `Estudiante`, con una propiedad `curso` y un método `estudiar()`.
- `Profesor`, con una propiedad `asignatura` y un método `impartirClase()`.

Prueba que ambas clases pueden utilizar el método común de `Persona`.

### Reto opcional

Añade un método `static` a una clase o utiliza un campo privado para proteger un dato.

## ¿Qué no vamos a estudiar en profundidad hoy?

El material original también incluye varias formas antiguas de crear objetos mediante funciones constructoras y prototipos, métodos privados mediante cierres, `Object.create()`, `isPrototypeOf()`, `constructor`, `toString()` y varios ejemplos de herencia. Son útiles para reconocer código antiguo, pero **no son prioritarios para una primera introducción práctica**.

## Ideas clave

- Una clase es una plantilla; un objeto es una instancia.
- Las propiedades guardan datos y los métodos definen comportamientos.
- `constructor` prepara el objeto y `new` crea una instancia.
- `this` permite acceder a las propiedades y métodos del objeto actual.
- `extends` y `super` permiten establecer una herencia.
- La POO ayuda a organizar el código, pero no todo necesita convertirse en una clase.

## Documentación

- [MDN — Introducción a los objetos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects)
- [MDN — Clases en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [MDN — Herencia con clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_classes#herencia)