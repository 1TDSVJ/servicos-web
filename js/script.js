//Mensagem em linha
/*
   mensagem em bloco
*/
//Mensagem de console vinda do arquivo externo JS
// console.log("Mensagem que veio do arquivo externo")
// document.write("Wscrevendo com document!")


//Declaração de variáveis com var.
//Basicamente o que se tem com var é o escopo aumentado.
var nome = "Lucas"
//utilize para concatenação o símbolo +
console.log("Meu nome é : " + nome)

function sobrenome(){
    //Declaração de variáveis com let é restrita a escopos menores.
    let snome = "Guerra"
    console.log("Meu sobrenome : " + snome)
    console.log("Nome completo : " + nome + " " + snome)
}
sobrenome()

//constantes em JS são muito utilizadas paea o armazenamnto de elemnentos, poruqe os elementos são imutáveis, mas os seus atributos não.
const elementoBotao = document.querySelector("#botao")

//Vamos atrelar uma fun;'ao de listener/escutador de eventos ao elemento e sempre que ocoorrer um evento, a função será executada.
//elementoBotao.addEvenetListener("evento", ação que pode ser uma função, mensagem ou uma função anônima, etc!)
elementoBotao.addEventListener("click",function(){
    elementoBotao.innerHTML = "UI FUI CLICADO!"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"
})

elementoBotao.addEventListener("mouseover",function(){
    elementoBotao.innerHTML = "ME CLIQUE!"
    elementoBotao.style.height = "200px"
    elementoBotao.style.width = "200px"
})

elementoBotao.addEventListener("mouseout",function(){
    elementoBotao.innerHTML = "VOLTEI!"
    elementoBotao.style.height = "30px"
    elementoBotao.style.width = "60px"
})