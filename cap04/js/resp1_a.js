const frm = document.querySelector("form")      // obtém os elementos do form
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()                          // evita envio do form
    const numero = Number(frm.inNumero.value)    // obtém o número
    const teste = numero % 2        // pega o resto da divisão por 2

    resp.innerText = teste == 0 ? `${numero} é par` : `${numero} não é par` // verifica se o número é par com operador ternário 
})