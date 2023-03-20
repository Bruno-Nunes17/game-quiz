function gameQuiz(){
const textoPerguntas = document.querySelector(".texto-perguntas");
const numeroPerguntas = document.querySelector(".numero-perguntas");
const botaoRespostaA = document.querySelector("#alternativa-A");
const botaoRespostaB = document.querySelector("#alternativa-B");
const botaoRespostaC = document.querySelector("#alternativa-C");
const botaoRespostaD = document.querySelector("#alternativa-D");
const botaoVoltar = document.querySelector("#botao-voltar");
const botaoReinicar = document.querySelector("#botao-reiniciar");
const botaoAvancar = document.querySelector("#botao-avancar");
const telaFimDeJogo = document.querySelector(".fim-jogo");
const pontosPorcentagem = document.querySelector(".pontos-porcentagem");
const barraDeNota = document.querySelector(".barra-de-nota");

let indice = 0;
let pontuacao = 0;
let totalDePerguntas;
let fimDeJogo = false;
let notaFinal = 0;

function armazenaPerguntas() {
  const perguntas = [
    {
      pergunta: "Em que ano a lei 10.639 foi promulgada?",
      respostaA: "2005",
      respostaB: "2008",
      respostaC: "2003",
      respostaD: "2015",
      correta: "2008",
    },
    {
      pergunta: "Qual é o principal objetivo da lei 10.639?",
      respostaA: "Tornar obrigatório o ensino de História e Cultura Afro-brasileira e africana na educação básica do pai.",
      respostaB: "Tornar obrigatório o ensino de História e Cultura Afro-brasileira apenas no Ensino Fundamental.",
      respostaC: "Tornar obrigatório o ensino de História e Cultura Afro-brasileira e Africana e Indígena apenas no Ensino Médio.",
      respostaD: "Tornar obrigatório o ensino de História e Cultura Afro-brasileira e africana apenas no Ensino Superior.",
      correta: "Tornar obrigatório o ensino de História e Cultura Afro-brasileira e africana na educação básica do pai.",
    },
    {
      pergunta: "A lei 10.639, também inclui no calendário escolar uma data muito importante no Brasil, que data é essa e o que se comemora nesse dia?",
      respostaA: "13 de maio, abolição da escravidão.",
      respostaB: "20 de novembro – Dia da Consciência Negra.",
      respostaC: "15 de novembro – Proclamação da República.",
      respostaD: "25 de maio – Dia Internacional da África.",
      correta: "20 de novembro – Dia da Consciência Negra.",
    },
    {
      pergunta: "O Dia da Consciência está relacionado a luta de qual personagem da história brasileira?",
      respostaA: "João Cândido",
      respostaB: "Maria Filipa",
      respostaC: "Carolina Maria de Jesus",
      respostaD: "Zumbi dos Palmares",
      correta: "Zumbi dos Palmares",
    },
    {
      pergunta: "A criação da lei 10.639, foi fruto da luta?",
      respostaA: "Movimento Negro",
      respostaB: "Movimento feminista",
      respostaC: "Movimento abolicionista",
      respostaD: "Movimento ambientalista",
      correta: "Movimento Negro",
    },
  ];
  totalDePerguntas = perguntas.length;
  return perguntas;
}
function trocaIndice() {
  indice++;
  return indice;
}
function Pontuacao() {
  pontuacao++;
  return pontuacao;
}
function mostraPerguntas() {
  let perguntas = armazenaPerguntas();

  textoPerguntas.textContent = perguntas[indice].pergunta;
  botaoRespostaA.textContent = perguntas[indice].respostaA;
  botaoRespostaB.textContent = perguntas[indice].respostaB;
  botaoRespostaC.textContent = perguntas[indice].respostaC;
  botaoRespostaD.textContent = perguntas[indice].respostaD;
  botaoRespostaA.style.background = "white";
  botaoRespostaB.style.background = "white";
  botaoRespostaC.style.background = "white";
  botaoRespostaD.style.background = "white";
  numeroPerguntas.textContent = `${indice + 1} de ${totalDePerguntas}`;
}
function calculaPontuação() {
  let perguntas = armazenaPerguntas();
  let calculaPontuação = (pontuacao * 100) / perguntas.length;

  notaFinal = calculaPontuação.toFixed(2);
  return calculaPontuação;
}
function numeroDePerguntas() {
  let Perguntas = armazenaPerguntas();
  totalDePerguntas = Perguntas.length;
}
function mudaPergunta() {
  let totalPerguntas = totalDePerguntas;
  let respondidas = indice;
  if (respondidas == totalDePerguntas) {
    atribuirNota();
    telaFimDeJogo.classList.add("aberto");
  } else {
    numeroDePerguntas();
    mostraPerguntas();
  }
}
function atribuirNota() {
  pontosPorcentagem.textContent = `${notaFinal}%`;
  barraDeNota.style.width = `${notaFinal}%`;
}
function respostaA() {
  if (!fimDeJogo) {
    let pergunta = armazenaPerguntas();
    let btnRespostaA = pergunta[indice].respostaA;
    let resposta = pergunta[indice].correta;
    if (btnRespostaA === resposta) {
      botaoRespostaA.style.background = "green";
      trocaIndice();
      Pontuacao();
      fimDeJogo = true;
    } else {
      botaoRespostaA.style.background = "red";
      trocaIndice();
      fimDeJogo = true;
    }
  }
}
function respostaB() {
  if(!fimDeJogo){
  let pergunta = armazenaPerguntas();
  let btnRespostaB = pergunta[indice].respostaB;
  let resposta = pergunta[indice].correta;
  if (btnRespostaB === resposta) {
    botaoRespostaB.style.background = "green";
    trocaIndice();
    Pontuacao();
    fimDeJogo = true;
  } else {
    botaoRespostaB.style.background = "red";
    trocaIndice();
    fimDeJogo = true;
  }
}
}
function respostaC() {
  if(!fimDeJogo){
  let pergunta = armazenaPerguntas();
  let btnRespostaC = pergunta[indice].respostaC;
  let resposta = pergunta[indice].correta;
  if (btnRespostaC === resposta) {
    botaoRespostaC.style.background = "green";
    trocaIndice();
    Pontuacao();
    fimDeJogo = true;
  } else {
    botaoRespostaC.style.background = "red";
    trocaIndice();
    fimDeJogo = true;
  }
}
}
function respostaD() {
  if(!fimDeJogo){
  let pergunta = armazenaPerguntas();
  let btnRespostaD = pergunta[indice].respostaD;
  let resposta = pergunta[indice].correta;
  if (btnRespostaD === resposta) {
    botaoRespostaD.style.background = "green";
    trocaIndice();
    Pontuacao();
    fimDeJogo = true;
  } else {
    botaoRespostaD.style.background = "red";
    trocaIndice();
    fimDeJogo = true;
  }
}
}
botaoRespostaA.addEventListener("click", () => {
  respostaA();
});
botaoRespostaB.addEventListener("click", () => {
  respostaB();
});
botaoRespostaC.addEventListener("click", () => {
  respostaC();
});
botaoRespostaD.addEventListener("click", () => {
  respostaD();
});
botaoAvancar.addEventListener("click", () => {
  mudaPergunta();
  calculaPontuação();
  atribuirNota();
  fimDeJogo = false;
});
numeroDePerguntas();
mostraPerguntas();
}
gameQuiz();