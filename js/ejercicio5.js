// Dado un array de números [15, 42, 3, 18, 90, 67, 29], escribe un programa que encuentre e imprima el segundo número más grande del array.

const numeros = [15, 42, 3, 18, 90, 67, 29];

const ordenados = [...numeros].sort((a, b) => b - a);

const segundoMayor = ordenados[1];

console.log("El segundo número más grande del array es:", segundoMayor);