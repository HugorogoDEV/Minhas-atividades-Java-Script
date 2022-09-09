const prompt = require("prompt-sync")()                                 // adiciona pacotes ao programa
const racao = Number(prompt("ração em kg: "))                           // peso da ração
const gato = Number(prompt("quanto um gato consome em gramas: "))       // consumo do gato
const duracao = Math.floor(( racao * 1000 ) / gato)                     // tempo que dura a ração
const sobra = ( racao * 1000 ) % gato                                   // a sobra da comida

console.log(`Dias que vai durar a ração: ${duracao}`)                   // o que vai ser exibido como
console.log(`Sobra de comida: ${sobra}`)                                // ... resposta