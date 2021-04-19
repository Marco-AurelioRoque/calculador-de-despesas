//Abre fecha menu

function menuToggle() {
    let menuArea = document.getElementById("menu-area")

    if(menuArea.style.width == "200px") {
        menuArea.style.width = "0px"
    } else{
        menuArea.style.width = "200px"
    }
}

//Botoes adiciona, limpa
function adiciona() {
    let receita = prompt("Receita: ")
    let valor = prompt("Valor: ")


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
