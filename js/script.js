/**
//* declaração de variável
var nome = "Leo"

//* console.log mostra no console
console.log('Meu nome é: ' + nome)   

//* declaração de função
//* let também é declaração de variável porem é mais utilizado para escopos menores
function sobrenome(){
    let snome = "Ramos"
    console.log('Meu sobrenome é: ' + snome)
    console.log('Nome completo: ' + nome + " " + snome)
}

sobrenome()
//* document faz referência a todo o arquivo HTML e a função .querySelector serve para selecionar um elemento
const elementoBotao = document.querySelector("#botao")

elementoBotao.addEventListener("click", function(){
    elementoBotao.innerHTML = "UI, FUI CLICADO!"
})

elementoBotao.addEventListener("mouseover", function(){
    elementoBotao.innerHTML = "SAI DE CIMA"
})

elementoBotao.addEventListener("mouseout", function(){
    elementoBotao.innerHTML = "Pera volta aqui ;_;"
}) */

//* Array - Vetores:
var nomes = ["Alê", "Leo", "Rafa", "Diogo", "Heitor", "Mateus"]

//* Acessando um elemento do Array:
console.log(nomes[1])

//* Iterando um Array:
for(let i = 0; i < nomes.length; i++){
    console.log("Nome: " + nomes[i])
}

//* Tamanho do Array:
console.log("Tamanho do array: " + nomes.length)

//* Adicionando elementos ao final do Array: 
nomes.push("Pepino do Kuduairo")
console.log(nomes)

//* Adicionando elementos ao começo do Array: 
nomes.unshift("Bailarino do Kuduairo")
console.log(nomes)

//* Removendo elementos ao final do Array:
nomes.pop()
console.log(nomes)

//* Removendo elementos ao começo do Array:
nomes.shift()
console.log(nomes)

//* Localizando elementos no Array:
console.log("Localizando um elemento no array: " + nomes.indexOf("Leo"))

//* Removendo um elemento do Array com localização - indexOf: 
let posicao = nomes.indexOf("Alê")
nomes.splice(posicao, 1)
console.log(nomes)

//* Objeto - JSON:
var Pessoa = {
    nome: "",
    sobrenome: "",
    idade: "",
}

//* Loop for of:
for(let nome of nomes){
    
    console.log("Valor de nomes: " + nome)
}

//* Loop for in:
for(let indice in nomes){
    console.log("Valor de nomes: " + nomes[indice])
}