//Comentario de linha em JS
/* 
    Comentario de bloco 
*/
//Mensagem de console vinda do arquivo externo JS.
//console.log('Mensagem que veio do arquivo externo.')
//document.write('Escrevendo uma mensagem com document!.')

//Declaração de variaveis com var.
//Basicamente o que se tem com var é o escopo aumentado
var nome = "Pedro"
//utilize para concatenação o simbulo (+)
console.log('Meu nome é: '+ nome)

function sobrenome(){
    //A declaração com let é restrita a escopo menores 
    let snome = "Chueiri"
    console.log('Meu sobrenome:' + snome)
    console.log('Nome completo :'+ nome + " " + snome)
    alert('TESTE')
}
sobrenome
//consele.log('Descobri seu sobrenome :' = snome)

//Constantes em JS sãp muito utilizadas para o armazenamento de 
//elementos, porque os elementos sao imutaveis, mas os seus atibutos não.
const elementoBotao = document.querySelector("#botao")

//vamos atrellar uma dunçao de listener/escutador de eventos ao elemento
// sempre que ocorrer um evento ele vai realizar uma ação.
// elementoBotao.addEventListener('evento',AÇÂO que pode ser uma função, mensagem, função anônima etc!)
elementoBotao.addEventListener("CLICK",function(){
    elementoBotao.innerHTML = "UI,fui clicado "
    elementoBotao.style.width = "100px"
    elementoBotao.style.height = "100px"
})

elementoBotao.addEventListener("mouseover",function(){
    elementoBotao.innerHTML = "MOUSE EM CIMA "
    elementoBotao.style.width = "200px"
    elementoBotao.style.height = "200px"
})

elementoBotao.addEventListener("mouseout",function(){
    elementoBotao.innerHTML = "MOUSE FORA "
    elementoBotao.style.width = "50px"
    elementoBotao.style.height = "50px"
})









