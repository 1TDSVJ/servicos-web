//Comentário de Linha em JS
/*
    Comentário de Bloco
*/
//Mensagem de console vinda do arquivo externo JS.
// console.log('Mensagem que veio do arquivo Externo.')
// document.write('Escrevendo uma mensagem com document!')

/*
// Declaração de variáveis com var.
// Basicamente o que se tem com var é o escopo aumentado.
var nome = "Alê"
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
})

*/

//ARRAYS - vetores
var nome = "rafael"

var nomes = ["rafael", "luana", "maria", "zé"]
//Acessado um elemeno de um array
console.log("Coteudo do array: " + nomes[0])

//tamanho do array
//nomeDoArray.length

//adicionando elementos nao final do array
nomes.push("pedro")
console.log("conteudo do array: " + nomes[4])

//adicinando elements ao inicio do array
nomes.unshift("ana")
console.log("conteudo do array: " + nomes[0])

//removendo os elementos do final do array
nomes.pop()
console.log("conteudo do array: " + nomes[3])

//removendo elementos do inicio do array
console.shift()
console.log("conteudo do array: " + nomes[0])

//localizando um elemento no array
console.log("Localizado m elemento no array: " + nomes.indexOf("rafael"))

//removendo um elemento do array com indexOf/localização
let posicao = nomes.length("rafael")
nomes.splice(posicao,1)


//Interando um array
for(let i = 0; i < nomes.length; i++) {
    console.log("Nomes: " + nomes[i])
}

//looping proprios para array
//loop for of - interando array
//ele adiciona a variavel nome ao valor de cada posição do array nomes. resultado igual a aterior 
for(let nome of nomes) {//retorna o valor do array
    console.log("Valor de nomes: " + nome)
}

//for in  interando um objeto
for(let indice in pessoa){//retorna o indice do array
    console.log("VAlor de pessoa: " + nome[indice])
}


