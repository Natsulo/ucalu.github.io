const botao = document.querySelector("button")
const body = document.body
const h1 = document.querySelector("h1")
botao.addEventListener("click", function() {
    body.style.backgroundColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
    h1.style.color = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
    botao.style.backgroundColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
    botao.style.borderColor = `rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`
    h1.style.position = "absolute"
    h1.style.left = `${Math.floor(Math.random() * 101)}%`
    h1.style.top = `${Math.floor(Math.random() * 101)}%`
})

const chaves = document.getElementById("chaves")
chaves.addEventListener("click", function() {
    alert("nunca vao ao rio grande do sul pior erro da minhha vida")
})