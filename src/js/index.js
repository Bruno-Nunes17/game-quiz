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
const pontosPorcentagem = document.querySelector('.pontos-porcentagem')
const barraDeNota = document.querySelector('.barra-de-nota')

let indice = 0;
let pontuacao = 0;
let totalDePerguntas;
let fimDeJogo = false;
let notaFinal = 0;

function armazenaPerguntas() {
  const perguntas = [
    {
      pergunta: "Qual é a capital do Brasil?",
      respostaA: "Rio de Janeiro",
      respostaB: "Brasília",
      respostaC: "São Paulo",
      respostaD: "Belo Horizonte",
      correta: "Brasília",
    },
    {
      pergunta: "Quem pintou a Mona Lisa?",
      respostaA: "Leonardo da Vinci",
      respostaB: "Pablo Picasso",
      respostaC: "Vincent van Gogh",
      respostaD: "Michelangelo",
      correta: "Leonardo da Vinci",
    },
    {
      pergunta: "Quantos elementos químicos existem atualmente?",
      respostaA: "118",
      respostaB: "92",
      respostaC: "101",
      respostaD: "124",
      correta: "118",
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
    telaFimDeJogo.classList.add("aberto")
  } else {
    numeroDePerguntas();
    mostraPerguntas();
  }
}
function atribuirNota (){
    pontosPorcentagem.textContent = `${notaFinal}%`;
    barraDeNota.style.width = `${notaFinal}%`;
}
botaoRespostaA.addEventListener("click", () => {
  let pergunta = armazenaPerguntas();
  let btnRespostaA = pergunta[indice].respostaA;
  let resposta = pergunta[indice].correta;
  if (btnRespostaA === resposta) {
    botaoRespostaA.style.background = "green";
    trocaIndice();
    Pontuacao();
  } else {
    botaoRespostaA.style.background = "red";
    trocaIndice();
  }
});
botaoRespostaB.addEventListener("click", () => {
  let pergunta = armazenaPerguntas();
  let btnRespostaB = pergunta[indice].respostaB;
  let resposta = pergunta[indice].correta;
  if (btnRespostaB === resposta) {
    botaoRespostaB.style.background = "green";
    trocaIndice();
    Pontuacao();
  } else {
    botaoRespostaB.style.background = "red";
    trocaIndice();
  }
});
botaoRespostaC.addEventListener("click", () => {
  let pergunta = armazenaPerguntas();
  let btnRespostaC = pergunta[indice].respostaC;
  let resposta = pergunta[indice].correta;
  if (btnRespostaC === resposta) {
    botaoRespostaC.style.background = "green";
    trocaIndice();
    Pontuacao();
  } else {
    botaoRespostaC.style.background = "red";
    trocaIndice();
  }
});
botaoRespostaD.addEventListener("click", () => {
  let pergunta = armazenaPerguntas();
  let btnRespostaD = pergunta[indice].respostaD;
  let resposta = pergunta[indice].correta;
  if (btnRespostaD === resposta) {
    botaoRespostaD.style.background = "green";
    trocaIndice();
    Pontuacao();
  } else {
    botaoRespostaD.style.background = "red";
    trocaIndice();
  }
});
botaoAvancar.addEventListener("click", () => {
  mudaPergunta();
  calculaPontuação();
  atribuirNota();
});
numeroDePerguntas();
mostraPerguntas();

