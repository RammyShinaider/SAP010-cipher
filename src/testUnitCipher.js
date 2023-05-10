import { caesarCipher } from './cipher.js';

// Teste para criptografar um texto
const encryptedText = caesarCipher('Hello, World!', 3);
console.log(encryptedText);  // Deverá imprimir 'Khoor, Zruog!'

// Teste para descriptografar um texto
const decryptedText = caesarCipher('Khoor, Zruog!', -3);
console.log(decryptedText);  // Deverá imprimir 'Hello, World!'

// Teste para texto com caracteres especiais
const specialText = caesarCipher('Hello, @World!', 5);
console.log(specialText);  // Deverá imprimir 'Mjqqt, @Btwqi!'
