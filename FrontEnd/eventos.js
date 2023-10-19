function onClick() {
    console.log('botão clicado!');
}

//Modificar elementos na tela através do click de botões
/**
 * 
 * @param {Event} event 
 */
function alterarTexto(event) {
    const botao = event.currentTarget;
    console.log('botao clicado: ' + botao.id);
    const p = document.querySelector('p');
    p.textContent = "Texto Alterado"
    botao.removeEventListener('click', alterarTexto);
}

function alterarImagemClickImagem(event) {
  const img = event.currentTarget;
  img.src = "https://www.udesc.br/arquivos/ceavi/imagens/_20686_Banner_home_site_1280x449_16920345381742_1707.jpg";
  img.removeEventListener('click', alterarImagemClickImagem);
}

function alterarImagemClickBotao(event) {
    const img = document.querySelector('img');
    img.src = "https://www.udesc.br/arquivos/ceavi/imagens/_20686_Banner_home_site_1280x449_16920345381742_1707.jpg";
    img.removeEventListener('click', alterarImagemClickBotao);
  }

  function eventoTela(event) {
    const teste = document.querySelector('.teste');
    teste.textContent = 'okokkookokokok'
  }

//Pegando a imagem e o botão do front end;
const img = document.querySelector('img');
const btn = document.querySelector('button');
const btn2 = document.querySelector('btnTeste');


//Chamando a função que eu quero através do click da imagem
img.addEventListener('click', alterarImagemClickImagem);

//Chamando a função que eu quero através do click do botão
btn.addEventListener('click', alterarImagemClickBotao);

btn2.addEventListener('click', eventoTela);

function mostrarAlertaDiv(event) {
  console.log(event.target);
  console.log(event.currentTarget);
}

//Pegando a classe .alerta do front end, ou seja, todos os componentes dessa classe (mas como é um queryselector só vai pegar o primeiro componente);
//Nesse caso o evento adicionado para a classe .alerta (declara na div), será passado para os filhos (componentes dentro da div) também.
const detalhe = document.querySelector('.alerta');
detalhe.addEventListener('click', mostrarAlertaDiv);

//Usando o stopProapgation quando eu clico na imagem ele deixa de propagar o evento.
function mostrarAlertaImg(event){
  console.log('img');
  event.stopPropagation();
}

const d = document.querySelector('#div');
const i = document.querySelector('#imagem');
d.addEventListener('click', mostrarAlertaDiv);
i.addEventListener('click', mostrarAlertaImg);

