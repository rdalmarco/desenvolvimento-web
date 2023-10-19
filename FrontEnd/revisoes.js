function alteraTextoInicio(event) {
    const p = document.querySelector('#texto1')
    p.textContent = 'Inicio'
    p.className = 'final'
}

function alteraTextoFinal(event) {
    const p = document.querySelector('#texto1')
    p.textContent = 'Final'
    p.className = 'inicio'
}

function capturaInput(event) {
    const input = document.querySelector('#input1')
    const valor = input.value;
    console.log(valor);
    const resultInput1 = document.querySelector('#resultInput1')
    resultInput1.textContent = valor;
}

const btnInicio = document.querySelector('#btnInicio')
const btnFinal = document.querySelector('#btnFinal')

btnInicio.addEventListener('mouseover', alteraTextoInicio);
btnFinal.addEventListener('mouseover', alteraTextoFinal);
btnInput.addEventListener('click', capturaInput);