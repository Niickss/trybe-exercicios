/* 1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

const a = 390;
const b = 86;

console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);
console.log (a % b);

/* 2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

const primeiroNumero = 91;
const segundoNumero = 47;

if (primeiroNumero > segundoNumero) {
console.log ("O maior número é " + primeiroNumero + "!" );
}
else if (primeiroNumero < segundoNumero) {
console.log ("O maior número é " + segundoNumero + "!" );
}
else {
console.log ("Os números são iguais!")
}

/* 3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const primeiro = 68;
const segundo = 30;
const terceiro = 55;

if (primeiro > segundo && primeiro > terceiro) {
console.log ("O maior número é " + primeiro + "!" );
}
else if(segundo > primeiro && segundo > terceiro) {
console.log ("O maior número é " + segundo + "!" );
} 
else if (terceiro > primeiro && terceiro > segundo) {
console.log ("O maior número é " + terceiro + "!")
}
else {
console.log ("Os números são iguas!")
}

/* 4) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

const numero = 0;

if (numero > 1) {
console.log ("Positive");
}
else if (numero <= -1) {
console.log ("Negative");
}
else {
console.log ("Zero");
}

/* 5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
- Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo. */

const anguloA = 66;
const anguloB = 41;
const anguloC = 73;

if (anguloA + anguloB + anguloC === 180) {
console.log (true);
}
else if (anguloA + anguloB + anguloC !== 180) {
console.log (false);
}
else if (anguloA + anguloB + anguloC < 0) {
console.log ("Inválido");
}
else {
console.log ("Não é um quadrado!")
}

/* 6) Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. */

const peça = "rainha";

switch (peça.toLowerCase()) {
case "peão":
console.log ("Peão: Anda uma casa, para frente ou diagonais.")
break;

case "bispo":
console.log ("Bispo: Anda nas diagonais, quantas casas quiser.");
break;

case "torre":
console.log ("Torre: Anda em linha reta, quantas casas quiser.");
break;
case "cavalo":
console.log ("Cavalo: Anda em sentido de 'L', para qualquer lado.");
break;
case "rainha":
console.log ("Rainha: Faz os movimentos de qualquer outra peça.");
break;

case "rei":
console.log ("Rei: Anda apenas uma casa, para qualquer lado.");
break;

default:
console.log ("Peça inválida!")
}

/* 7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
- Porcentagem >= 90 -> A
- Porcentagem >= 80 -> B
- Porcentagem >= 70 -> C
- Porcentagem >= 60 -> D
- Porcentagem >= 50 -> E
- Porcentagem < 50 -> F
- O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

const nota = 100;

if (nota >= 90 && nota <= 100) {
console.log ("Sua nota é : A");
}
else if (nota >= 80 && nota < 90) {
console.log ("Sua nota é : B");
}
else if (nota >= 70 && nota < 80) {
console.log ("Sua nota é : C");
}
else if (nota >= 60 && nota < 70) {
console.log ("Sua nota é : D");
}
else if (nota >= 50 && nota < 60) {
console.log ("Sua nota é : E");
}
else if (nota < 50 && nota > 0) {
console.log ("Sua nota é : F");
}
else if (nota > 101 || nota < 0) {
console.log ("Valor inválido!");
}
else {
console.log ("Valor inválido!")
}

/* 8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
- Bonus: use somente um if . */

const number1 = 220;
const number2 = 27;
const number3 = 52;

let resultado = false;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
resultado = true;
}
console.log (resultado)

/* 9) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
- Bonus: use somente um if .*/

const impar1 = 36;
const impar2 = 100;
const impar3 = 4;

let result = false;

if (impar1 % 2 !== 0 || impar2 % 2 !== 0 || impar3 % 2 !== 0) {
result = true;
}
console.log (result)

/* 10) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
- Atente que, sobre o custo do produto, incide um imposto de 20%.
- Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

const custoProduto = 100;
const valorDeVenda = 300;

if (custoProduto >= 0 && valorDeVenda >= 0) {
const custoTotalproduto = custoProduto * 1.2;
const lucroTotal = (valorDeVenda - custoTotalproduto) * 1000;
console.log(lucroTotal);
}
else {
console.log("Insira valores acima de 0 !");
};

