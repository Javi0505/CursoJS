'use strict'
// Hacer un programa que pida dos numeros y que nos diga cual es el mayor, el menor o sin son iguales
// Si los numeros no son un numero o son menores o iguales a cero, nos lo vuelva a
var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    alert("Introduce numeros correctos");
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}

if (numero1 > numero2) {
    alert("El numero mayor es: " + numero1 + " y el menor es " + numero2);
} else if (numero1 < numero2) {
    alert("El numero mayor es: " + numero2 + " y el menor es " + numero1)
} else if (numero1 == numero2) {
    alert("Los dos numeros son iguales");
}