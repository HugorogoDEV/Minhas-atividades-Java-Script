const frm = document.querySelector("form")        // obtém elementos da página
const resp = document.querySelector("#inResposta")

frm.addEventListener("submit", (e) => {
    e.preventDefault()      // previne o envio do form
    const quantidade = Number(frm.inNumero.value)
    const tempo = Number(frm.inAnos.value)
    let frase = ""

    for(let i = 1 ; i <= tempo ; i++) {
        if(i!=1){
            frase += `${i}° Ano: ${quantidade * 3 ** (i - 1)} Chinchilas \n`
        } else {
            frase += `${i}° Ano: ${quantidade} Chinchilas \n`
        }
    }

    resp.innerText = frase
})