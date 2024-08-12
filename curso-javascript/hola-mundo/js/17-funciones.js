'use strict'

// Funcion: agrupacion reutilizable de un conjunto de instrucciones

function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("****************");
}

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br/>");
    document.write("Resta: " + (numero1 - numero2) + "<br/>");
    document.write("Multiplicación: " + (numero1 * numero2) + "<br/>");
    document.write("Division: " + (numero1 / numero2) + "<br/>");
    document.write("****************<br/>");
}
function calculadora(numero1, numero2, mostrar = false) {
    if (mostrar == false) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }
}

// LLAMADO DE LA FUNCION
calculadora(1, 4);
calculadora(2, 5, true);
calculadora(1, 9, true);

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8);    
} */

