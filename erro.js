
//Criando exception
const IllegalArgumentError = function(msg) {
    this.name = 'IllegalArgumentError';
    this.message = msg;
};

//Function com declaração para lançar a exception criada
function soma (a, b) {
    if(!a || !b) throw new IllegalArgumentError('erro');
    return a + b;
}

//Capturando exception 
try {
    soma(2);
} catch (err) {
    document.querySelector('#erro').textContent = err.message;
}


