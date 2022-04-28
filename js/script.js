var nome = "Leo"

console.log('Meu nome é: ' + nome)   

function sobrenome(){
    let snome = "Ramos"
    console.log('Meu sobrenome é: ' + snome)
    console.log('Nome completo: ' + nome + " " + snome)
}

sobrenome()

const elementoBotao = document.querySelector("#botao")

elementoBotao.addEventListener("click", function(){
    elementoBotao.innerHTML = "UI, FUI CLICADO!"
})

elementoBotao.addEventListener("mouseover", function(){
    elementoBotao.innerHTML = "SAI DE CIMA"
})

elementoBotao.addEventListener("mouseout", function(){
    elementoBotao.innerHTML = "Pera volta aqui ;_;"
})