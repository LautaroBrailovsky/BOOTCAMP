# typescript 1 — tipos, interfaces, clases y genéricos

## objetivos

Al terminar esta clase deberías poder:

- Explicar qué aporta TypeScript frente a JavaScript.
- Escribir variables, arrays y funciones con tipos.
- Definir objetos con `type` e `interface`.
- Crear clases que implementen interfaces.
- Utilizar `enum` y uniones de tipos.
- Reconocer genéricos, `Promise<T>`, `unknown` y los módulos.

---

## 1. ¿qué es typescript?

TypeScript es JavaScript con un sistema de tipos. Ayuda a detectar determinados errores antes de ejecutar el programa.

En JavaScript:

```js
function sumar(a, b) {
  return a + b;
}

console.log(sumar(2, 3));   // 5
console.log(sumar("2", 3)); // "23"
```

En TypeScript podemos indicar qué tipos esperamos:

```ts
function sumar(a: number, b: number): number {
  return a + b;
}

console.log(sumar(2, 3)); // 5
// sumar("2", 3);         // Error de tipos
```

TypeScript se transforma en JavaScript antes de ejecutarse. Los tipos ayudan durante el desarrollo, pero no validan automáticamente los datos en tiempo de ejecución.

### preparar el entorno

Necesitas Node.js y npm instalados. En una terminal:

```bash
mkdir practica-typescript
cd practica-typescript
npm init -y
npm install --save-dev typescript
npx tsc --init
```

Crea un archivo `index.ts`:

```ts
const mensaje: string = "Hola, TypeScript";
console.log(mensaje);
```

Compila y ejecuta el JavaScript generado:

```bash
npx tsc index.ts
node index.js
```

Si trabajas con la configuración del proyecto, puedes compilar con:

```bash
npx tsc
```

---

## 2. tipos básicos y funciones

### tipos básicos

```ts
let nombre: string = "Ana";
let edad: number = 25;
let activo: boolean = true;

let colores: string[] = ["rojo", "verde", "azul"];
let notas: number[] = [7, 8.5, 9];
```

Si asignas un valor de otro tipo, TypeScript lo señalará:

```ts
let edad: number = 25;
// edad = "veinticinco"; // Error
```

### inferencia de tipos

TypeScript puede deducir el tipo sin que lo escribamos:

```ts
let ciudad = "Valencia"; // string
let cantidad = 10;       // number

// ciudad = 20; // Error
```

No es necesario escribir siempre el tipo si TypeScript ya puede deducirlo.

### funciones tipadas

```ts
function presentar(nombre: string): string {
  return `Hola, ${nombre}`;
}

function mostrarMensaje(mensaje: string): void {
  console.log(mensaje);
}
```

- `nombre: string`: el parámetro debe ser texto.
- `: string`: la función devuelve texto.
- `void`: la función no devuelve un valor útil.

Un parámetro puede ser opcional:

```ts
function saludar(nombre: string, apellido?: string): string {
  if (apellido) {
    return `Hola, ${nombre} ${apellido}`;
  }

  return `Hola, ${nombre}`;
}

console.log(saludar("Ana"));
console.log(saludar("Ana", "López"));
```

### uniones de tipos

Con `|` permitimos más de un tipo:

```ts
function mostrarId(id: string | number): void {
  console.log(`ID: ${id}`);
}

mostrarId(25);
mostrarId("USR-25");
```

Podemos comprobar el tipo antes de realizar una operación específica:

```ts
function mostrarDato(dato: string | number): void {
  if (typeof dato === "string") {
    console.log(dato.toUpperCase());
  } else {
    console.log(dato.toFixed(2));
  }
}
```

### `any` y `unknown`

`any` permite prácticamente cualquier operación y desactiva parte de la comprobación:

```ts
let dato: any = "hola";
dato = 25;
dato = false;
```

`unknown` es más seguro: obliga a comprobar el tipo antes de utilizarlo.

```ts
let dato: unknown = "hola";

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
}
```

**Consejo:** evita `any` cuando puedas expresar el tipo de forma más segura.

---

## 3. objetos y `type`

Podemos definir la estructura que debe tener un objeto:

```ts
type Usuario = {
  nombre: string;
  edad: number;
  email?: string;
};

const usuario: Usuario = {
  nombre: "Lucía",
  edad: 22
};
```

`email?` significa que esa propiedad es opcional.

También podemos limitar un valor a varias opciones:

```ts
type Estado = "pendiente" | "en-proceso" | "completada";

let estado: Estado = "pendiente";
// estado = "cancelada"; // Error
```

`type` crea un nombre para un tipo. No crea una clase ni un objeto.

### `null` y `undefined`

Representan la ausencia de un valor. Cuando un dato puede no existir, debemos comprobarlo antes de utilizarlo.

```ts
function buscarUsuario(id: number): string | undefined {
  if (id === 1) {
    return "Ana";
  }

  return undefined;
}

const resultado = buscarUsuario(2);

if (resultado !== undefined) {
  console.log(resultado.toUpperCase());
}
```

---

## 4. interfaces

Una interfaz describe las propiedades que debe tener un objeto. También puede definir los métodos que esperamos de una clase.

```ts
interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string;
}

const teclado: Producto = {
  nombre: "Teclado",
  precio: 35
};
```

Podemos utilizarla en una función:

```ts
function mostrarProducto(producto: Producto): void {
  console.log(`${producto.nombre}: ${producto.precio} €`);
}

mostrarProducto(teclado);
```

### `type` o `interface`

Para describir un objeto, ambos pueden servir:

```ts
type Persona = {
  nombre: string;
};

interface Cliente {
  nombre: string;
}
```

Como regla práctica inicial:

- `interface`: útil para describir objetos y contratos de clases.
- `type`: útil para alias, uniones y tipos compuestos.

No es una regla absoluta, pero nos sirve para empezar.

---

## 5. clases, modificadores e `implements`

Las clases de TypeScript funcionan de forma parecida a las de JavaScript, pero permiten tipar sus propiedades y métodos.

```ts
class Cuenta {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  ingresar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo += cantidad;
    }
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const cuenta = new Cuenta(100);
cuenta.ingresar(50);

console.log(cuenta.consultarSaldo()); // 150
```

Modificadores habituales:

- `public`: accesible desde fuera de la clase.
- `private`: accesible solo desde dentro de la clase.
- `protected`: accesible desde la clase y sus subclases.
- `readonly`: permite inicializar una propiedad, pero no cambiarla después.

Ejemplo:

```ts
class UsuarioSistema {
  readonly id: number;
  public nombre: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

const usuario = new UsuarioSistema(1, "Lucía");
usuario.nombre = "Lucía Pérez";
// usuario.id = 2; // Error
```

### una clase que implementa una interfaz

La interfaz establece el contrato. La clase implementa el comportamiento.

```ts
interface Reproducible {
  reproducir(): void;
}

class Cancion implements Reproducible {
  reproducir(): void {
    console.log("Suena la canción");
  }
}

class Video implements Reproducible {
  reproducir(): void {
    console.log("Se reproduce el vídeo");
  }
}

const elementos: Reproducible[] = [
  new Cancion(),
  new Video()
];

elementos.forEach(elemento => elemento.reproducir());
```

Ambas clases ofrecen el método `reproducir()`, aunque cada una lo hace de forma diferente. Esto conecta con el polimorfismo que ya conoces de JavaScript.

**Importante:** una interfaz no crea objetos ni valida automáticamente los datos que llegan desde una API. Sirve para comprobar los tipos durante el desarrollo.

---

## 6. `enum` y alternativas

Un `enum` permite dar nombres a un conjunto de opciones:

```ts
enum EstadoPedido {
  Pendiente,
  Enviado,
  Entregado
}

let estado: EstadoPedido = EstadoPedido.Pendiente;

if (estado === EstadoPedido.Pendiente) {
  console.log("El pedido todavía no se ha enviado");
}
```

También existen enums de texto:

```ts
enum Rol {
  Admin = "ADMIN",
  Usuario = "USUARIO",
  Invitado = "INVITADO"
}

const rolActual: Rol = Rol.Usuario;
```

Una alternativa es utilizar una unión de literales:

```ts
type EstadoTarea = "pendiente" | "en-proceso" | "completada";

let estadoTarea: EstadoTarea = "pendiente";
```

Para muchos casos sencillos, las uniones de literales son suficientes. No es obligatorio utilizar `enum`.

---

## 7. otros conceptos que conviene reconocer

### genéricos

Los genéricos permiten reutilizar código con distintos tipos sin perder la información del tipo utilizado.

```ts
function primero<T>(elementos: T[]): T | undefined {
  return elementos[0];
}

const numero = primero([10, 20, 30]);
const nombre = primero(["Ana", "Luis"]);
```

En el primer caso, el resultado será `number | undefined`; en el segundo, `string | undefined`.

Piensa en `T` como un tipo que se decide al llamar a la función. Por ahora basta con reconocer este patrón.

### promesas y `async`

Podemos indicar qué tipo de valor devuelve una promesa:

```ts
async function obtenerNombre(): Promise<string> {
  return "Ana";
}

obtenerNombre().then(nombre => console.log(nombre));
```

`Promise<string>` indica que la promesa se resolverá con un texto.

### módulos: `export` e `import`

Sirven para organizar el código en diferentes archivos.

Archivo `usuario.ts`:

```ts
export interface Usuario {
  nombre: string;
}
```

Archivo `app.ts`:

```ts
import type { Usuario } from "./usuario";

const usuario: Usuario = {
  nombre: "Ana"
};

console.log(usuario.nombre);
```

`import type` indica que importamos un tipo. La configuración del proyecto puede influir en cómo se resuelven los módulos.

### `tsconfig.json`

Es el archivo de configuración del compilador. Se genera con:

```bash
npx tsc --init
```

No necesitamos estudiar todas sus opciones ahora. Conviene reconocer `strict`, que activa un conjunto de comprobaciones más estrictas y ayuda a detectar posibles errores.

---

## 8. ejercicios prácticos finales

Intenta resolverlos antes de buscar una solución. Compila el código para comprobar tus respuestas.

### ejercicio 1 — tipos y funciones

Crea una función `calcularDescuento` que reciba:

- `precio`, un número.
- `porcentaje`, un número.

Debe devolver el precio con el descuento aplicado.

Prueba con `100` y `20`. El resultado esperado es `80`.

**Pista:** indica los tipos de los parámetros y del valor devuelto.

### ejercicio 2 — objetos y `type`

Crea un tipo `Libro` con estas propiedades:

- `titulo`: texto obligatorio.
- `autor`: texto obligatorio.
- `paginas`: número obligatorio.
- `disponible`: booleano opcional.

Crea dos libros y una función `mostrarLibro` que reciba un `Libro` y muestre su título y autor.

Después, intenta asignar un número a `titulo`. Observa el error.

### ejercicio 3 — interfaces y clases

Crea una interfaz `Notificable` con un método:

```ts
enviar(mensaje: string): void;
```

Crea dos clases que implementen la interfaz:

- `NotificacionEmail`
- `NotificacionSMS`

Cada clase debe mostrar un mensaje diferente por consola.

Crea un array de elementos `Notificable` y recórrelo llamando a `enviar("Tu pedido está listo")`.

### ejercicio 4 — estados

Representa los estados de una tarea: pendiente, en curso y completada.

Puedes utilizar un `enum` o un `type` con una unión de literales.

Crea una función que reciba el estado y muestre un mensaje adecuado para cada caso.

### ejercicio 5 — mini proyecto: gestor de tareas

Crea un pequeño programa que incluya:

1. Un tipo o interfaz `Tarea` con `id`, `titulo` y `estado`.
2. Un tipo para representar los estados posibles.
3. Una función `crearTarea` que reciba los datos necesarios y devuelva una tarea.
4. Una función `mostrarTarea` que muestre su información.
5. Un array de tareas y un recorrido que las muestre todas.

No necesitas navegador, base de datos ni servidor. El objetivo es practicar los tipos de TypeScript.

**Reto opcional:** crea una interfaz `Identificable` con la propiedad `id: number` y haz que `Tarea` la extienda.

---


---

## 8. tipos utilitarios: `partial`, `pick`, `omit` y otros

TypeScript incluye tipos que permiten crear nuevas variantes de un tipo existente sin repetir todas sus propiedades. Se conocen como **tipos utilitarios** (*utility types*).

Partimos de este ejemplo:

```ts
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
}
```

### `partial<t>`: todas las propiedades son opcionales

Útil, por ejemplo, cuando queremos actualizar solo algunos datos de un usuario.

```ts
const cambios: Partial<Usuario> = {
  email: "nuevo@example.com"
};
```

No es necesario incluir `id`, `nombre` ni `edad`: todas las propiedades pasan a ser opcionales.

### `pick<t, k>`: seleccionar algunas propiedades

Permite crear un tipo que solo contiene las propiedades que nos interesan.

```ts
type UsuarioResumen = Pick<Usuario, "id" | "nombre">;

const resumen: UsuarioResumen = {
  id: 1,
  nombre: "Ana"
};
```

`UsuarioResumen` solo necesita `id` y `nombre`.

### `omit<t, k>`: excluir algunas propiedades

Hace lo contrario de `Pick`: crea un tipo con todas las propiedades excepto las indicadas.

```ts
type UsuarioSinEmail = Omit<Usuario, "email">;

const usuarioPublico: UsuarioSinEmail = {
  id: 1,
  nombre: "Ana",
  edad: 25
};
```

### `required<t>`: todas las propiedades son obligatorias

Convierte las propiedades opcionales en obligatorias.

```ts
interface Configuracion {
  tema?: string;
  idioma?: string;
}

const configuracion: Required<Configuracion> = {
  tema: "oscuro",
  idioma: "es"
};
```

### `readonly<t>`: propiedades de solo lectura

Crea una versión de un tipo cuyas propiedades no se pueden reasignar.

```ts
const usuarioLectura: Readonly<Usuario> = {
  id: 1,
  nombre: "Ana",
  email: "ana@example.com",
  edad: 25
};

// usuarioLectura.nombre = "Lucía"; // Error
```

### `record<k, v>`: objeto con claves y valores definidos

Sirve para describir un objeto cuyas claves y valores siguen unos tipos concretos.

```ts
type Puntuaciones = Record<string, number>;

const puntuaciones: Puntuaciones = {
  Ana: 8,
  Luis: 9,
  Marta: 10
};
```

En este ejemplo, las claves son textos y los valores son números.

### resumen rápido

| Tipo utilitario | ¿Qué hace? |
|---|---|
| `Partial<T>` | Hace opcionales todas las propiedades. |
| `Pick<T, K>` | Selecciona las propiedades indicadas. |
| `Omit<T, K>` | Excluye las propiedades indicadas. |
| `Required<T>` | Hace obligatorias todas las propiedades. |
| `Readonly<T>` | Marca las propiedades como solo lectura. |
| `Record<K, V>` | Crea un tipo de objeto con claves y valores definidos. |

Estos tipos no modifican el objeto original ni validan datos en tiempo de ejecución. Sirven para describir tipos durante el desarrollo.

---

## 9. genéricos, tipos utilitarios y decoradores no son lo mismo

Es fácil confundir estos conceptos porque todos forman parte de TypeScript, pero cumplen funciones diferentes:

- **Genéricos**, como `<T>`: permiten escribir funciones, clases o tipos reutilizables que trabajan con distintos tipos.
- **Tipos utilitarios**, como `Partial<T>` y `Pick<T, K>`: permiten construir un tipo nuevo a partir de otro.
- **Decoradores**: son una característica avanzada que permite añadir metadatos o modificar ciertos aspectos de clases y sus miembros. Se escriben con `@` y se utilizan en determinados patrones y frameworks.

Ejemplo de la sintaxis de un decorador:

```ts
function RegistrarClase(objetivo: Function) {
  console.log(`Clase registrada: ${objetivo.name}`);
}

@RegistrarClase
class ServicioUsuarios {
}
```

Este ejemplo sirve para reconocer la sintaxis; la configuración y las reglas de los decoradores dependen de la versión de TypeScript y de cómo esté configurado el proyecto. No es necesario aprender a crearlos todavía. Más adelante aparecerán en el contexto de frameworks como NestJS.

**Importante:** `Partial`, `Pick` y los demás ejemplos de esta sección son **tipos utilitarios, no decoradores**.


## 10. errores habituales

- Utilizar `String` en lugar del tipo primitivo `string`.
- Pensar que TypeScript valida automáticamente los datos recibidos desde una API.
- Utilizar `any` para evitar todos los errores.
- Confundir una interfaz con una clase.
- Olvidar compilar el `.ts` antes de ejecutar el JavaScript generado.
- Escribir todos los tipos manualmente, aunque TypeScript pueda deducirlos.

## recursos

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [Tipos básicos](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

**Idea final:** TypeScript no sustituye lo que sabes de JavaScript. Añade información sobre los tipos para detectar errores antes y organizar mejor proyectos que crecerán, como los que construiremos en backend.