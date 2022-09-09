const frm = document.querySelector("form")  // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {     // "escuta" o evento submit do form
e.preventDefault()        // previne o envio do form
const chichila = frm.inChinchilas.value      // recebe o dado do campo inChichilas
const numero = Number(frm.inAnos.value)         // revebe o campo inAnos
let frase = ""        // frase onde vai sair o texto
for(let i = 1 ; i <= numero ; i++){
if(i==numero){
    frase += chichila
} else {
    frase += chichila + " * "
}
}
resp.innerText = frase      // exibe a resposta
})