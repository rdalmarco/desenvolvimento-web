//URL Do servidor (API Fetch).
const JSON_PATH = 'https://swapi.dev/api/planets/?search='
const PESSOAS_PATH = 'https://swapi.dev/api/people/?search='

class App {
    constructor() {
        this._onJsonReady = this._onJsonReady.bind(this);
        this._onSubmit = this._onSubmit.bind(this);

        this.personagens = [];

        const btn = document.querySelector('button');
        btn.addEventListener('click', this._onSubmit);

        //Pega o elemento container do HTML
        let container = document.querySelector('#container');
        //Adiciona uma tabela vazia dentro do mesmo
        container.innerHTML = '<table></table>';
    }

    _onSubmit(event) {
        event.preventDefault(); //Para na primeira requisição (click do botão), caso o botão seja clicado muitas vezes não sobrecarrega o servidor.
        const textInput = document.querySelector('#person-text') //Resgata o campo do input text do html.
        const query = encodeURIComponent(textInput.value); //Pega o valor do campo resgatado.
        console.log(PESSOAS_PATH + query); //Concatena a URL da Api Fetch (pessoas_path) com o filtro montado (query).

        this.personagens = []; //Zera a lista de pessoas para repovoar
        fetch(PESSOAS_PATH + query) //Chama o fetch passando o path e a query para fazer a consulta na API.
            .then(this._onResponse)
            .then(this._onJsonReady);
    }

    _onJsonReady(json) {
        //Verifica se no json recebido pela função tem algo dentro (a resposta vem dentro do atributo "results").
        if (!json.results) {
            return;
        }
        //Povoa tabela criada no HTML 
        for (const item of json.results) {
            this.personagens.push(item);
        }
        //Chama função para renderizar na tela os personagens da lista.s
        this._renderPersonagens();
    }

    //Converter resposta do servidor em JSON
    _onResponse(response) {
        return response.json();
    }

    _renderPersonagens() {
        const container = document.querySelector('#container');
        //Percore o array de personagens
        for (const p of this.personagens) {
            const tr = document.createElement('tr'); //Cria os elementos tr, linhas da tabela.
            const td = document.createElement('td'); //Cria os elementos td, colunas da tabela.
            td.innerHTML = p.name; //Povoa o td no html.
            tr.appendChild(td); //Adiciona a coluna dentro da linha, ou seja, td dentro do tr.
            container.appendChild(tr); //Adiciona a linha na tabela criada no html que chamamos de container.
        }
    }
}

const app = new App();  


//Faz a requisição para a URL
//fetch(JSON_PATH)
//    .then(_onResponse) //Se ouver resposta chamo onResponse (pegar a resposta e transformar em json)
//    .then(_onJsonReady) //Pego a resposta convertida em Json e chama jsonReady

