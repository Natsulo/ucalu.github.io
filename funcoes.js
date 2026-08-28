const prompt = require("prompt-sync")()
const log = (base, numero) => Math.log(numero) / Math.log(base)
const fatorial =  n => {
  if (n < 0) return 
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}
function pergunta(saber) {
    if (saber == "sim" || saber == "ss" || saber == "s" || saber == "ye" || saber == "yes" || saber == "yea" || saber == "yeah" || saber == "siim" || saber == "sim") {
        return true
    }
    else if (saber == "nn" || saber == "n" || saber == "nao" || saber == "noup" || saber == "nah" || saber == "nahh" || saber == "não" || saber == "nop" || saber == "no") {
        return false
    }
}
function resolverExpressão() {
    console.log("instruções:\ndigite '+' para somar.\ndigite '-' para subtrair.\ndigite 'x', ou '*' para multiplicar, se não houver sinal entre número e parenteses, automaticamente irá se tornar uma multiplicação.\ndigite '/' para dividir.\ndigite '^' para elevar o numero anterior ao proximo número.\npara raizes utilize exponenciação com o segundo número sendo uma divisão ou multiplicação.\npara utilizar seno, cosseno e tangente, utilize, respectivamente: 'sen', 'cos', 'tan'.\nuse 'arsen', 'arccos' e 'arctan' para o inverso de seno cosseno e tangente, respectivamente.\ndigite 'log' em seguida o numero da base, e após isso o numero, se não tiver um proximo numero, ele ira considerar que o numero posto é um numero normal e a base vai ser 10.\npara parenteses, colchetes e chaves, ultilize como quiser.\nfatorial é feito com 'fatorial' e o numero posterior.")
    let expressao = prompt("escreva sua expressão númerica")
    let expressuda = expressao.match(/\d+\.?\d*|arctan|arcsen|arccos|sen|cos|tan|log|fatorial|x|elevado a|raiz de|raiz|[+\-*/^()[\]{}!]/g)
    if (expressuda[0] === "") {
        expressuda.splice(0, 1) 
        }
        for (let i = 0; i < expressuda.length; i++) {
            if (expressuda[i] == "[" || expressuda[i] == "{") {
                expressuda.splice(i, 1, "(")
            }
            else if (expressuda[i] == "}"  || expressuda[i] == "]") {
                expressuda.splice(i, 1, ")")
            }

            if (expressuda[i - 1] == "(" && i == !NaN && expressuda[i + 1] == ")") {
                expressuda.splice(expressuda[i - 1], 3, expressuda[i])
            }
            if (expressuda[i] == "x") {
                expressuda.splice(i, 1, "*")
            }
            if (expressuda[i] == "elevado a") {
                expressuda.splice(i, 1, "^")
            }
            if (expressuda[i] == "raiz de") {
                expressuda.splice(i, 1, "raiz")
            }
        }
        for (let i = 0; i < expressuda.length; i ++) {
            if (expressuda[i] == "(" && !isNaN(expressuda[i - 1])) {
                expressuda.splice(i, 0, "*")
                i++
            }
            else if (expressuda[i] == "(" && expressuda[i - 1] == ")") {
                expressuda.splice(i + 1, 0, "*")
                i++
            }
            if (expressuda[i] == ")" && !isNaN(expressuda[i + 1])) {
                expressuda.splice(i + 1, 0, "*")
                i++
            }
            else if (expressuda[i] == ")" && expressuda[i + 1] == "(") {
                expressuda.splice(i + 1, 0, "*")
                i++
            }
            if (expressuda.length == 1) {
                console.log(Number(expressuda[0]))
                break
            }
        }
        while (expressuda.length > 1) {
            let inicio = expressuda.lastIndexOf("(")
            let fim = expressuda.indexOf(")", inicio)
            let listaExpressionista
            if (expressuda.includes("(")) {
                listaExpressionista = expressuda.slice(inicio + 1, fim)
                if (listaExpressionista.length == 1) {
                    expressuda.splice(inicio, fim - inicio + 1, listaExpressionista[0])
                }
            }
            else {
                listaExpressionista = expressuda
            }
            if (expressuda.length == 3 && expressuda.includes("(") && expressuda.includes(")")) {
                console.log(Number(listaExpressionista[0]))
                break
            }
            while (listaExpressionista.length > 1) {
                if (expressuda.includes("(") == false && expressuda.includes(")") == false) {
                    listaExpressionista = expressuda
                }
                while (listaExpressionista.includes("^") || listaExpressionista.includes("log") || listaExpressionista.includes("sen") || listaExpressionista.includes("cos") || listaExpressionista.includes("tan") || listaExpressionista.includes("arctan") || listaExpressionista.includes("fatorial") || listaExpressionista.includes("raiz")) {
                    for (let i = 0; i < listaExpressionista.length; i++) {
                        let dentroDoi = listaExpressionista[i]
                        if (!isNaN(dentroDoi)) {
                            listaExpressionista[i] = Number(dentroDoi)
                        }
                        else if (isNaN(dentroDoi)) {
                            if (dentroDoi == "^") {
                                if (listaExpressionista[i + 2] == "/") {
                                    let resultadoProcessual = listaExpressionista[i + 1] / listaExpressionista[i + 3]
                                    resultadoProcessual = Math.pow(listaExpressionista[i - 1], resultadoProcessual)
                                    listaExpressionista.splice(i - 1, 5, resultadoProcessual)
                                }
                                else if (listaExpressionista[i + 2] == "*") {
                                    let resultadoProcessual = listaExpressionista[i + 1] * listaExpressionista[i + 3]
                                    resultadoProcessual = Math.pow(listaExpressionista[i - 1], resultadoProcessual)
                                    listaExpressionista.splice(i - 1, 5, resultadoProcessual)
                                }
                                else {
                                let resultadoProcessual = Math.pow(listaExpressionista[i - 1], listaExpressionista[i + 1])
                                listaExpressionista.splice(i - 1, 3, resultadoProcessual)
                                }
                            }
                            else if (dentroDoi == "raiz") {
                                let resultadoProcessual = Math.pow(listaExpressionista[i + 1], 1/listaExpressionista[i - 1])
                                listaExpressionista.splice(i - 1, 3, resultadoProcessual)
                            }
                            else if (dentroDoi == "log") {
                                let resultadoProcessual = log(listaExpressionista[i + 1], listaExpressionista[i + 2])
                                if (isNaN(listaExpressionista[i + 2])) {
                                    resultadoProcessual = log(10, listaExpressionista[i + 1])
                                }
                                listaExpressionista.splice(i, 3, resultadoProcessual)
                            }
                            else if (dentroDoi == "sen") {
                                let resultadoProcessual = Math.sin(listaExpressionista[i + 1])
                                listaExpressionista.splice(i, 2, resultadoProcessual)
                            }
                            else if (dentroDoi == "cos") {
                                let resultadoProcessual = Math.cos(listaExpressionista[i + 1])
                                listaExpressionista.splice(i, 2, resultadoProcessual)
                            }
                            else if (dentroDoi == "tan") {
                                let resultadoProcessual = Math.tan(listaExpressionista[i + 1])
                                listaExpressionista.splice(i, 2, resultadoProcessual)
                            }
                            else if (dentroDoi == "arcsen") {
                                let resultadoProcessual = Math.asin(listaExpressionista[i + 1])
                                listaExpressionista.splice(i, 2, resultadoProcessual)
                            }
                            else if (dentroDoi == "arccos") {
                                let resultadoProcessual = Math.acos(listaExpressionista[i + 1])
                                listaExpressionista.splice(i, 2, resultadoProcessual)
                            }
                            else if (dentroDoi == "arctan") {
                                let resultadoProcessual = Math.atan(listaExpressionista[i + 1])
                                listaExpressionista.splice(i, 2, resultadoProcessual)
                            }
                            else if (dentroDoi == "fatorial") {
                                let resultadoProcessual = fatorial(listaExpressionista[i + 1])
                                listaExpressionista.splice(i, 2, resultadoProcessual)
                            }
                            else if (dentroDoi == "!") {
                                let resultadoProcessual = fatorial(listaExpressionista[i - 1])
                                listaExpressionista.splice(i, 2, resultadoProcessual)
                            }
                            else if(dentroDoi != listaExpressionista.includes("^") && dentroDoi != listaExpressionista.includes("log") && dentroDoi != listaExpressionista.includes("sen") && dentroDoi != listaExpressionista.includes("cos") && dentroDoi != listaExpressionista.includes("tan") && dentroDoi != listaExpressionista.includes("arctan") && listaExpressionista.includes("raiz") && dentroDoi != listaExpressionista.includes("!")) {
                                continue
                            }
                        }
                    }
                }
                while (listaExpressionista.includes("*") || listaExpressionista.includes("/")) {
                    for (let i = 0; i < listaExpressionista.length; i++) {
                        let dentroDoi = listaExpressionista[i]
                        if (!isNaN(dentroDoi)) {
                            listaExpressionista[i] = Number(dentroDoi)
                        }
                        else if (isNaN(dentroDoi)) {
                            if (dentroDoi == "*") {
                                if (listaExpressionista[i - 1] == "*" || listaExpressionista[i + 1] == "*") {
                                    listaExpressionista.splice(listaExpressionista[i], 1)
                                    console.log(listaExpressionista)
                                }
                                else {
                                let resultadoProcessual = Number(listaExpressionista[i - 1]) * Number(listaExpressionista[i + 1])
                                listaExpressionista.splice(i - 1, 3, resultadoProcessual)
                                }
                            }
                            else if (dentroDoi == "/") {
                                let resultadoProcessual = Number(listaExpressionista[i - 1] / listaExpressionista[i + 1])
                                listaExpressionista.splice(i - 1, 3, resultadoProcessual)
                            }
                            else if (dentroDoi != "*" && dentroDoi != "/") {
                                continue
                            }
                        }
                    }
                }
                while (listaExpressionista.includes("+") || listaExpressionista.includes("-")) {
                    for (let i = 0; i < listaExpressionista.length; i++) {
                        let dentroDoi = listaExpressionista[i]
                        if (!isNaN(dentroDoi)) {
                            listaExpressionista[i] = Number(dentroDoi)
                        }
                        else if (isNaN(dentroDoi)) {
                            if (dentroDoi == "+") {
                                let resultadoProcessual = Number(listaExpressionista[i - 1]) + Number(listaExpressionista[i + 1])
                                listaExpressionista.splice(i - 1, 3, resultadoProcessual)
                            }
                            else if (dentroDoi == "-") {
                                let resultadoProcessual = Number(listaExpressionista[i - 1]) - Number(listaExpressionista[i + 1])
                                listaExpressionista.splice(i - 1, 3, resultadoProcessual)
                            }
                            else if (dentroDoi !== "+" && dentroDoi !== "-") {
                                continue
                            }
                        }
                    }
                }
            if (listaExpressionista.length == 1) {
                expressuda.splice(inicio, fim - inicio + 1, listaExpressionista[0])
            } 
            if (expressuda.length == 1) {
            let resultado = listaExpressionista[0]
            expressuda.splice(inicio, fim - inicio + 1, resultado)
            console.log(listaExpressionista[0])
            }
        }
    }
}