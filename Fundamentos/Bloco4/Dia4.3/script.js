/* 1- Crie um algoritmo que retorne o fatorial de 10. */

let numero = 1;

for (let index=10; index > 0; index-=1) {
    numero *= index;
}
console.log (numero);

/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */

let word = 'tryber';
let inverte = '';

for(let index = 0; index < word.length; index +=1) {
    inverte += word[word.length - 1 - index];
} console.log (inverte)


/* 3- Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0];
let menor = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maior.length) {
    maior = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menor.length) {
    menor = array[index];
  }
}

console.log(maior);
console.log(menor);

/* 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. */

let numeroPrimo = 0;

for (let index = 0; index <= 50; index += 1) {
  let numeroPrimo = true;
  for (let numeroDivisor = 2; numeroDivisor < index; numeroDivisor += 1) {
    if (index % numeroDivisor === 0) {
      numeroPrimo = false;
    }
  }
  if (numeroPrimo) {
    numeroPrimo = index;
  }
}

console.log(numeroPrimo);