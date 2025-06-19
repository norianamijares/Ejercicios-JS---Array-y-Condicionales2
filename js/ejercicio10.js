// Dado un array con elementos repetidos [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1,5, 8, 7, 4], crea un programa que devuelva un nuevo array sin duplicados.

const elementos = [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1, 5, 8, 7, 4];

const sinDuplicados = elementos.filter((elemento, indice) => {
    return elementos.indexOf(elemento) === indice;
});

console.log("Array sin duplicados:", sinDuplicados);
