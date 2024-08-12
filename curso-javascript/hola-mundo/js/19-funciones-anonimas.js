'use strict'

// Funciones anonimas: es una funcion que no tiene nombre

/* var pelicula = function(nombre) {
    return "La pelicula es: " + nombre;
} */

function sumame(numero1, numero2, sumaMuestra, sumaPorDos) {
    var suma = numero1 + numero2;

    sumaMuestra(suma);
    sumaPorDos(suma);
    return suma;
}

/* sumame(5, 7, function (dato) { // En este caso dato es la suma de la funcion sumame, es decir, el return suma. Aplicando la funcion anonima
    console.log("La suma es: ", dato);
},
function (dato) { // En este caso dato es la suma de la funcion sumame, es decir, el return suma, pero mmultiplicado por 2. Aplicando la funcion anonima
    console.log("La suma por dos es: ", (dato * 2));
}); */

// FUNCIONES FLECHA: es una forma de definir funciones de callback de una manera mas limpia y clara, sustituyendo la palabra function por una => (flecha)

sumame(5, 7, dato => { // En este caso dato es la suma de la funcion sumame, es decir, el return suma. Aplicando la funcion anonima
    console.log("La suma es: ", dato);
},
dato => { // En este caso dato es la suma de la funcion sumame, es decir, el return suma, pero mmultiplicado por 2. Aplicando la funcion anonima
    console.log("La suma por dos es: ", (dato * 2));
});