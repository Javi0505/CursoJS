'use script'
// Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario

var numero1 = prompt("Intoduce el primer número: ", 0);
var numero2 = prompt("Introduce el segundo número: ", 0);

document.write("<h1>De " + numero1 + " a " + numero2 + " estan estos numeros impares: </h1>")
while (numero1 < numero2) {
    numero1++;

    if (numero1 % 2 != 0) {
        document.write("<h3>El " + numero1 + " es impar </h3>")
    }
}
