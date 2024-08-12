'use strict'

// Switch

var edad = 25;
var imprime = "";
switch (edad) {
    case 18:
        imprime = "Acabas de ser mayor de edad"
        break;
    case 25:
        imprime = "Get a job";
        break;
    default:
        imprime = "Tu edad es neutra"
        break;
}
console.log(imprime);

// Bucle FOR

for (let i = 1; i <= 5; i++) {
    console.log("Vamos por el numero: " + i);
}

// Bucle WHILE

var year = 2024;
while (year != 2019) {
    console.log("Estamos en el anio: " + year);
    if(year == 2022)
    {
        break; // Salir de bucle
    }
    year--;
}

// Bucle DO-WHILE
var years = 26;
do {
    alert("SOLO CUANDO SEA DIFERENTE DE 20");
    years--;
} while (years > 25)
