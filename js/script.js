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
var nome = "Jerinelso" // var pode ser declarado e utilizado no escopo global(dentro de qualquer local do documento(dentro e fora de estruturas))
// Utilize para concatenação o símbolo (+)
console.log('Meu nome é : ' + nome)

function sobreNome() {
    let snome = "o Sábio"// o let não pode ser usado fora da função(escopo menor: function, while, if, for.) em que foi criado.
    console.log('Meu sobrenome : ' + snome)
    console.log('Nome completo : ' + nome + ", " + snome)
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

var nome = ["Mateus"]

//Arrays - Vetores
var nomes = ["Mateus", "Diogo", "Heitor", "Igor"]

//Acessando um elemento do array
for (let i = 0; i < nomes.length; i++){
    console.log("Conteúdo do array: " + nomes[i])
}
//Tamanho do array
console.log("Conteúdo do array: " + nomes.length)

//Adicionando elementos ao final do array
nomes.push("Jerinelso")
console.log("Conteúdo do array: " + nomes [4])

//Adicionando elementos ao inicio do array
nomes.unshift("Kleitin")
console.log("Conteúdo do array: " + nomes [0])

//Removendo elementos ao final do array
nomes.pop("Jerinelso")
console.log("Conteúdo do array: " + nomes [4])

//Removendo elementos ao início do array
nomes.shift("Kleitin")
console.log("Conteúdo do array: " + nomes [0])

//Localizando elemento no array
console.log("Localizando um elemento no array: " + nomes.indexOf
("Heitor"))

//Removendo elemento do array com localização
let position = nomes.indexOf("Heitor")
nomes.splice(position,1)

//Iterando um array
for(let i=0; i<nomes.length; i++){
    console.log("Valor de nomes 1.0: " + i)
}

//LOOP FOR OF -Iterando um array
for(let nome of nomes){//nome é um elemento do array
    console.log("Valor de nomes 2.0: " + nome)
}

//FOR IN -Iterando um objeto
for(let indice of nomes){//indice é um indice do array
    console.log("Valor de nomes 2.0: " + nome[indice])
]