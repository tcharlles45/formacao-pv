//AULAS

const aulas = document.querySelectorAll(".aulas button");

function ativaraula(event) {
  const aula = event.currentTarget;
  const controls = aula.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains('ativa');
  aula.setAttribute('aria-expanded', ativa);
}

function eventosaulas(aula) {
  aula.addEventListener("click", ativaraula);
}

aulas.forEach(eventosaulas);

//FAQ

const perguntas = document.querySelectorAll(".faq button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);