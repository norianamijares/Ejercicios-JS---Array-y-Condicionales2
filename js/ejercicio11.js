// Crea un programa que solicite la fecha de nacimiento del usuario (en formato YYYY-MM-DD) y calcule su edad en días.

const fechaNacimientoUsuario = prompt("Ingresa tu fecha de nacimiento (YYYY-MM-DD):");

if (fechaNacimientoUsuario) {

    const fechaNacimiento = new Date(fechaNacimientoUsuario);

    const fechaActual = new Date();

    const diferenciaTiempo = fechaActual - fechaNacimiento;

    const edadEnDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

    console.log("Tu edad en días es:", edadEnDias);

} else {
    console.log("No se ingresó una fecha válida.");
}




