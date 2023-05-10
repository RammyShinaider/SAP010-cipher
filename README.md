# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Desenho do projeto](#2-desenho-do-projeto)


***

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

 
 
## 2. Desenho do Projeto

* O projeto foi pensado na facilidade de se encriptar e descriptar uma palavra ou texto, podendo assim auxiliar o usuário com um método simples de codificação para proteção de dados ou até criação de senhas, caso seja o desejo.
* Segue abaixo a explicação das funções do Index.js:

  - Essa função atribui um evento de clique aos botões "encrypt-button" e "decrypt-button" no seu HTML.

Quando o botão "encrypt-button" é clicado, a função do evento é executada. Ela realiza o seguinte:

Obtém o valor do texto de entrada do elemento HTML com o id "input-text" usando document.getElementById("input-text").value.
Obtém o valor do deslocamento do elemento HTML com o id "shift-value" e o converte para um número inteiro usando parseInt(document.getElementById("shift-value").value).
Obtém a referência ao elemento HTML de saída com o id "output-text" usando document.getElementById("output-text").
Chama a função caesarCipher(inputText, shiftValue) para criptografar o texto de entrada com o deslocamento especificado. O resultado é atribuído à variável result.
Define o valor do elemento de saída para o resultado da criptografia usando outputText.value = result.
O botão "decrypt-button" tem um comportamento semelhante, exceto que chama a função caesarCipher(inputText, -shiftValue) para descriptografar o texto com o deslocamento negativo.

Essa função permite que o usuário insira um texto, especifique um deslocamento e veja o resultado da criptografia ou descriptografia atualizado no elemento de saída do HTML.


  const encryptButton = document.getElementById("encrypt-button");
encryptButton.addEventListener("click", () => {
  const inputText = document.getElementById("input-text").value;
  const shiftValue = parseInt(document.getElementById("shift-value").value);
  const outputText = document.getElementById("output-text");
  
  const result = caesarCipher(inputText, shiftValue);
  
  outputText.value = result;
});

const decryptButton = document.getElementById("decrypt-button");
decryptButton.addEventListener("click", () => {
  const inputText = document.getElementById("input-text").value;
  const shiftValue = parseInt(document.getElementById("shift-value").value);
  const outputText = document.getElementById("output-text");
  
  const result = caesarCipher(inputText, -shiftValue);
  
  outputText.value = result;
});

* funções do Cipher.js:

Essa função implementa a cifra de César, que é um método de criptografia simples onde cada letra do texto é substituída por outra letra deslocada um certo número de posições no alfabeto.

A função caesarCipher recebe dois parâmetros: text (texto a ser criptografado ou descriptografado) e shift (o deslocamento a ser aplicado).

O funcionamento da função é o seguinte:

Inicializa a variável result como uma string vazia, que será usada para armazenar o resultado da criptografia ou descriptografia.
Percorre cada caractere do texto fornecido usando um loop for.
Para cada caractere, obtém o código Unicode usando text.charCodeAt(i).
Verifica se o código Unicode corresponde a uma letra maiúscula (código entre 65 e 90) ou uma letra minúscula (código entre 97 e 122).
Para letras maiúsculas, realiza a operação de deslocamento aplicando a fórmula ((charCode - 65 + shift) % 26) + 65. Isso garante que o resultado permaneça dentro do intervalo das letras maiúsculas.
Para letras minúsculas, realiza a operação de deslocamento aplicando a fórmula ((charCode - 97 + shift) % 26) + 97. Isso garante que o resultado permaneça dentro do intervalo das letras minúsculas.
Converte o código Unicode resultante de volta para o caractere correspondente usando String.fromCharCode(charCode).
Concatena o caractere resultante à variável result.
Após o loop, retorna o valor final de result, que representa o texto criptografado ou descriptografado.
Essa função permite realizar a criptografia e descriptografia de um texto usando a cifra de César com o deslocamento especificado.


export function caesarCipher(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + shift) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + shift) % 26) + 97;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}


