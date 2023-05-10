import { caesarCipher } from './cipher.js'

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
