const prompt = require("prompt-sync")()         // adiciona parote para entrada de dados
const num1 = Number(prompt("1° Número: "))      // lê os números
const num2 = Number(prompt("2° Número: "))
const soma = num1 + num2                        // calcula a soma
console.log(`Soma é: ${soma}`)                  // exive o resultado