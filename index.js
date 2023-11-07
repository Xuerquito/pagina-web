var bruna = window.document.getElementById("bruna")
var leo = window.document.getElementById("leo")
var samanta = window.document.getElementById("samanta")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")

function rolarparadireita() {
    bruna.style = "display:none"
    samanta.style = "display:flex"
    setaesquerda.style = "display: flex"
    setadireita.style = "display: none"
}

function rolarparaesquerda() {
    samanta.style = "display: none"
    bruna.style = "display: flex"
    setadireita.style = "display: flex"
    setaesquerda.style = "display: none"
}