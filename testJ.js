const prompt = require("prompt-sync")()
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let matematica = {
    assuntos: [
        "comprimento e area",
        "volume",
        "matematica financeira",
        "estatistica"
    ]
}
let fisica = {
    assuntos: [
        "cinematica",
        "dinamica",
        "termodinamica",
        "optica/ondulatoria",
        "eletromagnetismo"
    ]
}
let quimica = {
    assuntos: [
        "estequiometria",
        "gases ideais",
        "quimica analitica/ambiental"
    ]
}
let topografia = {
    assuntos: [
        "medir áreas ágrarias",
        "alimetria e planimetria"
    ]
}
let hidraulica = {
    assuntos: [
        "hidrodinâmica",
        "sistemas de bombeamento"
    ]
}
let desenhoTecnico = {
    assuntos: [
        "metrologia",
        "escalas"
    ]
}
let resistenciaDosMateriais = {
    assuntos: [
        "dimensionamento de estruturas"
    ]
}
let informatica = {
    assuntos: [
        "arquitetura de computadores",
        "rede de computadores"
    ]
}
let materia = ["matematica", "fisica", "quimica", "topografia", "hidraulica", "desenho tecnico", "informatica", "resistencia dos materiais"]
let listaDeOpcoes = []
let opcao = ""
function mostrarOpcoes(listaDeOpcoes) {
    let unidadeDeMedida = ""
    for (let i = 0; i < listaDeOpcoes.length;i++) {}
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
function AdicionarOpcoes(listaDeOpcoes) {
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
function mostrarOpcoes() {
    for (let i = 0; i < materia.length; i++) {
        console.log(materia[i])
    }
    let resposta = prompt("materia: ")
    switch(resposta) {
        case "matematica":
            for (let i = 0; i < matematica.assuntos.length; i++) {
                console.log(matematica.assuntos[i])
            }
            break
        case "fisica":
            for (let i = 0; i < fisica.assuntos.length; i++) {
                console.log(fisica.assuntos[i])
            }
            break
        case "quimica":
            for (let i = 0; i < quimica.assuntos.length; i++) {
                console.log(quimica.assuntos[i])
            }
            break
        case "topografia":
            for (let i = 0; i < topografia.assuntos.length; i++) {
                console.log(topografia.assuntos[i])
            }
            break
        case "hidraulica":
            for (let i = 0; i < hidraulica.assuntos.length; i++) {
                console.log(hidraulica.assuntos[i])
            }
            break
        case "desenho tecnico":
            for (let i = 0; i < desenhoTecnico.assuntos.length; i++) {
                console.log(desenhoTecnico.assuntos[i])
            }
            break
        case "informatica":
            for (let i = 0; i < informatica.assuntos.length; i++) {
                console.log(informatica.assuntos[i])
            }
            break
        case "resistencia dos materiais":
            for (let i = 0; i < resistenciaDosMateriais.assuntos.length; i++) {
                console.log(resistenciaDosMateriais.assuntos[i])
            }
            break
    }
}
/*
const prompt = require("prompt-sync")()
console.log("conversão de unidades de medida!")
console.log("C° -> F° = (c - 32)/9")
console.log("C° -> K° = c + 273")
console.log("K° -> C° = k - 273")
console.log("K° -> F° = (k - 305)/9")
console.log("F° -> C° = f * 9 + 32")
console.log("F° -> K° = f * 9 + 305")
 menu pra usar a conversão de unidades, armazenar as opções, 
console.log(Math.sqrt(-1))

📏 1. Espaço

• Distância
	• Fórmula: \(d = v \cdot t\)
	• Unidade SI: Metro (\(m\))
	• Exemplos para conversão: Metro (\(m\)), Quilômetro (\(km\)), Milha (\(mi\))
• Microescala
	• Fórmula: \(\lambda = \frac{v}{f}\)
	• Unidade SI: Metro (\(m\))
	• Exemplos para conversão: Milímetro (\(mm\)), Micrômetro (\(\mu m\)), Polegada (\(in\))
• Superfície
	• Fórmula: \(A = b \cdot h\)
	• Unidade SI: Metro quadrado (\(m^{2}\))
	• Exemplos para conversão: Metro quadrado (\(m^{2}\)), Centímetro quadrado (\(cm^{2}\)), Hectare (\(ha\))
• Capacidade
	• Fórmula: \(V = A \cdot h\)
	• Unidade SI: Metro cúbico (\(m^{3}\))
	• Exemplos para conversão: Litro (\(L\)), Mililitro (\(mL\)), Metro cúbico (\(m^{3}\))
• Inclinação
	• Fórmula: \(\theta = \frac{s}{r}\)
	• Unidade SI: Radiano (\(rad\))
	• Exemplos para conversão: Grau (\({}^{\circ }\)), Radiano (\(rad\)), Gradianos (\(grad\))

⚖️ 2. Mecânica

• Matéria
	• Fórmula: \(m = \frac{F}{a}\)
	• Unidade SI: Quilograma (\(kg\))
	• Exemplos para conversão: Grama (\(g\)), Quilograma (\(kg\)), Libra (\(lb\))
• Torque
	• Fórmula: \(F = m \cdot a\)
	• Unidade SI: Newton (\(N\))
	• Exemplos para conversão: Newton (\(N\)), Quilonewton (\(kN\)), Quilograma-força (\(kgf\))
• Tensão
	• Fórmula: \(P = \frac{F}{A}\)
	• Unidade SI: Pascal (\(Pa\))
	• Exemplos para conversão: Pascal (\(Pa\)), Megapascal (\(MPa\)), PSI (\(psi\))
• Fluidez
	• Fórmula: \(\rho = \frac{m}{V}\)
	• Unidade SI: Quilograma por metro cúbico (\(kg/m^3\))
	• Exemplos para conversão: Grama por centímetro cúbico (\(g/cm^3\)), Quilograma por litro (\(kg/L\)), Tonelada por metro cúbico (\(t/m^3\))

⏱️ 3. Movimento

• Cronologia
	• Fórmula: \(t = \frac{d}{v}\)
	• Unidade SI: Segundo (\(s\))
	• Exemplos para conversão: Segundo (\(s\)), Minuto (\(min\)), Hora (\(h\))
• Rotação
	• Fórmula: \(v = \frac{d}{t}\)
	• Unidade SI: Metro por segundo (\(m/s\))
	• Exemplos para conversão: Metros por segundo (\(m/s\)), Quilômetros por hora (\(km/h\)), Rotações por minuto (\(rpm\))
• Fluxo
	• Fórmula: \(Q = \frac{V}{t}\)
	• Unidade SI: Metro cúbico por segundo (\(m^3/s\))
	• Exemplos para conversão: Litros por minuto (\(L/min\)), Metros cúbicos por hora (\(m^3/h\)), Galões por minuto (\(gpm\))

🌡️ 4. Térmica

• Caloria
	• Fórmula: \(T_K = T_C + 273,15\)
	• Unidade SI: Kelvin (\(K\))
	• Exemplos para conversão: Celsius (\({}^{\circ }C\)), Fahrenheit (\({}^{\circ }F\)), Kelvin (\(K\))
• Trabalho
	• Fórmula: \(E = P \cdot t\)
	• Unidade SI: Joule (\(J\))
	• Exemplos para conversão: Joule (\(J\)), Caloria (\(cal\)), Quilowatt-hora (\(kWh\))
• Rendimento
	• Fórmula: \(P = \frac{E}{t}\)
	• Unidade SI: Watt (\(W\))
	• Exemplos para conversão: Watt (\(W\)), Cavalo-vapor (\(cv\)), Horsepower (\(hp\))

⚡ 5. Elétrica

• Eletricidade
	• Fórmula: \(V = R \cdot I\)
	• Unidade SI: Volt (\(V\)) / Ampere (\(A\)) / Ohm (\(\Omega \))
	• Exemplos para conversão: Volt (\(V\)), Milivolt (\(mV\)), Quilovolt (\(kV\))
• Armazenamento
	• Fórmula: \(C = \frac{Q}{V}\)
	• Unidade SI: Farad (\(F\))
	• Exemplos para conversão: Microfarad (\(\mu F\)), Nanofarad (\(nF\)), Picofarad (\(pF\))
• Alternada
	• Fórmula: \(S = V \cdot I\)
	• Unidade SI: Volt-Ampere (\(VA\))
	• Exemplos para conversão: Volt-Ampere (\(VA\)), Quilovolt-Ampere (\(kVA\)), Watt (\(W\))
• Ondas
	• Fórmula: \(f = \frac{1}{T}\)
	• Unidade SI: Hertz (\(Hz\))
	• Exemplos para conversão: Hertz (\(Hz\)), Quilohertz (\(kHz\)), Megahertz (\(MHz\))
• Iluminação
	• Fórmula: \(E = \frac{\Phi}{A}\)
	• Unidade SI: Lux (\(lx\))
	• Exemplos para conversão: Lúmen (\(lm\)), Lux (\(lx\)), Candela (\(cd\))

💻 6. Dados

• Memória
	• Fórmula: \(B = 8 \cdot b\)
	• Unidade SI: Byte (\(B\)) [não oficial no SI, mas padrão de fato]
	• Exemplos para conversão: Megabyte (\(MB\)), Gigabyte (\(GB\)), Terabyte (\(TB\))
• Redes
	• Fórmula: \text{Taxa} = \frac{\text{Dados}}{t}
	• Unidade SI: Bits por segundo (\(bps\))
	• Exemplos para conversão: Kilobits por segundo (\(kbps\)), Megabits por segundo (\(Mbps\)), Gigabits por segundo (\(Gbps\))

🧪 7. Química

• Soluções
	• Fórmula: \(C = \frac{m}{V}\)
	• Unidade SI: Quilograma por metro cúbico (\(kg/m^3\))
	• Exemplos para conversão: Grama por litro (\(g/L\)), Mol por litro (\(mol/L\)), Partes por milhão (\(ppm\))

*/