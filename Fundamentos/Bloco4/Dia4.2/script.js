/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index +=1) {
    console.log (numbers[index])
}

/* 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index=0; index < numeros.length; index +=1) {
    soma += numeros[index];
} console.log (soma)

/* 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; */

/* 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

let numbs = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for(let index=0; index < numbs.length; index +=1) {
    total += numbs[index];
}

let divisao = total / numbs.length;
console.log (divisao)

if (divisao >= 20) {
    console.log ("Valor maior que 20!")
}
else {
    console.log ("Valor menor ou igual a 20!")
}

/* 5- Utilizando for , descubra qual o maior valor contido no array e imprima-o; */

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = array[0];

for (let index =0; index < array.length; index +=1) {
    if (array[index] > maiorNumero) {
        maiorNumero = array[index];
    }
} console.log(maiorNumero);

/* 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

let lista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let index=0; index < lista.length; index +=1) {
    if (lista[index] % 2 !== 0) {
        impar +=1;
    }
}
    if (impar === 0) {
        console.log ("Nenhum valor ímpar encontrado!")
    }
    else {
        console.log (impar)
    }

/* 7- Utilizando for , descubra qual o menor valor contido no array e imprima-o; */

let listaNumeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = listaNumeros[0];

for (let index = 1; index < listaNumeros.length; index +=1) {
    if (listaNumeros[index] < menorNumero) {
        menorNumero = listaNumeros
    }
} console.log (menorNumero)

/* 8- Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */

/* 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */

let arrayCriada = [];

for(let index =1; index <= 25; index +=1) {
    arrayCriada.push(index);
} 
    console.log (arrayCriada)

for(let index = 0; index < arrayCriada.length; index +=1) {
    console.log (arrayCriada[array] / 2)
}

