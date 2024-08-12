'use strict'

// Hacer un programa que nos diga si un numero es par o impar, ventana prompt, si el numro no es valido que nos pida de nuevo el numero
var number = parseInt(prompt("Ingrese un valor: ", 0));

while (isNaN(number)) {
    var number = parseInt(prompt("Ingrese un valor: ", 0));
}

if(number % 2 == 0) {
    alert("El numero " + number + " es par");
} else {
    alert("El numero " + number + " es impar");

}
