//Comentário de linha em JS

/*
Comentário de bloco em JS
*/

//console.log('Mensagem que veio de arquivo externo')
//document.write('Mensagem escrita com document')

/* Declaração de variáveis com var
Basicamente é o escopo aumentado */
var nome = "Gustavo"
console.log('Meu nome é: ' + nome)

function sobrenome(){
    let snome = "Wuelta"
    console.log('Meu sobrenome é: ' + snome)
    console.log('Nome completo: ' + nome + " " + snome)
}
sobrenome()

//Constantes em JS são muito utilizadas para armazenar elementos pois seus atributos são imutáveis.

const elementoBotao = document.querySelector("#botao")

//função de listener para o elemento
//sempre que ocorrer um evento ele vai realizar uma ação
//elementoBotao.addEventListener('evento', AÇÃO que pode ser uma função, mensagem, etc!)

elementoBotao.addEventListener("click",function(){
    elementoBotao.innerHTML = "FUI CLICADO"
    elementoBotao.style.height = "60px"
    elementoBotao.style.width = "60px"
})

elementoBotao.addEventListener("mouseout",function(){
    elementoBotao.innerHTML = "MOUSE FORA"
    elementoBotao.style.height = "60px"
    elementoBotao.style.width = "60px"
})

elementoBotao.addEventListener("mouseover",function(){
    elementoBotao.innerHTML = "MOUSE EM CIMA"
    elementoBotao.style.height = "60px"
    elementoBotao.style.width = "60px"
})

