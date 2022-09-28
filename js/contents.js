export function Contents (data) {

    let container = document.querySelector('.container')
    let ulhead = document.createElement("ul");
    ulhead.className = 'content';
    container.appendChild(ulhead)
   
    {data.results.map(pokemon =>{
        let tile = document.createElement('li');
        let divtile = document.createElement('div')
        let spantile = document.createElement('p')
        tile.className = 'tilepokemon';
        divtile.className = 'divtile'
        spantile.textContent = pokemon.name;
        divtile.appendChild(spantile);
        tile.appendChild(divtile);
        ulhead.appendChild(tile)
        fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
            var pokepic = document.createElement('img');
            pokepic.className = "pokemon_pic";
            pokepic.src = data.sprites.front_default;
            divtile.appendChild(pokepic);
            let description = document.createElement('div');
            description.className = 'description';
            let iddescription = document.createElement('p');
            iddescription.textContent = `Id: ${data.id}`;
            let xpdescription = document.createElement('p');
            xpdescription.textContent = `Xp de base: ${data.base_experience}`;
            let heightdescription = document.createElement('p');
            heightdescription.textContent = `Taille: ${data.height}` ;
            tile.appendChild(description);
            description.appendChild(iddescription);
            description.appendChild(xpdescription);
            description.appendChild(heightdescription);
        }); 
    }); 
                    }
        
}