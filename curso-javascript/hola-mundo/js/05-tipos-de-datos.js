'use strict'

// Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

alert("El resultado de la operacion es: "+operacion);

// Tipos de datos
var numero_entero = 44; // int
var cadena_texto = "Hola que tal"; // string
var verdadero_falso = false; // bool
var numero_falso = "33";

//parseint convierte el valor de string a entero, lo mismo con parsefloat de tipo string a flotante
console.log(parseInt(numero_falso) + 7);
//Ahora de entero a texto mediante String
console.log(String(numero_entero) + 4);

//Detectar el tipo de dato con typeof
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_falso);
console.log(typeof numero_falso);

