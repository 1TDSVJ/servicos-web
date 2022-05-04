//Comentários de linha em js
/*
Comentário de Bloco
*/
//Mensagem de console vinda do arquivo externo js
//console.log('Mensagem que veio do arquivo Externo')
//document.write('Escrevendo uma mensagem com document!')

//Declaração variavel com var
/*
var nome = "Heitor"
console.log("Meu nome é : " + nome)

function sobrenome(){
    //A declaração com let é restrita a escopo menores.
    let snome = 'Borba'
    console.log('Meu sobrenome é: ' + snome)
    console.log('Nome completo: ' + nome + " " + snome)
    alert('TESTE')
}

sobrenome()
//console.log('Descobri seu sobrenome: ' + snome)

//Constantes em JS  são muito utilizadas para o armazenamento de elementos, porque os elementos são inuteis, mas seus atributos não

const elementoBotao = document.querySelector('#botao')

//Vamos atrellar uma funcão de listener/ escutador de eventos ao elemento e sempre que ocorrer um eventoo ele vai realizar uma ação.
//elementoBotao('evento', Ação que pode ser uma função, mensagem, função anonima e etc)
elementoBotao.addEventListener("click", function(){
    elementoBotao.innerHTML = 'Fui clicado'
    elementoBotao.style.height = '200px'
    elementoBotao.style.width = '200px'
})

elementoBotao,addEventListener('mouseover', function(){
    elementoBotao.innerHTML = "Mouse em cima"
    elementoBotao.style.height = '50px'
    elementoBotao.style.width = '100px'
})
elementoBotao,addEventListener('mouseout', function(){
    elementoBotao.innerHTML = "Mouse FORA"
    elementoBotao.style.height = '50'
    elementoBotao.style.width = '100px'
})
*/

//var nome = "Heitor "
//Array - Vetores
var nomes = ["Heitor", "Borba", "Marini"]

nomes.unshift('Mateus')
console.log("Conteudo do Array: " )

//Removendo elementos final do array
nomes.pop()
console.log('Conteudo Array: '+ nomes[3])
console.log("Tamanho do Array: " + nomes.length)

//Remover o primeiro
nomes.shift()
console.log("Conteudo array: "+ nomes[1])

//Localizando elementos array
console.log('Localizando um elemento no array: '+ nomes.indexOf('Heitor'))

//Remove elemento do array com localização
let posicao = nomes.indexOf('João')
nomes.splice(posicao,1)

//Interando um Array
for(let i = 0; i < nomes.length; i++){
    console.log("Nome: " + nomes[i])
}

//objeto - JSON

   


//LOOP FOR OF -Interando um array
for(let nome of nomes){//nome é um elemento do array
   
    var pessoa = {
        nome: "",
        sobrenome: "",
        idade: "",
    }
    pessoa.nome = nome
    console.log("Valor de nomes: " + nome)

   
}
//FOR IN -INterando um objeto
for(let indice in nomes){
    console.log('Valor da pessoa: ' + nomes[indice])
}
