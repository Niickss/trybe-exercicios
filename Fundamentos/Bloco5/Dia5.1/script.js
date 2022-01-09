function euNoFuturo () {
    let paragrafos = document.getElementsByTagName("p")[1];
    paragrafos.innerHTML = "Realizada espititualmente, profissionalmente e na vida."
} euNoFuturo();


function green () {
    let mudarVerde = document.getElementsByClassName("main-content")[0];
    mudarVerde.style.backgroundColor = "rgb(76,164,109)";
} green ()


function white () {
    let mudarWhite = document.getElementsByClassName("center-content")[0];
    mudarWhite.style.backgroundColor = "white";
} white ()


function mudarTag () {
    let alterarTag = document.getElementsByTagName("h1")[0];
    alterarTag.innerText = "Exercício 5.1 - JavaScript";
} mudarTag ()


function tudoMaiusculo () {
    let mudarMaiusculo = document.getElementsByTagName ("p")[1];
    mudarMaiusculo.innerText = mudarMaiusculo.innerText.toUpperCase();
} tudoMaiusculo ()


function console () {
    let imprimir = document.getElementsByTagName("p");
    for (let index = 0; index < imprimir.length; index+=1) {
        console.log (imprimir[index].innerHTML);
    }
} console ()