const prompt = require("prompt-sync")()                             // adiciona o pacote ao programa
const salario = prompt("Salário: ")                                 // salário do funcionário
const tempo = prompt("Tempo de trabalho em anos: ")                 // tempo de trabalho
const quadrienio = Math.floor(tempo / 4)
const montante = salario * (101 / 100 ) ** quadrienio               // montante depois dos abonos

console.log(`Numero de quadriênios: ${quadrienio}`)                 // exibe as respostas
console.log(`Salário final com quadriênios: ${montante}`)