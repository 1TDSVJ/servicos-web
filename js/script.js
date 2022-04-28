console.log('Mensagem que veio do arquivo externo.')

var nome = 'Rafa'
console.log('Meu nome é: ' + nome)

function sobrenome(){
    let vSobrenome = 'Ramos Costa'
    console.log('Seu sobrenome é: ' + vSobrenome)
}

const botao = document.querySelector("#botao")

botao.addEventListener("click", function(){
    botao.innerHTML = "Ui, fui clicadu!"
    botao.getElementsByClassName.height = "100px"
})

botao.addEventListener("mouseover", function(){
    botao.innerHTML = "Sai de cima!"
})

botao.addEventListener("mouseout", function(){
    botao.innerHTML = "Volta aqui ;-;!"
})