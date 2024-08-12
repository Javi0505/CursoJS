'use strict' //Es para que la programacion sea mas estricta, es decir, si o si tiene que inicializarse la variable, por buenas practicas
// VARIABLES

// Let permite definir variable limitando su alcance al bloque, declaracion o esxpresion donde se esta utilizando
// Var define una variable global o local en una funcion sin importar el ambito del bloque

var pais = "El Salvador";
var continente = "America";
var antiguedad = 2024;
var pais_continente = pais+' '+continente;
let prueba = "hola";
alert(prueba);

pais = "Italia";
continente = "Europa"

console.log(pais, continente, antiguedad); // Muestra en la consola de html el valor de las variables
alert(pais_continente);