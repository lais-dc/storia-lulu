const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "desempate entre jefferson ou burr",
        alternativas: [
            {
                texto: " Jefferson",
                afirmação: "afirmação"
            },
            {
                texto: "Burr",
                afirmação: "afirmação"
            }
            
        ]
    },
    {
        enunciado: "eleição governador de nova york",
        alternativas: [
            {
                texto: "apoiar a campanha de lewis",
                afirmação: "afirmação"
            },
            {
                texto: "apoiar vigorosamente campanha contra burr",
                afirmação: "afirmação"
            }
            
            
        ]
    },
    {
        enunciado: "duelo Hamilton-Burr",
        alternativas: [
            {
                texto: "atirar parar cima",
                afirmação: "afirmação"
            },
            {
                texto: "atirar em Burr",
                afirmação: "afirmação"
            }
            
            
        ]
    },
    {
        enunciado: "morte de hamilton",
        alternativas: [
            {
                texto: "levar hamilton até um hospital",
                afirmação: "afirmação"
            },
            {
                texto: "deixa-lo por si só no local",
                afirmação: "afirmação"
            }
            
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativa);

    }
}


mostraPergunta();