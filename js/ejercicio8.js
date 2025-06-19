// Dado un array de números [5, -1, -7, 10, 3, -2, 8, -9, 4, -4, 7, 1, 6], escribe un programa que cree un nuevo array solo con los números positivos y lo imprima.

const numeros = [5, -1, -7, 10, 3, -2, 8, -9, 4, -4, 7, 1, 6];

const numerosPositivos = numeros.filter(numero => numero > 0);

console.log("Los números positivos son:", numerosPositivos);