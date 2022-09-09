// cria referencia ao form e ao elemento de resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um "ouvinte" de evento acionado quando o botão for clicado
frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)         // obtém o valor dos campos
    const tempo = Number(frm.inTempo.value)

    const preço = Math.ceil(tempo / 15) * valor     // calcula o valor final da conta
    resp.innerText = `Valor a Pagar R$: ${preço}`   // apresenta a frase com o preço final

    e.preventDefault()                              // evita o envio final do produto
})