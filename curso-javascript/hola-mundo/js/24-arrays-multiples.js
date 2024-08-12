'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];
peliculas.reverse(); //Ordena el array de forma inversa
peliculas.sort(); //Ordena el array alfabeticamente

console.log(peliculas);

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);
/*var elemento = "";
do {
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
} while(elemento != "ACABAR");

peliculas.pop();*/
var indice = peliculas.indexOf("Gran Torino");
if (indice > -1){
    peliculas.splice(indice, 1); //Splice en base a un indice nos permite borrar tantos pasos como yo quiera en un array
}
var peliculas_string = peliculas.join(); //Convierte un array en texto, es un string separado por comas

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", "); //Convierte un string en array. es el proceso contrario a join

console.log(cadena_array);