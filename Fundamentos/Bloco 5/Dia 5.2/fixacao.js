// Acesse o elemento elementoOndeVoceEsta
document.querySelector('#elementoOndeVoceEsta')

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele
document.querySelector('#elementoOndeVoceEsta').parentElement.style.background = 'yellow'

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele
document.querySelector('#primeiroFilhoDoFilho').innerText = "Aqui é o primeiro filho do filho"

// Acesse o primeiroFilho a partir de pai
document.querySelector('#pai').firstElementChild

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
document.querySelector('#elementoOndeVoceEsta').previousElementSibling

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta
document.querySelector('#elementoOndeVoceEsta').nextSibling

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
document.querySelector('#elementoOndeVoceEsta').nextElementSibling

// Agora acesse o terceiroFilho a partir de pai
document.querySelector('#pai').lastElementChild.previousElementSibling // ou seja, nada impede de colocar mais de uma propriedade 