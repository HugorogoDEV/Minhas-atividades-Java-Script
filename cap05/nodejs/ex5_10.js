const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$: "))      // Lê valor do carnet...
const num = Number(prompt("N° de Parcelas: "))      // e número de parcelas
const valorParcelas = Math.floor(valor / num)       // caluclar valor sem decimais
const valorFinal = valorParcelas + (valor % num)    // calcula valor sem decimais
for (let i = 1; i < num; i++) {
    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${num}ª parcelas: R$ ${valorFinal.toFixed(2)}`)     // última parcela