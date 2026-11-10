const pasta = '/ed/paises/';
const grade = document.querySelector('#paises');
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

  const url = new URL(pasta + arquivo, location.origin).href;
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
  botao.append(icone.content.cloneNode(true));

  const rotulo = document.createElement('span');
  const nome = document.createElement('bdi');
  nome.lang = entrada.lang;
  nome.textContent = entrada.nome;
  rotulo.append(nome);

  const idiomaVisivel = document.createElement('small');
  idiomaVisivel.textContent = idioma;
  if (classe !== 'local') idiomaVisivel.hidden = true;
  rotulo.append(idiomaVisivel);
  botao.append(rotulo);
  botao.setAttribute('aria-label', `Ouvir ${entrada.nome} em ${idioma}`);
  botao.addEventListener('click', () => tocar(botao, entrada.audio));
  return botao;
}

function criarCartao(pais, indice) {
  const cartao = document.createElement('li');
  cartao.className = 'cartao';
  const moldura = document.createElement('div');
  moldura.className = 'bandeira';

  const imagem = document.createElement('img');
  imagem.src = `${pasta}bandeiras/${pais.codigo}.svg`;
  imagem.alt = `Bandeira: ${pais.pt.nome}`;
  if (indice >= 4) imagem.loading = 'lazy';
  moldura.append(imagem);

  const botoes = document.createElement('div');
  botoes.className = 'botoes';
  botoes.append(
    criarBotao(pais.pt, 'portugues', 'português'),
    criarBotao(pais.en, 'ingles', 'inglês'),
    criarBotao(pais.local, 'local', pais.local.idioma),
  );
  cartao.append(moldura, botoes);
  return cartao;
}

async function carregarPaises() {
  try {
    const resposta = await fetch(pasta + 'paises.json');
    if (!resposta.ok) throw new Error('Catálogo indisponível');
    const paises = await resposta.json();
    grade.replaceChildren(...paises.map(criarCartao));
  } catch {
    estado.textContent = 'As bandeiras não carregaram. Recarregue a página para tentar de novo.';
  }
}

carregarPaises();
