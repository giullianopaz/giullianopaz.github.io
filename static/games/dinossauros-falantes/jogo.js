const pasta = new URL('./', location.href);
const grade = document.querySelector('#dinossauros');
const estado = document.querySelector('#estado');
const icone = document.querySelector('#alto-falante');
const audio = new Audio();
audio.preload = 'none';

let botaoAtivo;
let tentativa = 0;

function limparDestaque() {
  botaoAtivo?.classList.remove('tocando');
  botaoAtivo = undefined;
}

function erroDeAudio() {
  limparDestaque();
  estado.textContent = 'Não deu para tocar o áudio. Toque no botão de novo.';
}

async function tocar(botao, arquivo) {
  const atual = ++tentativa;
  limparDestaque();
  estado.textContent = '';
  audio.pause();

  const url = new URL(arquivo, pasta).href;
  if (audio.src !== url || audio.error) {
    audio.src = url;
  } else {
    audio.currentTime = 0;
  }

  botaoAtivo = botao;
  botao.classList.add('tocando');

  try {
    await audio.play();
  } catch {
    if (atual === tentativa) erroDeAudio();
  }
}

audio.addEventListener('ended', () => {
  if (audio.ended) limparDestaque();
});
audio.addEventListener('error', () => {
  if (audio.error && botaoAtivo) erroDeAudio();
});

function criarBotao(entrada, classe, idioma) {
  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = classe;
  const acao = document.createElement('span');
  acao.className = 'sr-only';
  acao.textContent = `Ouvir em ${idioma}: `;

  const nome = document.createElement('span');
  nome.lang = entrada.lang;
  nome.textContent = entrada.nome;
  botao.append(acao, icone.content.cloneNode(true), nome);
  botao.addEventListener('click', () => tocar(botao, entrada.audio));
  return botao;
}

function criarCartao(dinossauro, indice) {
  const cartao = document.createElement('li');
  cartao.className = 'cartao';
  const moldura = document.createElement('div');
  moldura.className = 'ilustracao';

  const imagem = document.createElement('img');
  imagem.src = new URL(dinossauro.imagem, pasta).href;
  imagem.alt = dinossauro.descricaoImagem;
  if (indice >= 4) imagem.loading = 'lazy';
  moldura.append(imagem);

  const botoes = document.createElement('div');
  botoes.className = 'botoes';
  botoes.append(
    criarBotao(dinossauro.pt, 'portugues', 'português'),
    criarBotao(dinossauro.en, 'ingles', 'inglês'),
  );
  cartao.append(moldura, botoes);
  return cartao;
}

async function carregarDinossauros() {
  try {
    const resposta = await fetch(new URL('dinossauros.json', pasta));
    if (!resposta.ok) throw new Error('Catálogo indisponível');
    const dinossauros = await resposta.json();
    grade.replaceChildren(...dinossauros.map(criarCartao));
  } catch {
    estado.textContent = 'Os dinossauros não carregaram. Recarregue a página para tentar de novo.';
  }
}

carregarDinossauros();
