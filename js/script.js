//Comentario de linha em JS
/* comentario de bloco
*/
//mensagem de console vinda do arquivo externo JS
//console.log('Mensagem que veio do arquivo externo.')
//document.write('Escrevendo uma mensagem com Document!')

//Declaracao de variaveis com var.
//Basicamente o que se tem com var e o escopo aumentado.

var nome = "Nicholas"
//utilize para concatenacao o simobolo (+)
console.log('Meu nome e : ' + nome)

function sobrenome(){
    //a declaracao com let e restrita a escopo menores.
    let snome = "Calegari"
    console.log('Meu sobrenome : ' + snome)
    console.log('Nome completo : ' + nome + " " +snome)
}
sobrenome()
//console.log('Descobri seu sobrenome : ' + snome)

//constantes em JS sao muito utilizadas para o armazenamento de
//elementos, porque os elementos sao imutaveis, mas os seus atributos nao.
const elementoBotao = document.querySelector("#botao")

//Vamos atrellar uma funcao de listener/escutador de eventos ao elemento e 
// sempre que ocorrer um evento ele vai realizar uma acao.
//elementoBotao.addEventListener('evento',ACAO que pode ser uma funcao, mensagem, funcao anonima etc!)
elementoBotao.addEventListener("click",function(){
    elementoBotao.innerHTML = "ui fui clicado"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"
})

elementoBotao.addEventListener("mouseover",function(){
    elementoBotao.innerHTML = "mouse em cima"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"
})

elementoBotao.addEventListener("mouseout",function(){
    elementoBotao.innerHTML = "mouse fora"
    elementoBotao.style.height = "20px"
    elementoBotao.style.width = "20px"
})
