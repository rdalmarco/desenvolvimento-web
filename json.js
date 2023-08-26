const livro = {
    titulo: 'Programação',
    autor: 'Fulano'    
}
console.log(livro);

//Conversão de objeto para JSON para mandar pro backend
const livroEnviar = JSON.stringify(livro);
console.log(livroEnviar);

//Conversao de JSON para objeto quando vem do backend
const livroRecebido = JSON.parse(livroEnviar)
console.log(livroRecebido);


