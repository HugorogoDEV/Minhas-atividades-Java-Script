const prompt = require("prompt-sync")()         // obtém 1° número
const numero = Number(prompt("Número (centena): "))     // lê o número
if (numero < 100 || numero >= 1000) {
    console.log("Erro... deve ser uma centena")
    return
}
const num1 = Math.floor(numero / 100)       // obtém 1° número
const sobra = numero % 100      //  0 que sobra (dezena)
const num2 = Math.floor(sobra / 10)     // obtém 2° número
const num3 = sobra % 10     // obtém 3° número
console.log(`Invertido: ${num3}${num2}${num1}`)     // exibe o número invertido