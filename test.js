const prompt = require("prompt-sync")()
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let listaDeOpcoes = []
let opcao = ""
function opcoes() {
    let unidadeDeMedida = ""
    while (true) {
        unidadeDeMedida = prompt("qual o nome da unidade de medida?")
        if (listaDeOpcoes.some(item => item.includes(unidadeDeMedida))) {
            console.log("você ja inseriu esse nome!")
        }
        else {
            break
        }
    }
    for (let i = 0; i < alfabeto.length * 3; i++) {
        if (i < alfabeto.length) {
            opcao = alfabeto[i] + ") " + unidadeDeMedida
            if (listaDeOpcoes.some(item => item.startsWith(opcao[0]))) {
                continue
            }
            else {
                listaDeOpcoes.push(opcao)
                break
            }
        }
        else if (i >= alfabeto.length) {
            if (i < alfabeto.length * 2) {
                for (let j = 0; j < alfabeto.length; j++) {
                    opcao = alfabeto[i - alfabeto.length] + alfabeto[j] + ") " + unidadeDeMedida
                    let letras = alfabeto[i - alfabeto.length] + alfabeto[j]
                    if (listaDeOpcoes.some(item => item.startsWith(letras))) {
                        continue
                    }
                    else {
                        listaDeOpcoes.push(opcao)
                        break
                    }
                }
                if (listaDeOpcoes.includes(opcao)) {
                    break
                }
            }
            else if (i >= alfabeto.length * 2) {
                for (let j = 0; j < alfabeto.length; j++) {
                    for (let k = 0; k < alfabeto.length; k++) {
                        opcao = alfabeto[i - alfabeto.length * 2] + alfabeto[j] + alfabeto[k] + ") " + unidadeDeMedida
                        let letras = alfabeto[i - alfabeto.length * 2] + alfabeto[j] + alfabeto[k]
                        if (listaDeOpcoes.some(item => item.startsWith(letras))) {
                            continue
                        }
                        else {
                            listaDeOpcoes.push(opcao)
                            break
                        }
                    }
                    if (listaDeOpcoes.includes(opcao)) {
                        break
                    }
                }
                if (listaDeOpcoes.includes(opcao)) {
                    break
                }
            }
        }
    }
    console.log("Lista de unidade de medidas feitas pelo o usuario")
    for (let i = 0; i < listaDeOpcoes.length; i++) {    
        console.log(listaDeOpcoes[i])
    }
}