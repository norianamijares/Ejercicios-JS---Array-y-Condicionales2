// Pide al usuario una frase y cuenta cuántas palabras tiene.

const frase = prompt("Ingresa una frase de tu elección:");

const palabras = frase.trim().split(" ");

const cantidadPalabras = palabras.filter(palabra => palabra.length > 0).length;

console.log("La cantidad de palabras en la frase es:", cantidadPalabras);
