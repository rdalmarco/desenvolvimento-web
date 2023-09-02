//Modificando objeto html com Java Script

//buscando elemento pelo id css
let titulo = document.getElementById('esp')
console.log(titulo);    

var timer_interval = performance.now();
setInterval(function(){
    timer_interval = performance.now();
    titulo.className = 'titulo-novo'
 }, 500);

 var timer_interval = performance.now();
setInterval(function(){
    timer_interval = performance.now();
    titulo.className = 'titulo'
 }, 1000);


 //buscando elemento pela classe css
 let item = document.querySelector('li.normal');
 item.className = 'titulo-novo';

 //buscando varios elementos css (array)
 let elementos = [...document.getElementsByClassName('normal')];
 console.log(elementos);

 //criando elemento html
 const h1 = document.createElement("h1")
 h1.textContent = "Titulo Teste"
 //adicionar o elemento criado no html
 document.body.appendChild(h1);