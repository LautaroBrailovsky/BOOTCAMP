# Anexo breve — Recursividad en JavaScript

La **recursividad** consiste en que una función se llama a sí misma para resolver un problema en pasos más pequeños. Necesita dos elementos:

- **Caso base:** condición que detiene las llamadas.
- **Llamada recursiva:** la función se vuelve a llamar con un problema más pequeño.

```js
function sumatorio(n) {
  if (n === 0) {
    return 0; // Caso base
  }

  return n + sumatorio(n - 1);
}

console.log(sumatorio(5)); // 15
```

La función calcula `5 + 4 + 3 + 2 + 1 + 0`. Sin caso base, la función podría llamarse indefinidamente hasta producir un error de desbordamiento de pila.

Para un sumatorio sencillo, un bucle suele ser más fácil de entender. La recursividad puede ser útil en problemas que se dividen naturalmente en subproblemas.

**Ejercicio opcional:** calcula el factorial de un número con una función recursiva y señala cuál es el caso base.

Recursos:
- [MDN — Recursividad](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
- [JavaScript.info — Recursión y pila](https://javascript.info/recursion)