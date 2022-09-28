import { startmap } from "./map.js";

export function Choosestart() {
  let container = (document.querySelector(".container").innerHTML = "");
  let starterArray = [1, 4, 7];
  starterArray.map((onepoke) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${onepoke}`)
      .then((response) => response.json())
      .then((data) => {
        let tile = document.createElement("li");
        let divtile = document.createElement("div");
        let spantile = document.createElement("p");
        tile.className = "tilepokemonstarter";
        divtile.className = "divtile";
        spantile.textContent = data.name;
        let container = document.querySelector(".container");
        let ulhead = document.createElement("ul");
        divtile.appendChild(spantile);
        tile.appendChild(divtile);
        ulhead.appendChild(tile);
        container.appendChild(ulhead);
        var pokepic = document.createElement("img");
        pokepic.className = "pokemon_pic";
        pokepic.src = data.sprites.front_default;
        divtile.appendChild(pokepic);
        let description = document.createElement("div");
        description.className = "description";
        let iddescription = document.createElement("p");
        iddescription.textContent = `Id: ${data.id}`;
        let xpdescription = document.createElement("p");
        xpdescription.textContent = `Xp de base: ${data.base_experience}`;
        let heightdescription = document.createElement("p");
        heightdescription.textContent = `Taille: ${data.height}`;
        tile.appendChild(description);
        ulhead.className = "ulpokemonstarter";
        tile.style.cursor = "pointer";
        description.appendChild(iddescription);
        description.appendChild(xpdescription);
        description.appendChild(heightdescription);

        ulhead.addEventListener("click", () => {
          localStorage.setItem("starter", JSON.stringify(data));
          document.querySelector(".container").innerHTML = "";
          let tile = document.createElement("li");
          let divtile = document.createElement("div");
          let spantile = document.createElement("p");
          tile.className = "tilepokemonstarter";
          divtile.className = "divtile";
          spantile.textContent = data.name;
          let container = document.querySelector(".container");
          let ulhead = document.createElement("ul");
          divtile.appendChild(spantile);
          tile.appendChild(divtile);
          ulhead.appendChild(tile);
          container.appendChild(ulhead);
          var pokepic = document.createElement("img");
          pokepic.className = "pokemon_pic";
          pokepic.src = data.sprites.front_default;
          divtile.appendChild(pokepic);
          let description = document.createElement("div");
          description.className = "description";
          let iddescription = document.createElement("p");
          iddescription.textContent = `Id: ${data.id}`;
          let xpdescription = document.createElement("p");
          xpdescription.textContent = `Xp de base: ${data.base_experience}`;
          let heightdescription = document.createElement("p");
          heightdescription.textContent = `Taille: ${data.height}`;
          tile.appendChild(description);
          ulhead.className = "ulpokemonstarterchoosen";
          tile.style.cursor = "pointer";
          description.appendChild(iddescription);
          description.appendChild(xpdescription);
          description.appendChild(heightdescription);
          tile.style.border = "solid black 5px";
          let startbutton = document.createElement('button');
            startbutton.className = 'startbutton';
            container.appendChild(startbutton);
            startbutton.textContent = "Jouer !"
        });
      });
  });
  if(localStorage.getItem("starter")){
    let startbutton = document.querySelector('.startbutton');
    startbutton.addEventListener('click', startmap)
  }
}