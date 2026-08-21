const prompt = require('prompt-sync')()
const log = (base, numero) => Math.log(numero) / Math.log(base)
const fatorial =  n => {
  if (n < 0) return 
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}
console.log("Oi, bem vindo a minha calculadora, espero que você aproveite :D")
console.log("A)calcular área (setor circular não funciona até os angulos estiverem prontos)\nB)calcular operações (finalizado)\nC)ângulos (começando)\nD)diversos (não feito)\nE)conversão de unidades de medida(não feito)")
let perguntaInicial = prompt("R: ")
perguntaInicial = perguntaInicial.toLowerCase()
if (perguntaInicial == "a" || perguntaInicial == "calcular área" || perguntaInicial == "calcular area") {
    console.log("aight vamo lá")
    console.log("que tipo de área?\nEspacial ou plana?")
    let perguntaSecundaria = prompt("R: ")
    perguntaSecundaria = perguntaSecundaria.toLowerCase()
    if (perguntaSecundaria =="espacial" || perguntaSecundaria == "e") {
        console.log("qual figura?\n1)cilindro\n2)cubo\n3)piramide\n4)cone\n5)paralelepipedo\n6)esfera")
        let perguntaTerciaria = prompt("R: ")
        perguntaTerciaria = perguntaTerciaria.toLowerCase()
        if (perguntaTerciaria == "1" || perguntaTerciaria == 1 || perguntaTerciaria == "1)" || perguntaTerciaria == "cilindro") {
            console.log("ja tem a área da base?")
            let perguntaQuatro = prompt("R: ")
            perguntaQuatro = perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "sim" || perguntaQuatro == "s" || perguntaQuatro == "ss" || perguntaQuatro == "yeah" || perguntaQuatro == "yep") {
                let area = Number(prompt("qual que é a área então?\nR: "))
                let altura = Number(prompt("qual a altura?\nR: "))
                let cilindro = area * altura
                let medida = prompt("medida do cilindro?\nR: ")
                console.log("ok, hnmm, a área do cilindro mede aproximadamente " + cilindro + " " + medida + " yey")
            }
            else if (perguntaQuatro == "n" || perguntaQuatro == "não" || perguntaQuatro == "nn" || perguntaQuatro == "nao" || perguntaQuatro == "noup" || perguntaQuatro == "nah") {
                console.log("ok, então, vamos precisar achar a área do circulo :v")
                let raio = Number(prompt("qual o raio?\nR: "))
                raio = raio * raio
                let area = Math.PI * raio
                let medidaarea = (prompt("qual a unidade de medida?\nR: "))
                console.log("ok, achei sua área, ela é de " + area + " " + medidaarea + " yey")
                console.log("agora vamos achar a altura né?")
                let altura = Number(prompt("me da a altura ai\nR: "))
                let medidatotal = prompt("qual a unidade de medida?\nR: ")
                let cilindro = area * altura
                let cilindroProcessual = cilindro - Math.floor(cilindro)
                cilindro = cilindro - cilindroProcessual
                console.log("ok, hnmm, a área do cilindro mede aproximadamente " + cilindro + " " + medidatotal + " yey\nse quiser com decimais, fica: " + (cilindro + cilindroProcessual) + " metros cubicos, yey\nescreve até o necessário kk")
            }
        }
        else if (perguntaTerciaria == "2" || perguntaTerciaria == "cubo" || perguntaTerciaria == "2)") {
            console.log("oki, vamo calcular o cubo")
            let perguntaQuatro = prompt("tem o lado do cubo? | ")
            if (perguntaQuatro == "sim" || perguntaQuatro == "s" || perguntaQuatro == "ss" || perguntaQuatro == "yeah" || perguntaQuatro == "yep") {
                let valor = Number(prompt("qual o valor dele? | "))
                let cubo = valor * valor * valor
                let medida = prompt("qual a unidade medida? | ")
                console.log("nice, o seu cubo tem " + cubo + " " + medida + "!")
            }
            else if (perguntaQuatro == "n" || perguntaQuatro == "não" || perguntaQuatro == "nn" || perguntaQuatro == "nao" || perguntaQuatro == "noup" || perguntaQuatro == "nah") {
                let perguntaCinco = prompt("ué, quer achar a raiz cubica? | ")
                if (perguntaCinco == "sim" || perguntaCinco == "s" || perguntaCinco == "ss") {
                    let cubo = Number(prompt("qual o valor do cubo? | "))
                    let raiz = Math.cbrt(cubo)
                    let medida = prompt("qual a medida? | ")
                    console.log("a raiz cubica de " + cubo + " " + medida + " é, basicamente " + raiz + " " + medida +" yey")
                }
                else if (perguntaCinco == "n" || perguntaCinco == "nao" || perguntaCinco == "não" || perguntaCinco == "nn") {
                    console.log("então você não quer nada oxi kkkkkkkkkk")
                }
                else {
                    console.log("nem pra saber responder sim ou não aff kkk")
                }
            }
        }

        else if (perguntaTerciaria == "3" || perguntaTerciaria == "3)" || perguntaTerciaria == "piramide") {
            let perguntaQuatro = prompt("sabe a área da base da piramide?\nR: ")
            perguntaQuatro = perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "s" || perguntaQuatro == "ss" || perguntaQuatro == "sim" || perguntaQuatro == "yep") {
                let area = Number(prompt("qual a área da base? | "))
                let altura = Number(prompt("qual a altura? | "))
                let piramide = (area * altura) / 3
                let piramideMeh = Math.floor(piramide)
                let medida = prompt("qual a unidade de medida? | ")
                console.log("welp, a área da sua pirâmide em " + medida + " é de " + piramide + "\nse quer, caso houver, sem decimais, é de " + piramideMeh + " " + medida + " :3")
            }
            else if (perguntaQuatro == "n" || perguntaQuatro == "não" || perguntaQuatro == "nn" || perguntaQuatro == "nao" || perguntaQuatro == "noup" || perguntaQuatro == "nah") {
                let perguntaCinco = prompt("é uma pirâmide normal ou tem b x h?\nR: ")
                perguntaCinco = perguntaCinco.toLowerCase()
                if (perguntaCinco == "normal" || perguntaCinco == "n") {
                    let areaB = Number(prompt("qual é o lado do quadrado? | "))
                    let area = areaB * areaB
                    let medidaA = prompt("qual a  medida da base? | ")
                    let altura = Number(prompt("qual a altura? | "))
                    let medidaE = (prompt("qual a unidade de medida? | "))
                    let areaT = (area * altura) / 3
                    let areaTmeh = Math.floor(areaT)
                    console.log("ok, hnmm, basicamente a sua pirâmide tem " + area + " " + medidaA + " de base\njá sua pirâmide tem " + areaT + " " + medidaE + " de area total, espacialmente falando :3\nse quiser ela, se hover no caso, sem decimais 100% garantido\n o valor dela é de " + areaTmeh + " " + medidaE + " >:3")
                }
                else if (perguntaCinco == "bxh" || perguntaCinco == "base x altura" || perguntaCinco == "t") {
                    let perguntaSeis = prompt("sabe a área?\nR: ")
                    perguntaSeis = perguntaSeis.toLowerCase()
                    if (perguntaSeis == "n" || perguntaSeis == "nn" || perguntaSeis == "noup" || perguntaSeis == "nao" || perguntaSeis == "não") {
                        let largura = Number(prompt("qual a largura? | "))
                        let comprimento = Number(prompt("qual o comprimento? | "))
                        let areaB = largura * comprimento
                        let medidaB = prompt("qual a medida da area? | ")
                        console.log("ok, a area da base é: " + areaB + " " + medidaB)
                        let altura = Number(prompt("qual a altura da piramide? | "))
                        let medidaE = prompt("qual a medida da pirâmide? | ")
                        let areaT = (areaB * altura) / 3
                        let areaTmeh = Math.floor(areaT)
                        console.log("welp, segundo seus dados, sua pirâmide tem, aproximadamente " + areaTmeh + " " + medidaE + "\nmas se for incluindo, se tiver, decimais, tem exatamente " + areaT + " " + medidaE + " yeyy >:3")
                    }
                    else if (perguntaSeis == "s" || perguntaSeis == "ss" || perguntaSeis == "sim" || perguntaSeis == "yeah" || perguntaSeis == "ye" || perguntaSeis == "yea") {
                        let areaB = Number(prompt("qual a área da base então? | "))
                        let medidaB = prompt("qual a medida da area? | ")
                        console.log("ok, a area da base é: " + areaB + " " + medidaB)
                        let altura = Number(prompt("qual a altura da piramide? | "))
                        let medidaE = prompt("qual a medida da pirâmide? | ")
                        let areaT = (areaB * altura) / 3
                        let areaTmeh = Math.floor(areaT)
                        console.log("welp, segundo seus dados, sua pirâmide tem, aproximadamente " + areaTmeh + " " + medidaE + "\nmas se for incluindo, se tiver, decimais, tem exatamente " + areaT + " " + medidaE + " yeyy >:3")
                    }
                }
            }
        }
        else if (perguntaTerciaria == "4" || perguntaTerciaria == "4)" || perguntaTerciaria == "cone" || perguntaTerciaria == "c") {
            console.log("ok, estamos mais avançadinhos aqui kk")
            while (true) {
                let perguntaCinco = prompt("o que quer exatamente do cone?\n1)área da base\n2)Volume\n3)Área Lateral\n4)Área total\n5)Geratriz\nse não quiser mais nada, só escrever nada ou escrever 'sair' :3\nR:")
                perguntaCinco = perguntaCinco.toLowerCase()
                if (perguntaCinco == "area da base" || perguntaCinco == "área da base" || perguntaCinco == "b" || perguntaCinco == "base" || perguntaCinco == "areadabase" || perguntaCinco == "1" || perguntaCinco == "1)") {
                    let raio = Number(prompt("qual o raio do circulo? | "))
                    let areadabase = (raio *raio) * Math.PI
                    let medidaP = prompt("qual a unidade de medida? |")
                    console.log("ok, aparentemente seu raio é " + raio + " " + medidaP + " sua area da base é " + areadabase + " ")
                    let perguntaSeis = prompt("mais algo?")
                    perguntaSeis = perguntaSeis.toLowerCase()
                    if (perguntaSeis == "sim" || perguntaSeis == "s" || perguntaSeis == "ss" || perguntaSeis == "yep" || perguntaSeis == "yea") {
                        console.log("wowie, continuemos então nosso calculo de cone então")
                    }
                    else if (perguntaSeis == "nao" || perguntaSeis == "n" || perguntaSeis == "nn" || perguntaSeis == "nah" || perguntaSeis == "não") {
                        console.log("ok então, obrigado por usar a minha calculadora OwO")
                        break
                    }
                }
                else if (perguntaCinco == "volume" || perguntaCinco == "v" || perguntaCinco == "2" || perguntaCinco == "2)") {
                    let perguntaSeis = prompt("tem a área da base?")
                    perguntaSeis = perguntaSeis.toLowerCase()
                    if (perguntaSeis == "sim" || perguntaSeis == "s" || perguntaSeis == "ss" || perguntaSeis == "yep" || perguntaSeis == "yea") {
                        let areaDaBase = Number(prompt("qual é a área da base?"))
                        let altura = Number(prompt("qual a altura?"))
                        let medida = prompt("qual a medida?")
                        let areaTotal = (areaDaBase * altura) / 3
                        areaProcessual = areaTotal - Math.floor(areaTotal)
                        let areaTotalParcial = areaTotal - areaProcessual
                        console.log("ok, o volume do seu cone é igual a aproximadamente " + areaTotalParcial + " " + medida + "\nse quiser a medida total, com decimais, é de " + areaTotal + " " + medida)
                        let perguntaSete = prompt("quer mais algo?")
                        if (perguntaSete == "s" || perguntaSete  == "ss" || perguntaSete == "sim" || perguntaSete == "ye" || perguntaSete == "yeah") {
                            console.log("okok, continue as operações :3")
                        }
                        else if (perguntaSete == "nn" || perguntaSete == "n" || perguntaSete == "nao" || perguntaSete == "nah" || perguntaSete == "não") {
                            console.log("okei goodbaaii")
                            break
                        }
                    }
                    else if (perguntaSeis == "nao" || perguntaSeis == "n" || perguntaSeis == "nn" || perguntaSeis == "nah" || perguntaSeis == "não") {
                        let perguntaSete = prompt("tem o raio?")
                        perguntaSete = perguntaSete.toLowerCase()
                        if (perguntaSete == "s" || perguntaSete  == "ss" || perguntaSete == "sim" || perguntaSete == "ye" || perguntaSete == "yeah") {
                            let raio = Number(prompt("qual o raio?"))
                            let areaDaBase = raio * Math.PI
                            let medidaPlana = prompt("qual a medida da área?")
                            console.log("ok, seu raio seria " + raio + " logo sua área é de" + areaDaBase + " " + medidaPlana + "\nagora preciso da altura do cone")
                            let altura = Number(prompt("qual a altura?"))
                            let volumeTotal = (areaDaBase * altura) / 3
                            let volumeProcessual = volumeTotal - Math.floor(volumeTotal)
                            let volumeTotalParcial = volumeTotal - volumeProcessual
                            let medidaTotal = prompt("qual a unidade de medida? ")
                            console.log("o volume da área, parcialmente falando é de " + volumeTotalParcial + " " + medidaTotal + "\nse quer o valor total, usando virgulas, se tiver, ficou " + volumeTotal + medidaTotal)
                            let perguntaOito = prompt("quer continuar as operações do cone?")
                            perguntaOito = perguntaOito.toLowerCase()
                            if (perguntaOito == "s" || perguntaOito == "ss" || perguntaOito == "sim" || perguntaOito == "ye" || perguntaOito == "yeah") {
                                console.log("ok, bons estudos :P")
                            }
                            else if (perguntaOito == "n" || perguntaOito == "nn" || perguntaOito == "não" || perguntaOito == "nao" || perguntaOito == "nah") {
                                console.log("ok, valeu por utilizar a calculadora :3")
                                break
                            }
                        }
                        else if (perguntaSete == "nn" || perguntaSete == "n" || perguntaSete == "nao" || perguntaSete == "nah" || perguntaSete == "não") {
                            let perguntaOito = prompt("então tem o diâmetro ao menos?")
                            perguntaOito = perguntaOito.toLowerCase()
                            if (perguntaOito == "sim" || perguntaOito == "ss" || perguntaOito == "s" || perguntaOito == "yeah" || perguntaOito == "ye") {
                                let diametro = Number(prompt("qual o diâmetro?"))
                                let raio = diametro / 2
                                let areaDaBase = raio * Math.PI
                                let medidaPlana = prompt("qual a medida da área?")
                                console.log("ok, seu raio seria " + raio + " logo sua área é de" + areaDaBase + " " + medidaPlana + "\nagora preciso da altura do cone")
                                let altura = Number(prompt("qual a altura?"))
                                let volumeTotal = (areaDaBase * altura) / 3
                                let volumeProcessual = volumeTotal - Math.floor(volumeTotal)
                                let volumeTotalParcial = volumeTotal - volumeProcessual
                                let medidaTotal = prompt("qual a unidade de medida? ")
                                console.log("o volume da área, parcialmente falando é de " + volumeTotalParcial + " " + medidaTotal + "\nse quer o valor total, usando virgulas, se tiver, ficou " + volumeTotal + medidaTotal)
                                let perguntaNove = prompt("quer continuar as operações do cone?")
                                perguntaNove = perguntaNove.toLowerCase()
                                if (perguntaNove == "s" || perguntaNove == "ss" || perguntaNove == "sim" || perguntaNove == "ye" || perguntaNove == "yeah") {
                                    console.log("ok, bons estudos :P")
                                }
                                else if (perguntaNove == "n" || perguntaNove == "nn" || perguntaNove == "não" || perguntaNove == "nao" || perguntaNove == "nah") {
                                    console.log("ok, valeu por utilizar a calculadora :3")
                                    break
                                }
                            }
                            else if (perguntaOito == "n" || perguntaOito == "nah" || perguntaOito == "não" || perguntaOito == "nao" || perguntaOito == "nn") {
                                console.log("então não tem como calcular, foi mal ai")
                                let perguntaNove = prompt("quer continuar as operações do cone?")
                                perguntaNove = perguntaNove.toLowerCase()
                                if (perguntaNove == "s" || perguntaNove == "ss" || perguntaNove == "sim" || perguntaNove == "ye" || perguntaNove == "yeah") {
                                    console.log("ok, bons estudos :P")
                                }
                                else if (perguntaNove == "n" || perguntaNove == "nn" || perguntaNove == "não" || perguntaNove == "nao" || perguntaNove == "nah") {
                                    console.log("ok, valeu por utilizar a calculadora :3")
                                    break
                                }
                            }
                        }
                    }
                }
                else if (perguntaCinco == "area lateral" || perguntaCinco == "área lateral" || perguntaCinco == "lateral" || perguntaCinco == "l" || perguntaCinco == "3" || perguntaCinco == "3)") {
                    let perguntaSeis = prompt("tem a geratriz?")
                    perguntaSeis = perguntaSeis.toLowerCase()
                    if (perguntaSeis == "sim" || perguntaSeis == "s" || perguntaSeis == "ss" || perguntaSeis == "yep" || perguntaSeis == "yea") {
                        let geratriz = Number(prompt("qual a geratriz?"))
                        let perguntaSete = prompt("tem o raio?")
                        perguntaSete = perguntaSete.toLowerCase()
                        if (perguntaSete == "s" || perguntaSete  == "ss" || perguntaSete == "sim" || perguntaSete == "ye" || perguntaSete == "yeah") {
                            let raio = Number(prompt("qual o raio?"))
                            let areaLateral = Math.PI * geratriz * raio
                            let areaLateralProcessual = areaLateral = Math.floor(areaLateral)
                            let areaLateralTotalParcial = areaLateral - areaLateralProcessual
                            console.log("ok, segundo a geratriz que você me deu, que é " + geratriz + " e o raio " + raio + " a área lateral, parcialmente falando, fica " + areaLateralTotalParcial + "\nse quer o valor incluindo decimal, fica " + areaLateral)
                        }
                        else if (perguntaSete == "nn" || perguntaSete == "n" || perguntaSete == "nao" || perguntaSete == "nah" || perguntaSete == "não") {
                            let perguntaOito = prompt("tem o diâmetro ao menos?")
                            perguntaOito = perguntaOito.toLowerCase()
                            if (perguntaOito == "sim" || perguntaOito == "ss" || perguntaOito == "s" || perguntaOito == "yeah" || perguntaOito == "ye") {
                                let diametro = Number(prompt("qual o diâmetro?"))
                                let raio = diametro / 2
                                let areaLateral = Math.PI * geratriz * raio
                                let areaLateralProcessual = areaLateral = Math.floor(areaLateral)
                                let areaLateralTotalParcial = areaLateral - areaLateralProcessual
                                console.log("ok, segundo a geratriz que você me deu, que é " + geratriz + " e o raio seria " + raio + " a área lateral, parcialmente falando, fica " + areaLateralTotalParcial + "\nse quer o valor incluindo decimal, fica " + areaLateral)
                            }
                            else if (perguntaOito == "n" || perguntaOito == "nah" || perguntaOito == "não" || perguntaOito == "nao" || perguntaOito == "nn") {
                                console.log("então não tem como calcular, foi mal ai")
                                let perguntaNove = prompt("quer continuar as operações do cone?")
                                perguntaNove = perguntaNove.toLowerCase()
                                if (perguntaNove == "s" || perguntaNove == "ss" || perguntaNove == "sim" || perguntaNove == "ye" || perguntaNove == "yeah") {
                                    console.log("ok, bons estudos :P")
                                }
                                else if (perguntaNove == "n" || perguntaNove == "nn" || perguntaNove == "não" || perguntaNove == "nao" || perguntaNove == "nah") {
                                    console.log("ok, valeu por utilizar a calculadora :3")
                                    break
                                }
                            }
                        }
                    }
                    else if (perguntaSeis == "nao" || perguntaSeis == "n" || perguntaSeis == "nn" || perguntaSeis == "nah" || perguntaSeis == "não") {
                        console.log("então sugiro que faça o calculo da geratriz primeiro e depois você volta aqui e faz o calculo da area lateral")
                    }
                }
                else if (perguntaCinco == "area total" || perguntaCinco == "areatot" || perguntaCinco == "área total" || perguntaCinco == "t" || perguntaCinco == "total" || perguntaCinco == "4" || perguntaCinco == "4)") {
                    let perguntaSeis = prompt("tem a área da base e a área lateral? (sim ou não)")
                    perguntaSeis = perguntaSeis.toLowerCase()
                    if (perguntaSeis == "sim" || perguntaSeis == "s" || perguntaSeis == "ss" || perguntaSeis == "yep" || perguntaSeis == "yea") {
                        let areaDaBase = Number(prompt("qual a área da base?"))
                        let areaLateral = Number(prompt("qual a área lateral?"))
                        let areaTotal = areaDaBase + areaLateral
                        let medidaEspacial = prompt("qual a unidade de medida?")
                        console.log("segundo os dados fornecidos, como a área da base (" + areaDaBase + ") e a área lateral (" + areaLateral + ")\nentão a área total é de " + areaTotal + " " + medidaEspacial)
                    }
                    else if (perguntaSeis == "nao" || perguntaSeis == "n" || perguntaSeis == "nn" || perguntaSeis == "nah" || perguntaSeis == "não") {
                        console.log("welp, eu até poderia calcular por aqui mesmo mas é melhor você pegar os valores\nlá nos outros, ja que se você não tem a geratriz, e nem o raio, melhor ir atrás deles primeiro\npara depois vir aqui e fazer :P")
                    }
                }
                else if (perguntaCinco == "geratriz" || perguntaCinco == "g" || perguntaCinco == "5" || perguntaCinco == "5)") {
                    let perguntaSeis = prompt("tem a altura?")
                    perguntaSeis = perguntaSeis.toLowerCase()
                    if (perguntaSeis == "sim" || perguntaSeis == "s" || perguntaSeis == "ss" || perguntaSeis == "yep" || perguntaSeis == "yea") {
                        let altura = Number(prompt("qual a altura?"))
                        let perguntaSete = prompt("tem o raio?")
                        perguntaSete = perguntaSete.toLowerCase()
                        if (perguntaSete == "s" || perguntaSete  == "ss" || perguntaSete == "sim" || perguntaSete == "ye" || perguntaSete == "yeah") {
                            let raio = Number(prompt("qual o raio?"))
                            let geratriz = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2))
                            let geratrizProcessual = geratriz - Math.floor(geratriz)
                            let geratrizParcial = geratriz - geratrizProcessual
                            console.log("ok, sua geratriz é, parcialmente falando, de " + geratrizParcial + "\n se quiser a geratriz com decimal, se houver, é de " + geratriz)
                            let perguntaOito = prompt("quer fazer mais alguma coisinha aqui no cone?")
                            perguntaOito = perguntaOito.toLowerCase()
                            if (perguntaOito == "sim" || perguntaOito == "ss" || perguntaOito == "s" || perguntaOito == "yeah" || perguntaOito == "ye") {
                                console.log("okei, aproveite :3")
                            }
                            else if (perguntaOito == "n" || perguntaOito == "nah" || perguntaOito == "não" || perguntaOito == "nao" || perguntaOito == "nn") {
                                console.log('okei, obgd por usar a calculadora Owo')
                                break
                            }
                        }
                        else if (perguntaSete == "nn" || perguntaSete == "n" || perguntaSete == "nao" || perguntaSete == "nah" || perguntaSete == "não") {
                            let perguntaOito = prompt("tem o diâmetro ao menos?")
                            perguntaOito = perguntaOito.toLowerCase()
                            if (perguntaOito == "sim" || perguntaOito == "ss" || perguntaOito == "s" || perguntaOito == "yeah" || perguntaOito == "ye") {
                                let diametro = Number(prompt("qual o diâmetro?"))
                                let raio = diametro / 2
                                let geratriz = Math.pow(raio, 2) + Math.pow(altura, 2)
                                let geratrizProcessual = geratriz - Math.floor(geratriz)
                                let geratrizParcial = geratriz - geratrizProcessual
                                console.log("ok, sua geratriz é, parcialmente falando, de " + geratrizParcial + "\n se quiser a geratriz com decimal, se houver, é de " + geratriz)
                                let perguntaNove = prompt("quer fazer mais alguma coisinha aqui no cone?")
                                perguntaNove = perguntaNove.toLowerCase()
                                if (perguntaNove == "sim" || perguntaNove == "ss" || perguntaNove == "s" || perguntaNove == "yeah" || perguntaNove == "ye") {
                                    console.log("okei, aproveite :3")
                                }
                                else if (perguntaNove == "n" || perguntaNove == "nah" || perguntaNove == "não" || perguntaNove == "nao" || perguntaNove == "nn") {
                                    console.log('okei, obgd por usar a calculadora Owo')
                                    break
                                }
                            }
                            else if (perguntaOito == "n" || perguntaOito == "nah" || perguntaOito == "não" || perguntaOito == "nao" || perguntaOito == "nn") {
                                console.log("welp, não tem muito o que fazer, sugiro que tenha os 2 valores kk")
                                let perguntaNove = prompt("quer fazer mais alguma coisinha aqui no cone?")
                                perguntaNove = perguntaNove.toLowerCase()
                                if (perguntaNove == "sim" || perguntaNove == "ss" || perguntaNove == "s" || perguntaNove == "yeah" || perguntaNove == "ye") {
                                    console.log("okei, aproveite :3")
                                }
                                else if (perguntaNove == "n" || perguntaNove == "nah" || perguntaNove == "não" || perguntaNove == "nao" || perguntaNove == "nn") {
                                    console.log('okei, obgd por usar a calculadora Owo')
                                    break
                                }
                            }
                        }
                    }
                    else if (perguntaCinco == "n" || perguntaCinco == "nn" || perguntaCinco == "nao" || perguntaCinco == "não") {
                        console.log("isso é um problema, cone sem altura não é terceira dimensão, volte quanto for da 3° dimensão")
                    }
                }
                else if (perguntaCinco == "" || perguntaCinco == "sair") {
                    console.log('okei, obgd por usar a calculadora OwO')
                    break
                }
            }
        }
        else if (perguntaTerciaria == "5" || perguntaTerciaria == "5)" || perguntaTerciaria == "paralelepipedo" || perguntaTerciaria == "p") {
            let perguntaQuatro = prompt("quer fazer ou desfazer um paralelepipedo?\n(achar a área total ou achar pela área total as medidas)")
            perguntaQuatro = perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "f" || perguntaQuatro == "fazer" || perguntaQuatro == "achar área total" || perguntaQuatro == "achar area total" || perguntaQuatro == "area total" || perguntaQuatro == "areatotal") {
                let perguntaCinco = prompt("tem a área base?")
                perguntaCinco = perguntaCinco.toLowerCase()
                if (perguntaCinco == "sim" || perguntaCinco == "s" || perguntaCinco == "ss" || perguntaCinco == "ye" || perguntaCinco == "yea") {
                    let area = Number(prompt("qual a área então?"))
                    let altura = Number(prompt("Qual que é a altura?"))
                    let medida = prompt("qual a unidade de medida?")
                    let areaTotal = area * altura
                    console.log("a área total do paralelepipedo é " + areaTotal + " " + medida)
                }
                else if (perguntaCinco == "nao" || perguntaCinco == "nao" || perguntaCinco == "noup" || perguntaCinco == "nah" || perguntaCinco == "n" || perguntaCinco == "nn" || perguntaCinco == "ñ") {
                    let largura = Number(prompt("ok, qual a largura então?"))
                    let comprimento = Number(prompt("qual o comprimento?"))
                    let areaPlana = largura * comprimento
                    let medidaPlana = prompt("qual é a unidade de medida da área?")
                    let altura = Number("qual a altura??")
                    let areaTotal = largura * comprimento * altura
                    let medidaEspacial = prompt("qual a unidade de medida?")
                    console.log("e qual é a medida da área da base do seu paralelepipedo é " + areaPlana + " " + medidaPlana + "\njá a área total é " + areaTotal + " " + medidaEspacial)
                }
            }
            else if (perguntaQuatro == "d" || perguntaQuatro == "desfazer" || perguntaQuatro == "achar as medidas" || perguntaQuatro == "medidas" || perguntaQuatro == "achar pela área total as medidas" || perguntaQuatro == "achar pela area total as medidas") {
                let areaTotal = Number(prompt("ok, qual a área total?"))
                let medidaEspacial = prompt("qual a medida do paralelepipedo?")
                let perguntaCinco = prompt("tem a altura?")
                perguntaCinco = perguntaCinco.toLowerCase()
                if (perguntaCinco == "sim" || perguntaCinco == "s" || perguntaCinco == "ss" || perguntaCinco == "ye" || perguntaCinco == "yea") {
                    let altura = Number(prompt("qual é a altura?"))
                    let medidaPlana = prompt("qual é a medida da área da base?")
                    areaDaBase = areaTotal / altura
                    console.log("ok, a área da base é " + areaDaBase + " " + medidaPlana + "\nAgora fica facil")
                    let perguntaSeis = prompt("tem a largura ou o comprimento?")
                    perguntaSeis = perguntaSeis.toLowerCase()
                    if (perguntaSeis == "comprimento" || perguntaSeis == "tenho o comprimento") {
                        let comprimento = Number(prompt("qual o comprimento?"))
                        let largura = areaDaBase / comprimento
                        console.log("então com base nos seus dados, a área total do paralelepipedo é de " + areaTotal + " " + medidaEspacial + "\nentão, a altura é " + altura + "e a área da base é " + areaDaBase + " " + medidaPlana + "\nentão, ja que o comprimento é " + comprimento + " " + " a largura é " + largura)
                    }
                    else if (perguntaSeis == "largura" || perguntaSeis == "tenho a largura") {
                        let largura = Number(prompt("qual a largura?"))
                        let comprimento = areaDaBase / largura
                        console.log("então com base nos seus dados, a área total do paralelepipedo é de " + areaTotal + " " + medidaEspacial + "\nentão, a altura é " + altura + "e a área da base é " + areaDaBase + " " + medidaPlana + "\nentão, ja que a largura é " + largura + " " + " o comprimento é " + comprimento)
                    }
                }
                else if (perguntaCinco == "nao" || perguntaCinco == "n" || perguntaCinco == "nn" || perguntaCinco == "nah" || perguntaCinco == "não") {
                    let perguntaSeis = prompt("tem o comprimento?")
                    perguntaSeis = perguntaSeis.toLowerCase()
                    if (perguntaSeis == "sim" || perguntaSeis == "s" || perguntaSeis == "ss" || perguntaSeis == "yea" || perguntaSeis == "ye") {
                    let comprimento = Number(prompt("qual é o comprimento?"))
                    let medidaPlana = prompt("qual é a medida da área da base?")
                    areaDaBase = areaTotal / comprimento
                    console.log("ok, a área da base é " + areaDaBase + " " + medidaPlana + "\nAgora fica facil")
                    let perguntaSete = prompt("tem a largura ou a altura?")
                    perguntaSete = perguntaSete.toLowerCase()
                        if (perguntaSete == "largura" || perguntaSete == "tenho a largura" || perguntaSete == "l") {
                            let largura = Number(prompt("qual a largura?"))
                            let altura = areaDaBase / largura
                            console.log("então com base nos seus dados, a área total do paralelepipedo é de " + areaTotal + " " + medidaEspacial + "\nentão, a altura é " + altura + "e a área da base é " + areaDaBase + " " + medidaPlana + "\nentão, ja que a largura é " + largura + " " + " a altura é " + altura)
                        }
                        else if (perguntaSete == "altura" || perguntaSete == "a" || perguntaSete == "tenho a altura") {
                            let altura = Number(prompt("qual a altura?"))
                            let largura = areaDaBase / altura
                            console.log("então com base nos seus dados, a área total do paralelepipedo é de " + areaTotal + " " + medidaEspacial + "\nentão, a altura é " + altura + "e a área da base é " + areaDaBase + " " + medidaPlana + "\nentão, ja que a largura é " + largura + " " + " o comprimento é " + comprimento)
                        }
                    }
                    else if (perguntaSeis == "nao" || perguntaSeis == "n" || perguntaSeis == "nn" || perguntaSeis == "nah" || perguntaSeis == "não") {
                        let perguntaSete = prompt("tem a largura?")
                        perguntaSete = perguntaSete.toLowerCase()
                        if (perguntaSete == "sim" || perguntaSete == "s" || perguntaSete == "ss" || perguntaSete == "yea" || perguntaSete == "ye") {
                            let largura = Number(prompt("qual é a largura?"))
                            let medidaPlana = prompt("qual é a medida da área da base?")
                            areaDaBase = areaTotal / largura
                            console.log("ok, a área da base é " + areaDaBase + " " + medidaPlana + "\nAgora fica facil")
                            let perguntaOito = prompt("tem o comprimento ou a altura?")
                            perguntaOito = perguntaOito.toLowerCase()
                            if (perguntaOito == "comprimento" || perguntaOito == "tenho o comprimento" || perguntaOito == "c") {
                                let comprimento = Number(prompt("qual a comprimento?"))
                                let altura = areaDaBase / comprimento
                                console.log("então com base nos seus dados, a área total do paralelepipedo é de " + areaTotal + " " + medidaEspacial + "\nentão, a altura é " + altura + "e a área da base é " + areaDaBase + " " + medidaPlana + "\nentão, ja que a largura é " + largura + " " + " a altura é " + altura)
                            }
                            else if (perguntaOito == "altura" || perguntaOito == "a" || perguntaOito == "tenho a altura") {
                                let altura = Number(prompt("qual a altura?"))
                                let comprimento = areaDaBase / altura
                                console.log("então com base nos seus dados, a área total do paralelepipedo é de " + areaTotal + " " + medidaEspacial + "\nentão, a altura é " + altura + "e a área da base é " + areaDaBase + " " + medidaPlana + "\nentão, ja que a largura é " + largura + " " + " o comprimento é " + comprimento)
                            }
                        }
                    }
                }
            }
        }
        else if (perguntaTerciaria == "6" || perguntaTerciaria == "6)" || perguntaTerciaria == "esfera" || perguntaTerciaria == "e") {
            console.log("basicamente eu vou te dar logo a área da esfera junto com a área da superfície")
            let perguntaQuatro = prompt("tem o raio?")
            perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "sim" || perguntaQuatro == "s" || perguntaQuatro == "ss" || perguntaQuatro == "ye" || perguntaQuatro == "yeah") {
                let raio = Number(prompt("qual o raio?"))
                let areaSuperficie = 4 * Math.pow(raio, 2) * Math.PI
                let areaSuperficieProcessual = areaSuperficie - Math.floor(areaSuperficie)
                let areaSuperficieParcial = areaSuperficie - areaSuperficieProcessual
                let volume = (4/3) * Math.PI * Math.pow(raio, 3)
                let volumeProcessual = volume - Math.floor(volume)
                let volumeParcial = volume - volumeProcessual
                let medidaEspacial = prompt("qual a unidade de medida espacial?")
                let medidaPlana = prompt("qual a unidade de medida plana?")
                console.log("ok, o volume da sua esfera é, parcialmente falando, de " + volumeParcial + " " + medidaEspacial + " se quiser ele com o valor decimal, é de " + volume +" " + medidaEspacial + "\njá a área da superficie é,parcialmente falando, de " + areaSuperficieParcial + " " + medidaPlana + "se quer ela com decimais, fica " + areaSuperficie + " " + medidaPlana)
            }
            else if (perguntaQuatro == "n" || perguntaQuatro == "nn" || perguntaQuatro == "nao" || perguntaQuatro == "não" || perguntaQuatro == "nah") {
                let perguntaCinco = prompt("tem o diâmetro?")
                perguntaCinco = perguntaCinco.toLowerCase()
                if (perguntaCinco == "sim" || perguntaCinco == "s" || perguntaCinco == "ss" || perguntaCinco == "ye" || perguntaCinco == "yea") {
                    let diametro = Number(prompt("qual o diâmetro?"))
                    let raio = diametro / 2
                    let areaSuperficie = 4 * Math.pow(raio, 2) * Math.PI
                    let areaSuperficieProcessual = areaSuperficie - Math.floor(areaSuperficie)
                    let areaSuperficieParcial = areaSuperficie - areaSuperficieProcessual
                    let volume = (4/3) * Math.PI * Math.pow(raio, 3)
                    let volumeProcessual = volume - Math.floor(volume)
                    let volumeParcial = volume - volumeProcessual
                    let medidaEspacial = prompt("qual a unidade de medida espacial?")
                    let medidaPlana = prompt("qual a unidade de medida plana?")
                    console.log("ok, o volume da sua esfera é, parcialmente falando, de " + volumeParcial + " " + medidaEspacial + " se quiser ele com o valor decimal, é de " + volume +" " + medidaEspacial + "\njá a área da superficie é,parcialmente falando, de " + areaSuperficieParcial + " " + medidaPlana + "se quer ela com decimais, fica " + areaSuperficie + " " + medidaPlana)
                }
                else if (perguntaCinco == "nao" || perguntaCinco == "n" || perguntaCinco == "nn" || perguntaCinco == "nah" || perguntaCinco == "não") {
                    console.log("a unica coisa que precisa, que é o raio, você não consegu entregar\né osso viu kk, procura o raio ou o diâmetro e recomeça")
                }
            }
        }
    }
    else if (perguntaSecundaria == "plana" || perguntaSecundaria == "p") {
        let perguntaTerciaria = prompt("qual figura?\n1)quadrado\n2)retângulo ou paralelograma\n3)triangulos\n4)losango\n5)circulo\n6)setor circular\n7)trapézio\n8)poligonos regulares em geral R: ")
        perguntaTerciaria = perguntaTerciaria.toLowerCase()
        if (perguntaTerciaria == "quadrado" || perguntaTerciaria == "q" || perguntaTerciaria == "1" || perguntaTerciaria == "1)") {
            let perguntaQuatro = prompt("quer achar o lado ou a área total?")
            perguntaQuatro = perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "lado" || perguntaQuatro == "l" || perguntaQuatro == "achar o lado") {
                let areaTotal = Number(prompt("qual a área total do seu quadrado?"))
                let medida = prompt("qual a unidade de medida?")
                let lado = Math.sqrt(areaTotal)
                let perimetro = lado * 4
                console.log("ok, se a área é de " + areaTotal + " " + medida + "então o valor do lado do quadrado é " + lado + "\no perimetro é de " + perimetro) 
            }
            else if (perguntaQuatro == "área total" || perguntaQuatro == "at" || perguntaQuatro == "area total" || perguntaQuatro == "areatotal" || perguntaQuatro == "áreatotal" || perguntaQuatro == "areatot") {
                let lado = Number(prompt("qual o lado?"))
                let perimetro = lado * 4
                let areaTotal = lado * lado
                let medida = prompt("qual a unidade de medida?")
                console.log("ok, então se seu lado é " + lado + "o seu perimetro é " + perimetro + "\ne sua área total é de " + areaTotal + " " + medida)
            }
        }
        else if (perguntaTerciaria == "retangulo" || perguntaTerciaria == "retângulo" || perguntaTerciaria == "r" || perguntaTerciaria == "2" || perguntaTerciaria == "2)" || perguntaTerciaria == "paralelograma" || perguntaTerciaria == "retângulo ou paralelograma"  || perguntaTerciaria == "retangulo ou paralelograma" || perguntaTerciaria == "pa") {
            let perguntaQuatro = prompt("você quer achar os lados ou a área total?")
            perguntaQuatro = perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "lado" || perguntaQuatro == "l" || perguntaQuatro == "lados" || perguntaQuatro == "achar os lados" || perguntaQuatro == "achar o lado") {
                let areaTotal = Number(prompt("qual a área total?"))
                let medida = prompt("qual a unidade de medida?")
                let perguntaCinco = prompt("tem a largura ou o comprimento? (insira largura ou comprimento)")
                perguntaCinco = perguntaCinco.toLowerCase()
                if (perguntaCinco == "largura" || perguntaCinco == "l") {
                    let largura = Number(prompt("qual a largura?"))
                    let comprimento = areaTotal / largura
                    console.log("seguindo a área que você disse de " + areaTotal + " " + medida + "e a largura de " + largura + "\nentão o comprimento fica " + comprimento)
                }
                else if (perguntaCinco == "comprimento" || perguntaCinco == "c") {
                    let comprimento = Number(prompt("qual o comprimento?"))
                    let largura = areaTotal / comprimento
                    console.log("seguindo a área que você disse de " + areaTotal + " " + medida + "e o comprimento de " + comprimento + "\nentão a largura fica " + largura)
                }
            }
            else if (perguntaQuatro == "área total" || perguntaQuatro == "area total" || perguntaQuatro == "areatotal" || perguntaQuatro == "áreatotal" || perguntaQuatro == "areatotal" || perguntaQuatro == "area" || perguntaQuatro == "areatot" || perguntaQuatro == "at" || perguntaQuatro == "áreatot" || perguntaQuatro == "a") {
                let largura = Number(prompt("qual a largura?"))
                let comprimento = Number(prompt("qual o comprimento?"))
                let perimetro = (largura * 2) + (comprimento * 2)
                let area = largura * comprimento
                let diagonal = Math.sqrt(Math.pow(largura, 2) + Math.pow(comprimento, 2))
                let medida = prompt("qual a unidade de medida?")
                console.log("ja que a largura mede " + largura + " e o comprimento mede " + comprimento + "então a área é de: " + area + " " + medida + "\no perimetro é de " + perimetro + " e a diagonal seria " + diagonal)
            }
        }
        else if (perguntaTerciaria == "3" || perguntaTerciaria == "3)" || perguntaTerciaria == "tri" || perguntaTerciaria == "triangulos" || perguntaTerciaria == "triângulos") {
            let perguntaQuatro = prompt("seu triângulo é equílatero, triângulo retângulo ou um qualquer?")
            perguntaQuatro = perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "equilatero" || perguntaQuatro == "equilátero" || perguntaQuatro == "e") {
                let lado = Number(prompt("qual o lado do triângulo?"))
                let area = (Math.pow(lado, 2) * Math.sqrt(3)) / 4
                let areaProcessual = area - Math.floor(area)
                let areaParcial = area - areaProcessual
                let perimetro = lado * 3
                let altura = (lado * Math.sqrt(3)) / 2
                let alturaProcessual = altura - Math.floor(altura)
                let alturaParcial = altura - alturaProcessual
                let medida = prompt("qual a unidade de medida?")
                console.log("ja te entregando tudo de uma vez:\na área com decimais ficaria: " + area + " " + medida + "\n se quiser ela sem decimais, se houver, ficaria " + areaParcial + " " + medida + "\nse quer o perimetro ele é de: " + perimetro + "\nse quer a altura, ela seria de " + altura + " com decimais\nsem decimais ela fica com " + alturaParcial)
            }
            else if (perguntaQuatro == "retangulo"  || perguntaQuatro == "retângulo" || perguntaQuatro == "r" || perguntaQuatro == "triangulo retângulo" || perguntaQuatro == "triangulo retangulo") {
                    let catetoUm = Number(prompt("qual a medida do primeiro cateto?"))
                    let catetoDois = Number(prompt("qual a medida do segundo cateto?"))
                    let medida = prompt("qual a unidade de medida??")
                    let hipotenusa = Math.sqrt(Math.pow(catetoUm, 2) + Math.pow(catetoDois, 2))
                    let perimetro = catetoUm + catetoDois + hipotenusa
                    let area = (catetoUm * catetoDois) / 2
                    console.log("olha, se a medida dos catetos são de " + catetoUm + " e " + catetoDois + ", então a hipotenusa é de " + hipotenusa + " " + medida + "\ne o perimetro é de " + perimetro + " " + medida + "\nja á area é de " + area + " " + medida)
            }
            else if (perguntaQuatro == "um qualquer" || perguntaQuatro == "qualquer" || perguntaQuatro == "geral" || perguntaQuatro == "q" || perguntaQuatro == "g") {
                let ladoUm = Number(prompt("qual o primeiro lado?"))
                let ladoDois = Number(prompt("qual o segundo lado?"))
                let area = (ladoUm * ladoDois) / 2
                let medida = prompt("qual a unidade de medida?")
                console.log("ja que os lados são " + ladoUm + " e " + ladoDois + ", então a área do triangulo é de " + area + " " + medida)
            }
        }
        else if (perguntaTerciaria == "4" || perguntaTerciaria == "4)" || perguntaTerciaria == "l" || perguntaTerciaria == "losangulo") {
            let perguntaQuatro = prompt("você sabe a área pelo angulo e lado ou pelas diagonais?")
            perguntaQuatro = perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "angulo e lado" || perguntaQuatro == "ângulo e lado" || perguntaQuatro == "ael" || perguntaQuatro == "a" || perguntaQuatro == "l" || perguntaQuatro == "anguloelado") {
                let lado = Number(prompt("qual a medida do lado?"))
                let perguntaCinco = prompt("tem o angulo interno ou externo?")
                perguntaCinco = perguntaCinco.toLowerCase()
                if (perguntaCinco == "interno" || perguntaCinco == "i" || perguntaCinco == "angulo interno" || perguntaCinco == "ângulo interno") {
                    let angulo = Number(prompt("qual o angulo?"))
                    let area = Math.pow(lado, 2) * Math.sin(angulo)
                    let medida = prompt("qual a unidade de medida?")
                    let areaProcessual = area - Math.floor(area)
                    let areaParcial = area - areaProcessual
                    console.log("se o angulo interno é de " + angulo + " e o lado é " + lado + ", então a área é, parcialmente, de: " + areaParcial + " " + medida + ".\nporém, se houver decimais fica de " + areaParcial + " " + medida)
                }
                else if (perguntaCinco == "externo" || perguntaCinco == "e" || perguntaCinco == "angulo externo" || perguntaCinco == "ângulo externo") {
                    let anguloExterno = Number(prompt("qual o angulo?"))
                    let anguloInterno = 360 - anguloExterno
                    let area = Math.pow(lado, 2) * Math.sin(anguloInterno)
                    let medida = prompt("qual a unidade de medida?")
                    let areaProcessual = area - Math.floor(area)
                    let areaParcial = area - areaProcessual
                    console.log("se o angulo interno é de " + anguloExterno + " então o anguloInterno é de " + anguloInterno + "\no lado é " + lado + ", então a área é, parcialmente, de: " + areaParcial + " " + medida + ".\nporém, se houver decimais fica de " + areaParcial + " " + medida)
                }
            }
            else if (perguntaQuatro == "diagonais" || perguntaQuatro == "d" || perguntaQuatro == "pelas diagonais") {
                let diagonalMaior = Number(prompt("qual a diagonal maior??"))
                let diagonalMenor = Number(prompt("qual a diagnoal menor?"))
                let medida = prompt("qual a unidade de medida?")
                let area = (diagonalMaior * diagonalMenor) / 2
                console.log("se a diagonal menor foi de " + diagonalMenor + " e a diagonal maior é " + diagonalMaior + ", então a área é de " + area + " " + medida)
            }
        }
        else if (perguntaTerciaria == "circulo" || perguntaTerciaria == "5" || perguntaTerciaria == "5)" || perguntaTerciaria == "c") {
            console.log("vou te entregar logo a área e o comprimento da circunferencia")
            let perguntaQuatro = prompt("tem o raio ou o diâmetro?")
            perguntaQuatro = perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "raio" || perguntaQuatro == "r" || perguntaQuatro == "tenho o raio") {
                let raio = Number(prompt("qual o raio?"))
                let area = Math.PI * Math.pow(raio, 2)
                let areaProcessual = area - Math.floor(area)
                let areaParcial = area - areaProcessual
                let comprimentoDaCircunferencia = Math.PI * 2 * raio
                let comprimentoDaCircunferenciaProcessual = comprimentoDaCircunferencia - Math.floor(comprimentoDaCircunferencia)
                let comprimentoDaCircunferenciaParcial = comprimentoDaCircunferencia - comprimentoDaCircunferenciaProcessual
                let medida = prompt("qual a unidade de medida?")
                console.log("ja que o seu raio é " + raio + ", então a sua área parcial seria de " + areaParcial + " " + medida + "\nse quer com decimal se houver, fica de " + area + " " + medida + "\nja o comprimento da sua circunferencia ficaria, parcialmente, de " + comprimentoDaCircunferenciaParcial + " " + medida + " se quer com decimais, se houver, fica de " + comprimentoDaCircunferencia + medida)
            }
            else if (perguntaQuatro == "diametro" || perguntaQuatro == "d" || perguntaQuatro == "diâmetro" || perguntaQuatro == "tenho o diâmetro" || perguntaQuatro == "tenho o diametro") {
                let diametro = Number(prompt("qual o diâmetro?"))
                let raio = diametro / 2
                let area = Math.PI * Math.pow(raio, 2)
                let areaProcessual = area - Math.floor(area)
                let areaParcial = area - areaProcessual
                let comprimentoDaCircunferencia = Math.PI * 2 * raio
                let comprimentoDaCircunferenciaProcessual = comprimentoDaCircunferencia - Math.floor(comprimentoDaCircunferencia)
                let comprimentoDaCircunferenciaParcial = comprimentoDaCircunferencia - comprimentoDaCircunferenciaProcessual
                let medida = prompt("qual a unidade de medida?")
                console.log("ja que o seu diâmetro é de " + diametro + ", então o raio é " + raio + "\nentão a sua área parcial seria de " + areaParcial + " " + medida + "\nse quer com decimal se houver, fica de " + area + " " + medida + "\nja o comprimento da sua circunferencia ficaria, parcialmente, de " + comprimentoDaCircunferenciaParcial + " " + medida + "se quer com decimais, se houver, fica de " + comprimentoDaCircunferencia + medida)
            }
        }
        else if (perguntaTerciaria == "setor circular" || perguntaTerciaria == "6" || perguntaTerciaria == "6)" || perguntaTerciaria == "sc" || perguntaTerciaria == "setorcircular" || perguntaTerciaria == "s") {
            let perguntaQuatro = prompt("tem o raio?")
            perguntaQuatro = perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "sim" || perguntaQuatro == "s" || perguntaQuatro == "ss" || perguntaQuatro == "ye" || perguntaQuatro == "yeah") {
                let raio = Number(prompt("qual o raio?"))
                let medidaRaio = prompt("qual a unidade de medida do raio?")
                let angulo = Number(prompt("qual o angulo? (de 0 a 360)"))
                if (angulo <= 360) {
                    console.log("ok o angulo é válido, continuando...")
                }
                else if (angulo > 360) {
                    let angulo = angulo / 360
                    console.log("o angulo foi convertido para " + angulo) 
                }
                else if (angulo > -360) {
                    console.log("ok o angulo é válido")
                }
                else if (angulo < -360) {
                    let angulo = angulo / 360
                    console.log("o angulo foi convertido para " + angulo) 
                }
                else {
                    console.log("o angulo inserido foi invalido OwO")
                }
                let area = Math.floor((Math.PI * Math.pow(raio, 2) * angulo) / 360 * 100) / 100
                let 
                //TERMINARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
            }
        }
        else if (perguntaTerciaria == "trapézio" || perguntaTerciaria == "trapezio" || perguntaTerciaria == "7)" || perguntaTerciaria == "7" || perguntaTerciaria == "tra") {
            let baseMaior = Number(prompt("qual a base maior do trapézio?"))
            let baseMenor = Number(prompt("qual a base menor do trapézio?"))
            let altura = Number(prompt("qual a altura?"))
            let perguntaQuatro = prompt("quer o perimetro também?")
            perguntaQuatro = perguntaQuatro.toLowerCase()
            if (perguntaQuatro == "sim" || perguntaQuatro == "s" || perguntaQuatro == "ss" || perguntaQuatro == "ye" || perguntaQuatro == "yeah" || perguntaQuatro == "yep") {
                let ladoUm = prompt("qual a medida do primeiro lado?")
                let ladoDois = prompt("qual a medida do segundo lado?")
                let medida = prompt("qual a unidade de medida?")
                let area = ((baseMaior + baseMenor) * altura) / 2
                let perimetro = baseMaior + baseMenor + ladoUm + ladoDois
                console.log("ok, ja que sua altura é " + altura + ", sua base maior é " + baseMaior + ", sua base menor é " + baseMenor + ", e os lados são de " + ladoUm + " e " + ladoDois + " " + medida + "\nentão a sua área seria de " + area + " " + medida + " e seu perimetro de " + perimetro + " " + medida)
            }
            else if (perguntaQuatro == "n" || perguntaQuatro == "nn" || perguntaQuatro == "nah" || perguntaQuatro == "noup" || perguntaQuatro == "nao" || perguntaQuatro == "não" || perguntaQuatro == "ñ") {
                let medida = prompt("qual a unidade de medida?")
                let area = ((baseMaior + baseMenor) * altura) / 2
                console.log("ok, ja que sua altura é " + altura + ", sua base maior é " + baseMaior + " e sua base menor é " + baseMenor + "\nentão a sua área seria de " + area + " " + medida)
            }
        }
        else if (perguntaTerciaria == "poligonos regulares em geral" || perguntaTerciaria == "8" || perguntaTerciaria == "8)" || perguntaTerciaria == "poligonos" || perguntaTerciaria == "polígonos" || perguntaTerciaria == "polígonos regulares em geral" || perguntaTerciaria == "po" || perguntaTerciaria == "poligonos regulares" || perguntaTerciaria == "polígonos regulares") {
            while (true) {
                let perguntaQuatro = prompt("você tem o apótema?")
                perguntaQuatro = perguntaQuatro.toLowerCase()
                if (perguntaQuatro == "n" || perguntaQuatro == "nn" || perguntaQuatro == "nah" || perguntaQuatro == "noup" || perguntaQuatro == "nao" || perguntaQuatro == "não" || perguntaQuatro == "ñ") {
                    let perguntaCinco = prompt("tem o raio? (do centro ao lado)")
                    perguntaCinco = perguntaCinco.toLowerCase()
                    if (perguntaCinco == "n" || perguntaCinco == "nn" || perguntaCinco == "nah" || perguntaCinco == "noup" || perguntaCinco == "nao" || perguntaCinco == "não" || perguntaCinco == "ñ") {
                        console.log("welp, não tem como você fazer nada ai, mals ae")
                        let perguntaSeis = prompt("quer continuar as operações?")
                        perguntaSeis = perguntaSeis.toLowerCase()
                        if (perguntaSeis == "sim" || perguntaSeis == "ss" || perguntaSeis == "s" || perguntaSeis == "yea" || perguntaSeis == "yeah" || perguntaSeis == "yep") {
                            console.log("ok, continua ai as operaçõeszinhas :3")
                        }
                        else if (perguntaSeis == "n" || perguntaSeis == "nn" || perguntaSeis == "não" || perguntaSeis == "nao" || perguntaSeis == "nah" || perguntaSeis == "noup") {
                            console.log("ok, tchauu :3")
                            break
                        }
                    }
                    else if (perguntaCinco == "sim" || perguntaCinco == "ss" || perguntaCinco == "s" || perguntaCinco == "yea" || perguntaCinco == "yeah" || perguntaCinco == "yep") {
                        let raio = Number(prompt("qual o raio?"))
                        let numeroDeLados = Number(prompt("qual o numero de lados do seu poligono?"))
                        let apotema = raio * Math.cos(Math.PI / numeroDeLados)
                        let apotemaComparativo = apotema - Math.floor(apotema)
                        if (apotemaComparativo < 0.5) {
                            apotema = Math.floor(apotema * 100) / 100
                        }
                        else {
                            apotema = Math.floor(apotema) + 1
                        }
                        let lado = Number(prompt("qual a medida do lado?"))
                        let perimetro = numeroDeLados * lado
                        let area = (perimetro * apotema) / 2
                        let medida = ("qual a unidade de medida?")
                        let diagonal = (numeroDeLados * (numeroDeLados - 3)) / 2
                        console.log("ja que o seu raio é " + raio + " então o apotema é " + apotema + ", sua área é de" + area + " " + medida + "\nseu perimetro é de " + perimetro + " e o numero de diagnoais é " + diagonal)
                        let perguntaSeis = prompt("quer continuar as operações?")
                        perguntaSeis = perguntaSeis.toLowerCase()
                        if (perguntaSeis == "sim" || perguntaSeis == "ss" || perguntaSeis == "s" || perguntaSeis == "yea" || perguntaSeis == "yeah" || perguntaSeis == "yep") {
                            console.log("ok, continua ai as operaçõeszinhas :3")
                        }
                        else if (perguntaSeis == "n" || perguntaSeis == "nn" || perguntaSeis == "não" || perguntaSeis == "nao" || perguntaSeis == "nah" || perguntaSeis == "noup") {
                            console.log("ok, tchauu :3")
                            break
                        }
                    }
                }
                else if (perguntaQuatro == "sim" || perguntaQuatro == "ss" || perguntaQuatro == "s" || perguntaQuatro == "yea" || perguntaQuatro == "yeah" || perguntaQuatro == "yep") {
                    let apotema = Number(prompt("qual o valor do apótema? (no max 2 casas decimais)"))
                    let numeroDeLados = Number(prompt("qual o número de lados?"))
                    let lado = Number(prompt("qual o valor do lado do poligono?"))
                    let medida = prompt("qual a unidade de medida?")
                    let perimetro = numeroDeLados * lado
                    let area = perimetro * apotema
                    let diagonal = (numeroDeLados * (numeroDeLados - 3)) / 2
                    console.log("ok, se o apotema é " + apotema + ", o numero de lados é " + numeroDeLados + " e o valor de um lado é " + lado + "\nentão o perimetro é de " + perimetro + " e a área de " + area + " " + medida + "\nja o numero de diagonais é " + diagonal)
                    let perguntaCinco = prompt("quer continuar as operações?")
                    perguntaCinco = perguntaCinco.toLowerCase()
                    if (perguntaCinco == "sim" || perguntaCinco == "ss" || perguntaCinco == "s" || perguntaCinco == "yea" || perguntaCinco == "yeah" || perguntaCinco == "yep") {
                        console.log("ok, continua ai as operaçõeszinhas :3")
                    }
                    else if (perguntaCinco == "n" || perguntaCinco == "nn" || perguntaCinco == "não" || perguntaCinco == "nao" || perguntaCinco == "nah" || perguntaCinco == "noup") {
                        console.log("ok, tchauu :3")
                        break
                    }
                }
            }
        }
    }
}
else if (perguntaInicial =="b" || perguntaInicial == "calcular operações" || perguntaInicial == "calcular operacoes") {
    console.log("instruções:\ndigite '+' para somar.\ndigite '-' para subtrair.\ndigite 'x', ou '*' para multiplicar, se não houver sinal entre número e parenteses, automaticamente irá se tornar uma multiplicação.\ndigite '/' para dividir.\ndigite '^' para elevar o numero anterior ao proximo número.\npara raizes utilize exponenciação com o segundo número sendo uma divisão ou multiplicação.\npara utilizar seno, cosseno e tangente, utilize, respectivamente: 'sen', 'cos', 'tan'.\nuse 'arsen', 'arccos' e 'arctan' para o inverso de seno cosseno e tangente, respectivamente.\ndigite 'log' em seguida o numero da base, e após isso o numero, se não tiver um proximo numero, ele ira considerar que o numero posto é um numero normal e a base vai ser 10.\npara parenteses, colchetes e chaves, ultilize como quiser.\nfatorial é feito com 'fatorial' e o numero posterior.")
    let expressao = prompt("escreva sua expressão númerica")
    let expressuda = expressao.match(/\d+\.?\d*|arctan|arcsen|arccos|sen|cos|tan|log|fatorial|x|elevado a|raiz de|raiz|[+\-*/^()[\]{}]/g)
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
                                if (listaExpressionista[i + 2] !== Number) {
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
                            else if(dentroDoi != listaExpressionista.includes("^") && dentroDoi != listaExpressionista.includes("log") && dentroDoi != listaExpressionista.includes("sen") && dentroDoi != listaExpressionista.includes("cos") && dentroDoi != listaExpressionista.includes("tan") && dentroDoi != listaExpressionista.includes("arctan") && listaExpressionista.includes("raiz")) {
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
else if (perguntaInicial == "c" || perguntaInicial == "angulos" || perguntaInicial == "ângulos") {
    console.log("escolha a opção que você quiser OwO\n1) Adição de angulos\n2) angulos em quadrilateros\n3) triangulos\n4) poligono ")
    let perguntaSecundaria = prompt("R:").toLowerCase()
    if (perguntaSecundaria == "1" || perguntaSecundaria == "1)" || perguntaSecundaria == "aa" || perguntaSecundaria == "adição de angulos" || perguntaSecundaria == "adicao de angulos" || perguntaSecundaria == "1) adição de angulos") {
        console.log("quer resolver:\n1) Ângulos complementares\n2) Ângulos suplementares\n3) Ângulos replementares")
        let perguntaTerciaria = prompt("R:").toLowerCase()
        if (perguntaTerciaria == "1)" || perguntaTerciaria == "1" || perguntaTerciaria == "angulos complementares" || perguntaTerciaria == "complementares" || perguntaTerciaria == "c") {
    }
        else if (perguntaTerciaria == "2)" || perguntaTerciaria == "2" || perguntaTerciaria == "angulos suplementares" || perguntaTerciaria == "suplementares" || perguntaTerciaria == "s") {
            console.log("nota: ângulos suplementares são angulos que a soma é 180!\nqual é um dos angulos que você conhece?")
            let angulo = parseInt(prompt("R: "))
            if (angulo < 180) {
            let anguloResultante = 180 - angulo
            console.log("o angulo colocado foi: " + angulo + "°\nEntão o angulo que falta pra dar 180° é " + anguloResultante + "°")
            }    
        }
        else if (perguntaTerciaria == "3)" || perguntaTerciaria == "3" || perguntaTerciaria == "angulos replementares" || perguntaTerciaria == "replementares" || perguntaTerciaria == "s") {

        }
    }
    /*
    angulos complementares, suplementares e replementar/explementar
    quadrilateros (trapezio, regulares)
    triangulo (isoceles, retangulo e equilatero)
    poligono regular (angulo, lados, diagonais)
    */
    
}
else if (perguntaInicial == "d" || perguntaInicial == "conversão" || perguntaInicial == "conversão de unidades" || perguntaInicial == "conversao") {

}
else if (perguntaInicial == "e" || perguntaInicial == "diversos" || perguntaInicial == "diversos (por resenha)") {

}
else {
    let a = Math.floor(Math.random() * 101)
    console.log(fatorial(5))
    console.log(a)
}