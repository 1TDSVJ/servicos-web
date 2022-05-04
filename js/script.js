//Comentário de Linha em JS
/*
    Comentário de Bloco
*/
//Mensagem de console vinda do arquivo externo JS.
// console.log('Mensagem que veio do arquivo Externo.')
// document.write('Escrevendo uma mensagem com document!')


// Declaração de variáveis com var.
// Basicamente o que se tem com var é o escopo aumentado.
/*var nome = "Alê"
//utilize para concatenação o simbolo ( + )
console.log('Meu nome é : ' + nome)

function sobrenome(){
    //A declaração com let é restrita a escopo menores.
    let snome = "Carlos"
    console.log('Meu sobrenome : ' + snome )
    console.log('Nome completo : ' + nome + " " + snome)
    
}
sobrenome()
//console.log('Descobri seu sobrenome : ' + snome)

//Constantes em JS são muito utilizadas para o armazenamento de
//elementos, porque os elementos são imutaveis, mas os seus atributos não.
const elementoBotao = document.querySelector("#botao")

//Vamos atrellar uma funçao de listener/escutador de eventos ao elemento e
// sempre que ocorrer um evento ele vai realizar uma ação.
//elementoBotao.addEventListener('evento',AÇÃO que pode ser uma função, mensagem, função anônima etc!)
elementoBotao.addEventListener("click",function(){
    elementoBotao.innerHTML = "UI, FUI CLICADO!"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"
})

elementoBotao.addEventListener("mouseover",function(){
    elementoBotao.innerHTML = "MOUSE EM CIMA"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"
})

elementoBotao.addEventListener("mouseout",function(){
    elementoBotao.innerHTML = "MOUSE FORA"
    elementoBotao.style.height = "50px"
    elementoBotao.style.width = "100px"
})*/

//ARRAY - Vetores
var nomes = ["Lu", "Mitsudo", "Luana", "Coelho"]


//Acessando um elemento do array
console.log(nomes[2])

//Adicionando elemento ao final do array
nomes.push("Pedro")
console.log(nomes[4])

//Adicionando elemento ao inicio do array
nomes.unshift("Ana")
console.log(nomes[0])

//Removendo elemento do final do array
nomes.pop()
console.log(nomes[3])

//Removendo elemento do inicio do array
nomes.shift()
console.log(nomes[0])

//Localizando um elemento no array
console.log(nomes.indexOf("Mitsudo"))

//Removendo um elemento do array com localização
let posicao = nomes.indexOf("João")
nomes.splice(posicao, 1)

//Iterando um array
for(var i = 0; i <nomes.length; i++){
    console.log("Nome: " + nomes[i])
}

//for of
for(let nome of nomes){
    console.log(nome)
}

//for in (indice)
for(let indice in nomes){
    console.log(nomes[indice])
}