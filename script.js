const botao = document.getElementById("botaowo")
const body = document.body
botao.addEventListener("click", function () {
    body.style.backgroundColor = `${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
})