let title = document.querySelector('h1').innerHTML;
console.log(title);

let subtitle = document.querySelector('#subtitle');

let error = document.querySelector('#error');

title.innerHTML = 'Clase de cocina'

subtitle.innerHTML = 'Soy un error'

let input = document.querySelector('#user')
console.log(input)

console.log(input.value)

/* let boton = document.querySelector('.btn') */

boton.setAttribute('style', 'background-color: blue; color:white')

let parrafo = document.querySelector('#texto')
parrafo.innerText = 'Bienvenido a la Academia'
console.log(parrafo.innerText)
//Manejador de eventos con el botón
let boton = document.querySelector(".btn");

boton.addEventListener('click', function(){
    alert('Me hiciste click')
})

function llamada () {
    alert('Hiciste click desde el HTML')
}