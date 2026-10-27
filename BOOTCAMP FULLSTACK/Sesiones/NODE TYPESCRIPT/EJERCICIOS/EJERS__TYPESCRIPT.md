//Ejercicio 1
function calcularDescuento(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return precio - descuento;
}

console.log(calcularDescuento(100, 20));

//Ejercicio 2
type Libro = {
  titulo: string;
  autor: string;
  paginas: number;
  disponible?: boolean;
};

const libro1: Libro = {
  titulo: "El Principito",
  autor: "Antoine de Saint-Exupéry",
  paginas: 96,
  disponible: true,
};

const libro2: Libro = {
  titulo: "1984",
  autor: "George Orwell",
  paginas: 328,
};

function mostrarLibro(libro: Libro): void {
  console.log(`${libro.titulo} - ${libro.autor}`);
}

mostrarLibro(libro1);
mostrarLibro(libro2);

//Ejercicio 3
interface Notificable {
  enviar(mensaje: string): void;
}

class NotificacionEmail implements Notificable {
  enviar(mensaje: string): void {
    console.log(`Email enviado por Kevin: ${mensaje}`);
  }
}

class NotificacionSMS implements Notificable {
  enviar(mensaje: string): void {
    console.log(`SMS enviado por Kevin: ${mensaje}`);
  }
}

const notificaciones: Notificable[] = [
  new NotificacionEmail(),
  new NotificacionSMS(),
];

notificaciones.forEach((notificacion) => {
  notificacion.enviar("Tu pedido está listo");
});
//igual que el forEach, pero con un bucle for
for (const notificacion of notificaciones) {
  notificacion.enviar("Tu pedido está listo");
}

//Ejercicio 4
//type EstadoTarea = "pendiente" | "en_curso" | "completada";

enum EstadoTarea {
  pendiente = "pendiente",
  en_curso = "en_curso",
  completada = "completada",
}

function mostrarEstado(estado: EstadoTarea): void {
  switch (estado) {
    case EstadoTarea.pendiente:
      console.log("La tarea está pendiente");
      break;

    case EstadoTarea.en_curso:
      console.log("La tarea está en curso");
      break;

    case EstadoTarea.completada:
      console.log("La tarea está completada");
      break;
  }
}

mostrarEstado(EstadoTarea.pendiente);
mostrarEstado(EstadoTarea.en_curso);
mostrarEstado(EstadoTarea.completada);

//Ejercicio 5
interface Identificable {
  id: number;
}

interface Tarea extends Identificable {
  titulo: string;
  estado: EstadoTarea;
}

function crearTarea(id: number, titulo: string, estado: EstadoTarea): Tarea {
  return {
    id,
    titulo,
    estado,
  } as Tarea;
}

function mostrarTarea(tarea: Tarea): void {
  console.log(
    `ID: ${tarea.id} | Título: ${tarea.titulo} | Estado: ${tarea.estado}`,
  );
}

const tareas: Tarea[] = [
  crearTarea(1, "Aprender a tocar piano", EstadoTarea.pendiente),
  crearTarea(2, "Aprender a tocar guitarra", EstadoTarea.en_curso),
  crearTarea(3, "Armar cubo de rubik", EstadoTarea.completada),
];

tareas.forEach((tarea) => mostrarTarea(tarea));

//igual que el forEach, pero con un bucle for
for (const tarea of tareas) {
  mostrarTarea(tarea);
}