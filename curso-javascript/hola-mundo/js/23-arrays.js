'use strict'

var nombres = ["Javier Caceres", "Frida Sibrian", "Luis Merino", "Juan Recinos", 52, true];
var lenguajes = new Array("PHP", "JS", "C++", "PY", "Java");

console.log(nombres[4]);
console.log(lenguajes);
console.log(nombres.length);

/*var elemento = parseInt(prompt("Que elemento del array quieres?", 0));

if (elemento >= nombres.length) {
    alert("Introduce el numero correcto menor que: " + nombres.length);
} else {
    alert("El usuario seleccionado es: " + nombres[elemento]);
}*/

// RECORRER ARREGLOS

/*document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");
for (var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

lenguajes.forEach((elemento, index, arr) => {
    console.log(arr);
    document.write("<li>" + index + "- " + elemento + "</li>");
});*/

for (let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

// Busquedas

//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP"); // Encuentra el elemento indicado en el array
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS"); // Encuentra el indice del elemento indicado en el array
var precios = [10, 20, 50, 80, 12];
var busqueda = precios.some(precio => precio < 10); // Comprueba si algun precio es mayor o igual al valor indicado



console.log(busqueda);
