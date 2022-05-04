//Comentário de linha em JS

/*
Comentário de bloco em JS
*/

//console.log('Mensagem que veio de arquivo externo')
//document.write('Mensagem escrita com document')

/* Declaração de variáveis com var
Basicamente é o escopo aumentado */
/*
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

*/

//var nome = "Gustavo"

//ARRAY - Vetores
var nomes = ["Gustavo", "Carlos", "João", "Maria"]

//Acessando um elemento do array
console.log("Conteúdo do array : " + nomes[2])

//Tamanho do array
console.log("Tamanho do array : " + nomes.length)

//Adicionando elementos ao final do array
nomes.push("Pedro")
console.log("Conteúdo do array : " + nomes[4])

//Adicionando elementos ao inicio do array
nomes.unshift("Ana")
console.log("Conteúdo do array : " + nomes[0])

//Removendo elementos do final do array
nomes.pop()
console.log("Conteúdo do array : " + nomes[3])

//Removendo elementos do inicio do array
nomes.shift()
console.log("Conteúdo do array : " + nomes[0])

//Localizando um elemento no array
console.log("Localizando um elemento no array : " + nomes.indexOf
("Carlos"))

//Removendo um elemento do array com Localização
let posicao = nomes.indexOf("João")
nomes.splice(posicao,1)
console.log("Conteúdo do array : " + nomes[2])

//Iterando um array
for(let i = 0; i < nomes.length; i++){
    console.log("Nome : " + nomes[i])
}

//LOOP FOR OF - Interando um array
for(let nome of nomes){ //nome e um elemento do array
    //Objeto - JSON
var pessoa = {
    nome : "",
    sobrenome : "",
    idade : "",
}
    pessoa.nome = nome
    console.log("Valor de nomes: " + nome)
}

//FOR IN - Iterando um objeto
for(let indice in nomes){ //indice é um elemento do objeto
    console.log("Valor de pessoa : " + nomes[indice])
}