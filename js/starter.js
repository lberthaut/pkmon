export function Choosestart (){
    let container = document.querySelector('.container').innerHTML = '';
    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(response => response.json())
        .then(data => {
            let bulbaArray = Object.values(data);
            console.log(bulbaArray)
        })
}