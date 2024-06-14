const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dos seguintes não é um subcampo da Inteligência Artificial?",
        alternativas: [
            "Aprendizado de Máquina.",
            "Processamento de Linguagem Natural.",
            "Realidade Virtual.",
            "Visão Computacional."
        ]
    },

    {
        enunciado: "Qual é uma das principais técnicas de aprendizado utilizadas em IA?",
        alternativas: [
            "Algoritmos de Busca.",
            "Álgebra Linear.",
            "Métodos Estatísticos.",
            "Programação Orientada a Objetos."
        ]
    },

    {
        enunciado: "Quais são os dois tipos principais de aprendizado de máquina?",
        alternativas: [
            "Supervisionado e Não Supervisionado.",
            "Linear e Não Linear.",
            "Simbólico e Estocástico.",
            "Determinístico e Probabilístico."
        ]
    },

    {
        enunciado: "Qual é a diferença entre Inteligência Artificial Geral (AGI) e Inteligência Artificial Estreita (ANI)?",
        alternativas: [
            "AGI pode realizar tarefas variadas, enquanto ANI é especializada em uma única tarefa.",
            "AGI é mais rápida que ANI em processamento de dados.",
            "ANI é mais adaptável a novos cenários do que AGI.",
            "AGI é apenas um termo antigo para ANI."
        ]
    },

    {
        enunciado: "Qual é um dos maiores desafios éticos relacionados à Inteligência Artificial?",
        alternativas: [
            "A falta de controle humano sobre as máquinas.",
            "A falta de aplicabilidade prática da IA.",
            "A rápida evolução da IA, que dificulta a regulamentação.",
            "A tendência da IA de se tornar muito amigável."

        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
