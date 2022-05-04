//Mensagem em linha
/*
   mensagem em bloco
*/
//Mensagem de console vinda do arquivo externo JS
// console.log("Mensagem que veio do arquivo externo")
// document.write("Wscrevendo com document!")

/*

//Declaração de variáveis com var.
//Basicamente o que se tem com var é o escopo aumentado.
var nome = "Lucas"
//utilize para concatenação o símbolo +
console.log("Meu nome é : " + nome)

function sobrenome(){
    //Declaração de variáveis com let é restrita a escopos menores.
    let snome = "Guerra"
    console.log("Meu sobrenome : " + snome)
    console.log("Nome completo : " + nome + " " + snome)
}
sobrenome()

//constantes em JS são muito utilizadas paea o armazenamnto de elemnentos, poruqe os elementos são imutáveis, mas os seus atributos não.
const elementoBotao = document.querySelector("#botao")

//Vamos atrelar uma fun;'ao de listener/escutador de eventos ao elemento e sempre que ocoorrer um evento, a função será executada.
//elementoBotao.addEvenetListener("evento", ação que pode ser uma função, mensagem ou uma função anônima, etc!)
elementoBotao.addEventListener("click",function(){
    elementoBotao.innerHTML = "UI FUI CLICADO!"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"
})

elementoBotao.addEventListener("mouseover",function(){
    elementoBotao.innerHTML = "ME CLIQUE!"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"
})

elementoBotao.addEventListener("mouseout",function(){
    elementoBotao.innerHTML = "VOLTEI!"
    elementoBotao.style.height = "30px"
    elementoBotao.style.width = "60px"
})
*/

//var nome = "Lucas"

//Arrays - Vetores /Vetores são arrays que podem armazenar qualquer tipo de dado.
var nomes = ["Lucas", "João", "Pedro", "Gustavo"]

//Acessando um elemento do array
console.log("Conteúdo do Array: " + nomes[0])

//Tamanho do Array
console.log("Tamanho do Array: " + nomes.length)

//Adicionando elementos no final do array
nomes.push("Alberto")
console.log("Conteúdo do Array: " + nomes[4])

//Adicionando elementos no início do array
nomes.unshift("Ana")
console.log("Conteúdo do Array: " + nomes[0])

//Removendo elementos do final do array
nomes.pop()
console.log("Conteúdo do Array: " + nomes[3])

//Removendo elementos do início do array
nomes.shift()
console.log("Conteúdo do Array: " + nomes[0])

//Localizando um elemento no array
console.log("Localização do elemento: " + nomes.indexOf("Pedro"))

//Removendo elementos de um índice específico
let posicao = nomes.indexOf("Pedro")
nomes.splice(posicao, 1)
console.log("Conteúdo do Array: " + nomes[1])

//Iterando um Array
for(let i = 0; i < nomes.length; i++){
    console.log("Nome: " + i + " " + nomes[i])
}

//Loop For Of - Iterando um Array
for(let nome of nomes){//nome é um elemento do array
    console.log("Valor de nomes: " + nome)
}

//Loop For In - Iterando um Objeto
for(let indice in nomes){//indice é um indice do array
    console.log("Valor de pessoa: " + nomes[indice])
}