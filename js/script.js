// Comentário de linha em JS
/*
Comentário de Bloco
*/
//Mensagem de console vinda do arquivo externo JS
//console.log('Mensagem que veio do arquivo Externo.')
//document.write('Escrevendo uma mensagem com documento!')

//Declaração de variáveis com VAR.
//Basicamente o que se tem com o var é o escopo aumentado.

/*

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
elementoBotao.addEventListener("click",function() {
    elementoBotao.innerHTML = "Ui, fui Clicado!"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"

})

elementoBotao.addEventListener("mouseover",function() {
    elementoBotao.innerHTML = "Mouse em Cima"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"

})

elementoBotao.addEventListener("mouseout",function() {
    elementoBotao.innerHTML = "Mouse Fora"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"

})

*/

//var nome = "Marco"

//ARRAY - Vetores
var nomes = ["Marco", "Carlos", "João", "Maria"]

//Acessando um elemento Array
console.log ("Conteúdo do Array: " + nomes[0])

//Tamanho do array
console.log("Tamanho do array: " + nomes.length)

//Adicionando elementos ao inicio do array
nomes.unshift("Wolverine")
console.log("Conteúdo do array: " + nomes[0])

//Adicionando elementos ao final do array
nomes.push("Marco")
console.log("Conteúdo do array: " + nomes[4])

//Removendo os elementos do inicio do array
nomes.shift()
console.log("Conteúdo do array: " + nomes[3])

//Removendo os elementos do final do array
nomes.pop()
console.log("Conteúdo do array: " + nomes[3])

//Localizando um elemento no array
console.log("Localizando um elemento no array: " + nomes.indexOf ("Carlos"))

//Removendo um elementos do array com localização
nomes.splice(2,1)
console.log("Conteúdo do array: " + nomes[3])

//Removendo um elementos do array com indexOf
let posicao = nomes.indexOf ("João")
nomes.splice(posicao,1)

//Iterando um Array
//for(let i = 0; i < 10; i++){
//    console.log("Valor de i: " + i)
//}

//Iterando um Array
for(let i = 0; i < nomes.length; i++){
    console.log("Valor de nomes: " + nomes[i])
}
    
var pessoa = {
nome : "",
sobrenome : "",
idade : "",

}

//LOOP FOR OF - Iterando um array
for(let nome of nomes){
    pessoa.nome = nome
    console.log("Valor de nomes: " + nomes)
}

//FOR IN - Iterando um objeto
for(let indice of nomes){
    console.log("Valor de pessoas: " + nomes[indice])
}


