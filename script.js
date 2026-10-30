const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "desempate entre jefferson ou burr",
        alternativas: [
            "Jefferson",
            "Burr"
        ]
    },
    {
        enunciado: "eleição governador de nova york",
        alternativas: [
            "apoiar a campanha de lewis",
            "apoiar vigorosamente campanha contra burr"
        ]
    },
    {
        enunciado: "duelo Hamilton-Burr",
        alternativas: [
            "atirar parar cima",
            "atirar em Burr"
        ]
    },
    {
        enunciado: "morte de hamilton",
        alternativas: [
            "levar hamilton até um hospital",
            "deixa-lo por si só no local"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();