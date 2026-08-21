const botao = document.getElementById("botaowo")
const body = document.body
botao.addEventListener("click", function () {
    document.body.style.backgroundColor = `${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
})