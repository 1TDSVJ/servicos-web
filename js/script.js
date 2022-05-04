//* ARAYS:
var nomes = ["Rafael", "Ramos", "Costa"]

//* Acessando um elemento do array
console.log("Conteúdo do array: " + nomes)

//* Tamanho do array:
console.log("Comprimento do array: " + nomes.length)

//* Adicionando elementos no final do array
nomes.push("Matui")
console.log("Conteúdo do array após o .push: " + nomes)

//* Adicionando elementos no início do array
nomes.unshift("Pepino")
console.log("Conteúdo do array após o .unshift: " + nomes)

//* Removendo elementos no final do array
nomes.pop()
console.log("Conteúdo do array após o .pop: " + nomes)

//* Removendo elementos no início do array
nomes.shift()
console.log("Conteúdo do array após o .shift: " + nomes)

//* Localizando um elemento do array
console.log("Localizando um elemento no array: " + nomes.indexOf("Rafael"))

//* Removendo um elemento do array com localização
let posicao = nomes.indexOf("Ramos")
nomes.splice(posicao, 1)

//* Iterando um array
for (let i = 0; i < nomes.length; i++) {
    console.log("Nome: " + nomes[i])
}



//* Loop for of
for (let nome of nomes){
    var pessoa = {
        nome : "",
        sobrenome: "",
        idade: "",
    }
    pessoa.nome = nome
    console.log("Valor de nomes: " + nome)
}

//* Loop for in
for(let indice in nomes){
    console.log("Valor de nomes: " + nomes[indice])
}























/** 
// console.log imprime no terminal 
console.log('Mensagem que veio do arquivo externo.')

// declaração de variável
var nome = 'Rafa'
console.log('Meu nome é: ' + nome)

// declaração de função, (let) declara uma variável que só pode ser usada dentro da função
function sobrenome(){
    let vSobrenome = 'Ramos Costa'
    console.log('Seu sobrenome é: ' + vSobrenome)
}

// document faz referência a todo o html e document.query.Selector é a função para selecionar um elemento do html
const botao = document.querySelector("#botao")

botao.addEventListener("click", function() {
    botao.innerHTML = "Ui, fui clicadu!"
    botao.getElementsByClassName.height = "100px"
})

botao.addEventListener("mouseover", function() {
    botao.innerHTML = "Sai de cima!"
})

botao.addEventListener("mouseout", function() {
    botao.innerHTML = "Volta aqui ;-;!"
})
*/


