'use strict'

// Condicional IF

var edad = 30;
var nombre = "Javier Caceres";

if (edad >= 18) {
    console.log(nombre + " " + edad + " años, es mayor de edad");

    if (edad == 33) {
        console.log("Todavia eres millenial");
    } else if (edad >= 70) {
        console.log("Eres anciano");
    } else {
        console.log("Ya no eres millenial");
    }
} else {
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

var year = 2024;

// NEGACION
if (year != 2016) {
    console.log("El año no es 2016, realmente es: " + year);
}

// AND
if (year >= 2000 && year <= 2026 && year != 2024) {
    console.log("Estamos en la era actual");

} else {
    console.log("Estamos en la era post moderna");
}

// OR
if (year == 2004 || (year >= 2024 && year == 2024)) {
    console.log("El anio acaba en 4");
} else { 
    console.log("Anio no registrado");
}
