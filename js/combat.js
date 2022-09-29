export function Pokecombat() {
    let saved_id_chara_case = document.querySelector(".chara").parentElement.getAttribute("id");
    let container = document.querySelector('.container');
    container.innerHTML = '';
    container.innerHTML = `<p class ="message_attack">Un Pokémon sauvage est apparu !</p>`
    let arrayNumber = Array.from(Array(10249).keys())
    arrayNumber.splice(905, 9096)
    var onenumber = arrayNumber.slice(0);
    var arrayonenumber = [];
    while (arrayonenumber.length < 1) arrayonenumber.push(onenumber.splice(Math.floor(Math.random() * onenumber.length), 1)[0]);
    fetch(`https://pokeapi.co/api/v2/pokemon/${arrayonenumber}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)


            setTimeout(Combatbeginning, 2500);
            function Combatbeginning() {
                container.innerHTML = '';

            }
        })


}