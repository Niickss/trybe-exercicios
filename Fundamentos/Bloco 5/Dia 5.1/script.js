 /* Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
 - document.getElementById()
 - document.getElementsByClassName()
 - document.getElementsByTagName() */

 // Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) 
 function changeText(){
    document.getElementsByTagName('p')[0].innerText = 'Uma DEV que desenvolve com qualidade!'
 }
 changeText()

 // Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109))
 function changeColor(){
    document.getElementsByClassName('main-content')[0].style.background = 'rgb(76,164,109)'
 }
 changeColor()

 // Crie uma função que mude a cor do quadrado vermelho para branco
function changeColorSquare(){
    document.getElementsByClassName('center-content')[0].style.background = 'white'
}
changeColorSquare()

// Crie uma função que corrija o texto da tag <h1>
function correct(){
    document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - Java Script'
}
correct()

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo
function modify(){
    let maiuscula = document.getElementById('minuscula')
    maiuscula.innerHTML = maiuscula.innerHTML.toUpperCase()
}
modify()

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function display(){
    let printOut = document.getElementsByTagName('p')
    return printOut
}
console.log(display())