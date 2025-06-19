// Escribe un programa que solicite al usuario un número que represente grados Celsius y conviértelo a Fahrenheit utilizando la fórmula: F = (C × 9/5) + 32.

function convertirCelsiusAFahrenheit(Celsius) {
    return (Celsius * 9/5) + 32;
};

let gradosCelsius = parseFloat(prompt("Ingresa la temperatura en °C:"));

let gradosFahrenheit = convertirCelsiusAFahrenheit(gradosCelsius);

console.log(`La temperatura en Fahrenheit es: ${gradosFahrenheit}°F`);