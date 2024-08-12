'use strict'

var texto = "Hola mundo soy una variable global";
var numero = 12;

function holaMundo(texto) {
    var holamundo = "Texto dentro de funcion";

    console.log(texto);
    console.log(typeof numero); // console.log(typeof numero.toString()); Convierte el tipo de dato a un string
    console.log(holamundo);
}

holaMundo(texto);
console.log(holamundo);
