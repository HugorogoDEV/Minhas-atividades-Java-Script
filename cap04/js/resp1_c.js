const frm = document.querySelector("form")      // receber os elementos do form
const resp1 = document.querySelector("linha1")     // atribui uma variável para responder as linhas de
const resp2 = document.querySelector("linha2")     // ... exibição

frm.addEventListener("submit", (e) => {
    e.preventDefault()      // evita o envio do form
    const valor = Number(frm.inValor.value)     // obtém o valor

    resp1.innerText = valor >= 3 ? `Tempo: 120 min` : valor >= 1.75 ? `Tempo: 60 min` : valor >= 1 ? `Tempo: 30 min` :  `Valor Insuficiente`     // texto da primeira linha
    resp2.innerText = valor >= 3 ? `Troco: ${valor-3}` : valor >= 1.75 ? `Troco: ${valor - 1.75}` : valor >= 1 ? `Troco: ${valor - 1}` :   ""     // texto da segunda linha
})