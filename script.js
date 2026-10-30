const caixaPrincipal = dicument.querySelector(".caixa-pricipal");
const caixaPerguntas = dicument.querySelector(".caixa-perguntas");
const caixaAlternativas = dicument.querySelector(".caixa-alternativas");
const caixaResultado = dicument.querySelector(".caixa-resultado");
const textoResultado = dicument.querySelector(".texto-resultado");

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