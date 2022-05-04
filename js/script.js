//Comentário de Linha em JS
/*
    Comentário de Bloco
*/
//Mensagem de console vinda do arquivo externo JS.
// console.log('Mensagem que veio do arquivo Externo.')
// document.write('Escrevendo uma mensagem com document!')


// Declaração de variáveis com var.
// Basicamente o que se tem com var é o escopo aumentado.
/*var nome = "Kauã"
utilize para concatenação o simbolo ( + )
console.log('Meu nome é : ' + nome)

function sobrenome(){
    //A declaração com let é restrita a escopo menores.
    let snome = "Borge"
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
})
// */


var nomes = ["Ale" ,"Carlos", "João", "Maria"]

// Acessando um elemento do Array
console.log("Conteudo do array: " + nomes[2])

//Tamanho do Array
console.log("Tamanho do array: " + nomes.length)

//Adicionando elementos ao final do Array
nomes.push("Pedro")
console.log("Conteúdo do Array: " + nomes[4])

//Adicionando elementos ao começo do Array
nomes.unshift("Ana")
console.log("Conteúdo do array:" + nomes[0])

//removendo elementos do final do array
nomes.pop()
console.log("Conteúdo do array:" + nomes[3])

//Removendo elementos do inicio do Array
nomes.shift()
console.log("Conteúdo do array:" + nomes[0])

//localizando um elemento no Array
console.log("Localizando um elemento no array : " + nomes.indexOf ("Carlos"))

//Removendo um elemento do Array com localização
let posicao = nomes.indexOf("João")
nomes.splice(posicao,1)

//Interando um Array
for(var i=0; i <nomes.length; i++){
    console.log("Nome: "+ nomes[i])
}

//Objeto -JSON
var pessoa = {
    nome: "",
    sobrenome: "",
    idade: "",

}

// LOOP FOR OF - Interando um array
for(let nome of nomes){
    pessoa.nome = nome
    console.log("Valor de nomes: " +nome)
}
//For IN - Interando um objeto
for(let indice in nomes){
    console.log("Valor de pessoa :" +nomes[indice])
}
