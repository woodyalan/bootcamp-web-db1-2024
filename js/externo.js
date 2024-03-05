//alert("Olá vindo de js externo");

// buscando um único elemento do HTML
let container = document.querySelector("#container");

// buscando vários elementos do HTML;
let containers = document.querySelectorAll(".container");

// exibindo uma mensagem no console do navegador
console.log(container, containers);

// alterado o conteúdo de um elemento
container.innerHTML = "Elemento 1 - Texto atualizado";
