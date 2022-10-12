var usuario = {
    "nome": "João",
    "email": "joao@mail.com",
    "logado": false
}

var button = document.querySelector(".exit-button")

function exitButton () {
    if (usuario.logado !== true){
    button.textContent='Entrar'
    }
}

exitButton()