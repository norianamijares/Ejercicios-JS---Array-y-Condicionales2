// Solicita al usuario un número entero y calcula la multiplicación de todos los números desde 1 hasta ese número. Se debe imprimir por consola.

let numero = parseInt(prompt("Ingresa un número entero:"));

let resultado = 1;

for (let i = 1; i <= numero; i++) {
    resultado *= i;
}

console.log(`La multiplicación de los números desde 1 hasta ${numero} es: ${resultado}`);