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

function adicionaMesAtual() {
    var mes = new Date();
    var mesAtual = mes.getMonth();
    mesAtual = mesAtual + 1
    document.getElementById("mes").innerHTML  = ("Mês: " + mesAtual)
}


//Criando elementos para o tbody


