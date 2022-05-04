// Comentário de linha em JS
/*
    Comentário de bloco em JS
*/
//Mensagem de console vinda do arquivo externo JS.
//console.log('Mensagem que veio do arquivo Externo.')
//document.write('Escrevendo uma mensagem com documet!') // document -> gerencia todos os objetos dentro do DOM (É o HTML, dentro dele pode-se ter acesso as tags).

/*

// Declarando variáveis com var.
// Basicamente o que se tem com var é o escopo aumentado.
var nome = "Alê" // var pode ser declarado e utilizado no escopo global(dentro de qualquer local do documento(dentro e fora de estruturas))
// Utilize para concatenação o símbolo (+)
console.log('Meu nome é : ' + nome)

function sobreNome() {
    let snome = "Carlos"// o let não pode ser usado fora da função(escopo menor: function, while, if, for.) em que foi criado.
    console.log('Meu sobrenome : ' + snome)
    console.log('Nome completo : ' + nome + " " + snome)
    //alert('TESTE') cria um alerta na tela
}
sobreNome()
// console.log('Descobri seu sobrenome : ' + snome) // MÉTODO ERRADO(let sendo usado foara do escopo menor)

// variável Constante = imutável. Atribuindo um elemento HTML ao const, pois os elementos são imutáveis, mas seus atributos não.
const elementoBotao = document.querySelector("#botao")

//Analisando uma função de listener/escutador de eventos ao elemento e sempre que ocorrer um evento ele vai realizar uma ação.
//addEventListener("evento". AÇÃO que pode ser uma função, mensagem, função anônima etc)
elementoBotao.addEventListener("click", function(){
    elementoBotao.innerHTML = "UI, FUI CLICADO!"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"
})// função anônima (mais comum)

elementoBotao.addEventListener("mouseover", function(){
    elementoBotao.innerHTML = "MOUSE EM CIMA"
    elementoBotao.style.height = "50px"
    elementoBotao.style.width = "100px"
})

elementoBotao.addEventListener("mouseout", function(){
    elementoBotao.innerHTML = "MOUSE FORA"
    elementoBotao.style.height = "50"
    elementoBotao.style.width = "100px"
})

*/

//var nome = "Alê"
var nomes = ["Alê", "Diogo", "Mateus", "Heitor"]

//Adicionando elementos ao final do array
nomes.push("Brando")
console.log("Conteúdo do array: " + nomes[4])

//Adicionando elementos ao inicio do array
nomes.unshift("Jo")
console.log("Conteúdo do array: " + nomes[0] )

//Removendo elementos do final do array
nomes.pop()
console.log("Conteúudo do array: " + nomes[3])

//Removendo elementos do inicio do array
nomes.shift()
console.log("Conteúudo do array: " + nomes[0])

//Localizando um elemento no array
console.log("Localizando um elemento no array: " + nomes.indexOf("Diogo"))

//Removendo um elemento do array com localização
let posicao = nomes.indexOf("Diogo")
nomes.splice(posicao,1)

//Iterando um array
for(let i = 0; i< nomes.length ; i++){
   console.log("Nome: " + nomes[i])
}

// Loop For Of - Iterando um array
for(let nome of nomes){ // nome é um elemento do array
    console.log("Valor de nomes: " + nome)
}

// For In - Iterando um objeto
for(let indice in nomes){ //indice é um indice do array
    console.log("Valor de pessoa: " + nomes[indice])
}