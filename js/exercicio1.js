let quadrado1 = document.querySelector("#resolution1 .square");
quadrado1.style.backgroundColor = "#fdd";

let quadrado2 = document.querySelector("#resolution2 .square");
quadrado2.innerHTML = "<p>Texto adicionado</p>";
quadrado2.style.textAlign = "center";

quadrado1.onmouseover = function () {
  colocarBorda(this);
};

quadrado2.onmouseover = function () {
  colocarBorda(this);
};

function colocarBorda(elemento) {
  elemento.style.border = "2px #000 solid";
}

let botaoEsconder = document.querySelector(".btn");
botaoEsconder.onclick = function () {
  quadrado1.classList.toggle("hide");
  quadrado2.classList.toggle("hide");
};
