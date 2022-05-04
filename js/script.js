//Comentario de linha em JS
/* 
    Comentario de bloco 
*/
//Mensagem de console vinda do arquivo externo JS.
//console.log('Mensagem que veio do arquivo externo.')
//document.write('Escrevendo uma mensagem com document!.')
/*
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

*/

//var nome = "Pedro" 

//ARRAY - Vetores
var nomes = ["Pedro","João","Maria","José"]

//Acessando um elemento do array
console.log("Conteudo do array: " + nomes[0])

//tamanho do array
console.log("Tamanho do array: " + nomes.length)

//Adicionando um elemento ao final do  array
nomes.push("Fulano")
console.log("Conteudo do array: " + nomes[4])

//Adicionando um elemento ao inicio do array
nomes.unshift("Ciclano")
console.log("Conteudo do array: " + nomes[0])

//Removendo um elemento do array
nomes.pop()
console.log("Conteudo do array: " + nomes[3])

//Removendo um elemento do inicio do array
nomes.shift()
console.log("Conteudo do array: " + nomes[0])

//localizando um elemento no array
console.log("Localizando um elemento no array: " + nomes.indexOf
("Maria")) 

//removendo um elemento do array com localização
let posicao = nomes.indexOf("Maria")
nomes.splice(posicao,1)


//Loop For OF - Iterando um array
for(let nome of nomes){ //i é o indice do array e nomes é o valor do array
    console.log("Valor de Nome : " + nomes[nome])
}

//FOR in - Iterando um Objeto
for(let indice in nomes){
    console.log("Valor de Pessoa : " + nomes[indice])
}


//Iterando um array
for(let i = 0; i < nomes.length; i++){
    console.log("Valor de Nome : "+ nomes[i])
}







