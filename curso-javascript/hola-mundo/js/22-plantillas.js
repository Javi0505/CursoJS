'use strict'

// PLANTILLAS DE TEXTO

var nombre = prompt("Ingresa tu nombre:");
var apellidos = prompt("Ingresa tus apellidos:");

// var texto = "Mi nombre es: " + nombre + "<br/> Mis apellidos son: " + apellidos;
// Plantilla: 
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`; // Imprimo la variable dentro de la plantilla (${...}).
document.write(texto);