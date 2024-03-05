//alert("Olá vindo de js externo");

// buscando um único elemento do HTML (DOM)
let container = document.querySelector("#container");

// buscando vários elementos do HTML (DOM);
let containers = document.querySelectorAll(".container");

// exibindo uma mensagem no console do navegador
console.log(container, containers);

// alterado o conteúdo de um elemento
container.innerHTML = "Elemento 1 - Texto <strong>atualizado</strong>";

// alterando propriedades do estilo do elemento
container.style.border = "2px #000 solid";
container.style.padding = "10px";
container.style.display = "none";

// alterando a cor do segundo elemento da lista de elementos com a classe .container
containers[1].style.backgroundColor = "blue";

let botao = document.querySelector(".btn");

console.log("desabilitando o botão");
botao.setAttribute("disabled", "disabled");
botao.setAttribute("type", "button");

console.log("habilitando o botão");
botao.removeAttribute("disabled");
