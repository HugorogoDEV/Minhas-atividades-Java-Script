const frm = document.querySelector("form")      // recebe os elementos do form
const resp1 = document.querySelector("#linha1")  // atribui variáveis as linhas de resposta
const resp2 = document.querySelector("#linha2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()      // evita o envio do form
    const ladoA = Number(frm.inA.value)     // obtém o tamanho dos lados
    const ladoB = Number(frm.inB.value)
    const ladoC = Number(frm.inC.value)

    if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
        resp1.innerText =  `Os lados não podem formar um triângulo`
    } else {
        resp1.innerText = `Lados podem formar um triângulo`
    }
    if(ladoA == ladoB && ladoB == ladoC){
        resp2.innerText = `Tipo: Equilátero`
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
        resp2.innerText = `Tipo: Escaleno`
    } else {
        resp2.innerText = "Tipo: Isósceles"
    }
})