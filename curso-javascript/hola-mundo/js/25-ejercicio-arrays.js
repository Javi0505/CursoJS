'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, y que nos diga si lo encuentra y su indice
 */

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array " +textoCustom+ "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>")
    });
    document.write("</ul>");
}
//Pedir 6 numeros

var numeros = [];
for (var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

//Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//Mostrar en la consola
console.log(numeros);

//Ordenarlo y mostrarlo
numeros.sort(function (a,b){return a-b;});
mostrarArray(numeros, 'ordenado');

//Invertir su orden y mostrarlo
numeros.reverse();
mostrarArray(numeros, 'invertido');

//Mostrar cuantos elementos tiene el array
document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>");

//Busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);
if (posicion && posicion != -1){
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1><hr/>");
}else{
    document.write("<h1>NO ENCONTRADO</h1><hr/>");
}
