'use strict'

// BOM - Browser Object Model

function getBom() {
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location.href);
}
function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=400,height=300");
}
getBom();
//redirect("https://www.leagueoflegends.com/es-es/");