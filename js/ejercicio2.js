// Dado un array de palabras, crea un programa que devuelva un nuevo array con palabras que tengan más de 5 letras. Por ejemplo: ["casa", "programación", "sol", "javascript", “texto”, “html”, “bootstrap”, “css”, “nodejs”, “reactjs”, “for”].

const palabras = ["casa", "programación", "sol", "javascript", "texto", "html", "bootstrap", "css", "nodejs", "reactjs", "for"];

const palabrasFiltradas = palabras.filter(palabra => palabra.length > 5);

console.log("Palabras con más de 5 letras:", palabrasFiltradas);