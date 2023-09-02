function ola(msg) {
    console.log(msg)
}

function imprimaTexto(texto, qtd) {
    for (var i = 0; i < qtd; i++) {
        console.log(texto);
    }
    //var: Fica com o mesmo valor quando sair do FOR
    console.log(i)

}

function imprimaTexto2(texto, qtd) {
    for (let i = 0; i < qtd; i++) {
        console.log(texto);
        //let: Perde o valor quando sai do FOR
        console.log(i)
    }
}

let obj = {};
obj.propriedade = "Valor";

let pessoa = {
    nome: "Ana",
    cpf: "1234",
    endereco: {
        rua: "x",
        numero: 123,
        bairro: "Bela Vista"
    }
}

console.log('olá mundo')

ola('Bem vindo ao JS')

imprimaTexto('teste', 5)

imprimaTexto2('teste2', 5)

console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa))
console.log(Object.values(pessoa))

//É esse tipo de campo que será transmitido para o backend (JSON)
const jsonPessoa = JSON.stringify(pessoa)
console.log(jsonPessoa);


const objPessoa = JSON.parse(jsonPessoa)
console.log(objPessoa);

//Herança
let pai = {
    nome: "pai",
    sobrenome: "familia"
};

let filho = Object.create(pai);
Object.assign(filho, {
    nome: "filho"
});

console.log(pai);
console.log(filho);

let vetor = [];
let alunos = ['A', 'T', 'C', 'B'];
let testeSort = [{id:5}, {id:2}, {id:4}];
console.log(alunos);
alunos[3] = 'E';
console.log(alunos.length);
console.log(alunos);

console.log(alunos.indexOf('B'));

alunos.forEach(function (aluno) {
    console.log(aluno);
})

console.log(alunos.sort());

testeSort.sort(function(a, b){
 if(a.id === b.id) {
     return 0;
 }
 return a.id < b.id ? -1: 1
})

console.log(testeSort)



