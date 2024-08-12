'use strict'

//DOM - Document Object Model

function cambiaColor(color){ //Funcion que en consola del html se puede invocar y cambiar el color por default en este caso red por el que nosotros querramos
    caja.style.background = color;
}

//Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja").innerHTML; //innerHTML me retorna el texto que dice la caja
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja"); //Mediante el # se puede llamar al id de elementos

//Formato del elemento caja en HTML

caja.innerHTML = "TEXTO EN LA CAJA DE JS!"; //Modifica el texto que estaba en la caja por el nuevo asignado y se muestra en el HTML
caja.style.background = "red"; //Le asigna un color red al background
caja.style.padding = "20px"; //Le asigna un tamaño de letra al texto
caja.style.color = "white"; //Le asigna un color de letra al texto
caja.className = "hola hola2"; //Le modifica el nombre de la clase a la caja

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
var valor;
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr); //Agrega el append al final de la lista de divs

//Conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for (div in divsRojos) {
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "red";
    }
}

//querySelector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelectorAll("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelectorAll("div");
console.log(etiqueta);

//Para seleccionar solamente un elemento se utiliza el querySelector
//Para seleccionar muchos elementos existe el método querySelectorAll