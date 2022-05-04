//Mensagem de console vinda do arquivo externo JS.
//console.log('Mensagem que veio do arquivo Externo.')
//document.write('Escrevendo uma mensagem com document!')

/*
// Declaração de variáveis com var.
// Basicamente o que se tem com var é o escopo aumentado. 
var nome = "Alê"
//utilize para concatenação o simbolo ( + )
console.log('Meu nome é: ' + nome)

function sobrenome(){
    //A declaração com let é restrita a escopo menores.
    let snome = "Carlos"
    console.log('Meu sobrenome: ' + snome)
    console.log('Nome Completo: ' + nome + " " + snome)
}

sobrenome()

//Constantes em JS são muito utilizadas para o armanezamento de
//elementos, porque os elementos são imutaveis, mas os seus atributos não.

const elementoBotao = document.querySelector("#botao")

//Vamos trellar uma funçao de listener/escutador de eventos ao elemento
// semore que ocorrer um evento ele vai realizar aum ação.
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
*/

//ARRAYS - Vetores
var nomes = ["Alê", "Carlos", "João", "Maria"]

//Acessando um elemento do array
console.log("Conteúdo do array : " + nomes[0])

//Tamano do array
console.log("Tamanho do array : " + nomes.lengt)

//Adicionand elementos ao fianl do array
nomes.push("Ciclano")
console.log("Conteúdo do array : " + nomes[4])

//Adicionand elementos ao inicio do array
nomes.unshift("Luffer")
console.log("Conteúdo do array : " + nomes[0])

//Removendo elemenos do final do array
nomes.pop()
console.log("Conteúdo do array : " + nomes[4]) 

//Removendo elemenos do inicio do array
nomes.shift()
console.log("Conteúdo do array : " + nomes[0])

//Localizando um elemento no array
console.log("Localizando um elemento no array: " + nomes.indexOf("Carlos"))


//Removendo um elemento do arra com localização
let posicao = nomes.indexOf("João")
nomes.splice(posicao,1)


//Iterando um array
for(let i = 0; i < nomes.length; i++){
    console.log("Nomes : " + nomes[i])
}

//Objeto - JSON
var pessoa = {
    nome : "",
    sobrenome : "",
    idade : "",
}

//LOOP FOR OF - Iterando um array
for(let nome of nomes){//nome é um elemento do array

    //Objeto - JSON
    var pessoa = {
        nome : "",
        sobrenome : "",
        idade : "",
    }

    pessoa.nome = nome

    console.log("Valor de nomes : " + nome)

}

//FOR IN - Iterando um objeto
for(let indice in nomes){//indice é um indice do array
    console.log("Valor de pessoa : " + nomes[indice])
}

