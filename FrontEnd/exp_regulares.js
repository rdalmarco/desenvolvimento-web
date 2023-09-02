//Podemos usar expressões regulares para extrair ou substituir porções de texto, bem como, endereço ou link de imagens em uma página HTML, 
//modificar formato de texto ou remover caracteres inválidos.

const regex = /^[a-z]+$/;

const regex1 = new RegExp("^[a-z]+$");

//exec - Executa a RegExp, retornando os detalhes
//test - Testa a RegExp, retornando true ou false

// Grupos de Caracteres
// [abc] - Aceita qualquer caractere dentro do grupo. Nesse exemplo, aceita a, b e c.
// [^abc] - Não aceita nenhum caractere do grupo, no caso, a, b ou c.
// [0-9] - Aceita qualquer caractere entre 0 e 9, inclusive.
// [^0-9] - Não aceita nenhum caractere entre 0 e 9.
// [a-z0-9] - inclui os grupos de caracteres de a até z e de 0 até 9.

//Quantidades
//Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres.

//{n} - Define uma quantidade exata
//{n,} - Define um número mínimo
//{n, m} - Define o mínimo e máximo
//? - Zero ou um
//* - Zero ou mais
//+ - Um ou mais

//Metacaracteres
//. - (ponto) Representa qualquer caractere
//\w - Representa o conjunto [a-zA-Z0-9_ ]
//\W - Representa o conjunto [^a-zA-Z0-9_ ]
//\d - Representa o conjunto [0-9]
//\D - Representa o conjunto [^0-9]
//\s - Representa um espaço em branco
//\S - Representa uma negação do espaço em branco
//\n - Representa uma quebra de linha
//\t - Representa um tab

//Site para testar as expressões regulares: https://regexr.com/

const email = "john@gmail.com";
const regexp = /^[a-z0-9\.]+@[a-z0-9]+\.com$/;
let result = regexp.exec(email);
console.log(result[0]);
console.log(result.index);
console.log(result.input);


function XX(event){
    const teste = document.querySelector('input') 
    const valor = teste.value;
    const regexp1 = /^[a-z0-9]/
    let result1 =  regexp1.exec(valor);
    console.log(result1[0]);
  }

const btn = document.querySelector('button');
btn.addEventListener('click', XX);

