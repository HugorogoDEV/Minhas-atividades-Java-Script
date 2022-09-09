const frm = document.querySelector("form")      // obtém os elementos do form
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()          // evita o envio do form
    const maxima = Number(frm.inVelocidadePermitida.value)      // obtém a velocidade permitida
    const condutor = Number(frm.inVelocidadeCondutor.value)        // obtém a velocidade do condutor

    resp.innerText = condutor <= maxima ? `Sem Multa` : condutor < maxima * 120 / 100 ? `Multa Leve` : `Multa Grave`
})