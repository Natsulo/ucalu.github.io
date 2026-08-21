const botao = document.getElementById("botaowo")
botao.addEventListener("click", function () {
    document.body.style.backgroundColor = `${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
})