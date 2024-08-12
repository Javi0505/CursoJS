'use strict'

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...restoFrutas) { // Con los "..." se guardan luego todos los parametros (sandia, coco y mango) en un array. Parametros tipo REST en la definicion
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(restoFrutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Coco", "Mango");

var frutas = ["Naranja", "Manzana"];

listadoFrutas(...frutas, "Sandia", "Coco", "Mango"); // ...frutas es el  parametro de tipo SPREAD en el llamado de la funcion
