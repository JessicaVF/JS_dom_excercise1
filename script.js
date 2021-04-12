"use strict";
// Cibler la balise footer de 2 manières : par son attribut ìd (avec la méthode dédiée et avec querySelector) et lui ajouter la classe footer
let footerID = document.getElementById("footer");
let footerQuery = document.querySelector("#footer");
footerQuery.classList.add("footer");

// Ajouter une balise p à la fin de main contenant ce texte : Ceci est un contenu <strong>très important</strong>
const paragrapheFinMain = document.createElement("p");
paragrapheFinMain.innerHTML =
  "Ceci est un contenu <strong>très important</strong>";
let mainParent = document.querySelector("main#main");
mainParent.appendChild(paragrapheFinMain);

// Cibler toutes les balises p de la page et changer la couleur du texte (#000F00) et remplacer la classe paragraph par la classe text
let toutLesP = document.querySelectorAll("p");
for (let i = 0, max = toutLesP.length; i < max; i++) {
  toutLesP[i].style.color = "red";
  toutLesP[i].classList.replace("paragraph", "text");
}

// Ajouter une balise ul dans la balise header, avec 4 li à l'intérieur pour obtenir le résultat suivant :

const elementUL = document.createElement("ul");
elementUL.classList.add("list");
elementUL.id = "important-list";

for (let j = 0; j < 4; j++) {
  const elementLi = document.createElement("li");
  elementLi.textContent = `Ceci est l'élément n°${j}`;
  elementLi.classList.add("list_element");
  elementLi.setAttribute("data-num", j + 1);
  elementUL.appendChild(elementLi);
}

let elementHeader = document.querySelector("header");
elementHeader.appendChild(elementUL);
