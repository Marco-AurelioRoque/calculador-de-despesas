//Abre fecha menu

function menuToggle() {
    var menuArea = document.getElementById("menu-area")

    if(menuArea.style.width == "200px") {
        menuArea.style.width = "0px"
    } else{
        menuArea.style.width = "200px"
    }
}

//Botoes adiciona, limpa
function adiciona() {
    document.getElementById("wrapper-modal").style.display = "block"
    document.querySelector("aside").style.filter = "blur(0.7px)"
    document.querySelector("table").style.filter = "blur(0.7px)"
    document.querySelector("h2").style.filter = "blur(0.7px)"

    document.querySelector("aside").style.opacity = "60%"
    document.querySelector("table").style.opacity = "60%"
    document.querySelector("h2").style.opacity = "60%"
    
}

function fechaModal() {
    document.getElementById("wrapper-modal").style.display = "none"
    document.querySelector("aside").style.filter = "none"
    document.querySelector("table").style.filter = "none"
    document.querySelector("h2").style.filter = "none"

    document.querySelector("aside").style.opacity = "100%"
    document.querySelector("table").style.opacity = "100%"
    document.querySelector("h2").style.opacity = "100%"
}

function limpa() {

}


//Criando elementos para o tbody

var corpoTabela = document.querySelector("tbody")


this.criarLinhaTabela = function (){
    var linha = document.createElement("tr")
    var Receita = document.createElement("td")
    var Previsto = document.createElement("td")
    var Ganho = document.createElement("td")

    var textoReceita = document.createTextNode(receita)
    var textoPrevisto = document.createTextNode(previsto)
    var textoGanho = document.createTextNode(valor)

    Receita.appendChild(textoReceita)
    Previsto.appendChild(textoPrevisto)
    Ganho.appendChild(textoGanho)

    linha.appendChild(Receita)
    linha.appendChild(Previsto)
    linha.appendChild(Ganho)

    corpoTabela.appendChild(linha)

}

criarLinhaTabela()
