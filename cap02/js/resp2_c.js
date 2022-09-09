// cria referência ao form e aos elementos de resposta
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// cria um "ouvinte" de evento, acionado quando o botão for clicado
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value       // obtém o nome do produto
    const preco = Number(frm.inPreco.value)
    const total = preco * 2 + preco / 2       // preço total do produto
    const reduzido = preco / 2                // preço descontado

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`      // mostra o valor do produto descontado
    resp2.innerText = `O 3° produto custa apenas R$: ${reduzido.toFixed(2)}`           // valor do produto descontado

    e.preventDefault()                        // Evita o envio do form
})