const botao = document.querySelector("button")
const body = document.body
const h1 = document.querySelector("h1")
botao.addEventListener("click", function() {
    body.style.backgroundColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
    h1.style.color = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
    botao.style.backgroundColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
    botao.style.borderColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
    h1.style.position = `bottom: ${Math.floor(Math.random() * 151)} px`
    h1.style.position = `left: ${Math.floor(Math.random() * 151)} px`
    h1.style.position = `right: ${Math.floor(Math.random() * 151)} px`
    h1.style.position = `top: ${Math.floor(Math.random() * 151)} px`
})