const frm = document.querySelector("form")      // obtém elementos da página
const resp1 = document.querySelector("#frase1")
const resp2 = document.querySelector("#frase2")

frm.addEventListener("submit", (e) => {
e.preventDefault()  
const entrada = Number(frm.inNumero.value)
let frase = ""
let frase2 = "" 

for(let i = 1 , c = 0 ; i <= entrada / 2 ; i++) {
    if(entrada % i == 0){
        c += i
        frase2 += `${i},`
        if(c == entrada){
            frase += `O número ${entrada} é perfeito.`
            frase2 += `(Soma: ${entrada})`
        }        
    }
}
resp1.innerText = frase2
resp2.innerText = frase 
})
