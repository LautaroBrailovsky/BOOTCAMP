

//1.
let arrayVacio = [];
//2.
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3.
let arrayNumerosPares = [0, 2, 4, 6, 8];
//4.
let arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];
//5.
function suma(a, b) {
  return a + b;
}

//6.
function potenciacion(a, b) {
  return a ^ b;
}

//7.
function separarPalabras(texto) {
  return texto.split(" ");
}

//8.
function repetirString(palabra, numeroRepeticiones) {
  let nuevaPalabra = "";
  for (i = 1; i <= numeroRepeticiones; i++) {
    nuevaPalabra += palabra;
  }
  return nuevaPalabra;
}

//9.
function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// 10.
function ordenarArray(array) {
  return array.sort((a, b) => a - b);
}

const arrayDesordenado = [5, 2, 9, 1, 5, 6];
console.log("Array ordenado: " + ordenarArray(arrayDesordenado));

// 11.-
function obtenerPares(array) {
  const nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    const numeroActual = array[i];
    if (numeroActual % 2 === 0) {
      nuevoArray.push(numeroActual);
    }
  }
  return nuevoArray;
}

const arrayNumeros2 = [1, 2, 3, 4, 5, 6];
console.log("Elementos pares: " + obtenerPares(arrayNumeros2));

// 12.-
function pintarArray(array) {
  let resultado = "[";
  for (let i = 0; i < array.length; i++) {
    resultado = resultado + array[i];
    if (i < array.length - 1) {
      resultado += ", ";
    }
  }
  resultado = resultado + "]";
  return resultado;
}

const arrayEjemplo = [0, 1, 2];
console.log("Array pintado: " + pintarArray(arrayEjemplo));

// 13.-
function arrayMapi(array, callback) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(callback(array[i]));
  }
  return resultado;
}

const arrayEjemplo2 = [1, 2, 3, 4];

function duplicar(num) {
  return num * 2;
}

console.log("Array mapeado: " + arrayMapi(arrayEjemplo2, duplicar));

// 14.-
function eliminarDuplicados(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    console.log(
      `i: ${i}, array[i]: ${array[i]}, resultado: [${resultado}], noEstaIncluido: ${resultado.includes(array[i]) === false} `,
    );
    if (resultado.includes(array[i]) === false) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

const arrayConDuplicados = [1, 2, 3, 2, 4, 1, 5];
console.log("Array sin duplicados: " + eliminarDuplicados(arrayConDuplicados));