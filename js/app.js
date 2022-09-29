import { Contents } from "./contents.js";
import { Newuser } from "./newuser.js";

let offset = 0;
let limit = 12;

//Fetch données pokemons

function getAllPokemon() {
  fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit * offset}`
  )
    .then((response) => response.json())
    .then((data) => {
      Contents(data);
    });
}

//image profil
var img = document.createElement("img");
var header = document.querySelector("header");
img.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/151.png";
header.querySelector("div").appendChild(img);
img.className = "profilepic";

//pagination pokedex
let pokeButton = document.querySelector(".pokebutton");
pokeButton.addEventListener('click', function GetPokeOnScroll() {
  window.onscroll = function Getpokeonscroll() {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 12
    ) {
      offset++;
      getAllPokemon();
    }
  };
})



//comportements boutons menu
function Refreshpoke() {
  document.querySelector(".container").innerHTML = "";
  getAllPokemon();
  offset = 0;
}
pokeButton.addEventListener("click", Refreshpoke);

let pokeuser = document.querySelector(".userbutton");
function Refreshuser() {
  document.querySelector(".container").innerHTML = "";
  Newuser();
}
pokeuser.addEventListener("click", Refreshuser);


//changement photo et pseudo par defaut si joueur enregistré dans le localstorage
if (localStorage.getItem("pseudo") && localStorage.getItem("URLphoto") && localStorage.getItem('starter')) {
  document.querySelector(".profilepic").src = localStorage.getItem("URLphoto");
  document.querySelector(".subtitle").textContent =
    localStorage.getItem("pseudo");
  let starterpic = document.createElement('img');
  let picstarter = localStorage.getItem('starter');
  let pathpic = JSON.parse(picstarter).sprites.front_default;
  starterpic.src = pathpic;
  let headeruser = document.querySelector('.user');
  headeruser.appendChild(starterpic);
}

