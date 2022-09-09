// cria referência ao form e aos elementos de resposta
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// cria um "ouvinte" de evento, acionado quando o botão for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value     // obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    const conta = Math.floor(preco * 2)                     // calcula o valor da conta final
    resp1.innerText = `Promoção de ${medicamento}`          // mostra o nome do medicamento
    resp2.innerText = `Leve dois por apenas R$: ${conta.toFixed(2)}`   // mostra o valor de dois produtos

    e.preventDefault()                                      // evita o envio do form
})