"use strict";

let opennav = document.querySelector("#menu");
let closenav = document.querySelector(".close-menu");
let overLay = document.querySelector(".overlay");
let nav = document.querySelector(".right-nav");

function openmenu() {
  nav.classList.remove("hidden");
  overLay.classList.remove("hidden");
}
opennav.addEventListener("click", openmenu);

function closemenu() {
  nav.classList.add("hidden");
  overLay.classList.add("hidden");
}
closenav.addEventListener("click", closemenu);
overLay.addEventListener("click", closemenu);

let dropdown = document.querySelector('.nav-dropdown')
let links = document.querySelector('.main')

dropdown.addEventListener('click', function () {
  links.classList.remove('hidden')
})