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

function adicionaMesAtual() {
    let mes = new Date();
    let mesAtual = mes.getMonth();
    mesAtual = mesAtual + 1
    document.getElementById("mes").innerHTML  = ("Mês: " + mesAtual)
}

function limpa() {
    document.getElementById("mes").innerHTML = ""

    tabela.rows.style.display = "none"
}

//Criando elementos para o tbody

function armazenaDadosTabela(receita, valor) {
    let tabela = document.getElementById("tabelaPrincipal");
    let quantidadeLinhas = tabela.rows.length;
    let linha = tabela.insertRow(quantidadeLinhas);

    let cellReceita = linha.insertCell(0);
    let cellValor = linha.insertCell(1);
    

    cellReceita.innerHTML = quantidadeLinhas;
    cellReceita.innerHTML = receita
    cellValor.innerHTML = valor
    
}

//Mostrar Detalhes / Oculta Detalhes
function mostrarDetalhes() {
    document.getElementById("resultadoTotal").style.display = "block" 
    document.getElementById("maisDetalhes").disabled = true
    document.getElementById("ocultaDetalhes").disabled = false
}

function ocultarDetalhes() {
    document.getElementById("resultadoTotal").style.display = "none"
    document.getElementById("maisDetalhes").disabled = false
    document.getElementById("ocultaDetalhes").disabled = true
}

