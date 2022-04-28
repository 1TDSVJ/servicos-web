// Comentário de linha em JS
/*
Comentário de Bloco
*/
//Mensagem de console vinda do arquivo externo JS
//console.log('Mensagem que veio do arquivo Externo.')
//document.write('Escrevendo uma mensagem com documento!')

//Declaração de variáveis com VAR.
//Basicamente o que se tem com o var é o escopo aumentado.

var nome = "Wolverine"
//utilize para concatenação o símbolo ( + )
console.log('Meu nome é : ' + nome)

function sobrenome (){
    // A declaração
    let snome = "Mike"
    console.log("Meu sobrenome é : " + snome)
    console.log('Meu  nome completo : ' + nome + " " + snome)
}

sobrenome('')

//console.log('Descobri seu sobrenome : ' + snome)

//Constantes em JS são muito utilizadas para o armazenamento de
//elementos, porque os elementos são imutaveis, mas os seus atributos não.

const elementoBotao = document.querySelector('#botao')

//Vamos atrelar uma função de listener/escutador de eventos ao elemento e
//sempre que ocorrer um evento ele vai realizar uma ação.
//elementoBotao.addEventListener('Evento', AÇÃO que poder ser uma função, mensagem, função anônima etc!)
elementoBotao.addEventListener("click",function) {
    elementoBotao.innerHTML = "Ui, fui Clicado!"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"

})

elementoBotao.addEventListener("mouseover",function) {
    elementoBotao.innerHTML = "Mouse em Cima"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"

})

elementoBotao.addEventListener("mouseout",function) {
    elementoBotao.innerHTML = "Mouse Fora"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"

})


