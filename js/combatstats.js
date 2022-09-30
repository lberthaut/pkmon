import { Combatmove } from "./combatmove.js";

export function Combatstats(numberpkmon) {

    let arrayEnnemyAttacks = [];
    let speedEnnemy = [];
    //recuperations datas pokemon ennemie
    fetch(`https://pokeapi.co/api/v2/pokemon/${numberpkmon}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.ennemyname').textContent = data.name
            speedEnnemy.push(data.stats[5]);
            let allAttackEnnemyArray = [data.moves]
            var fourAttack = allAttackEnnemyArray[0].slice(0);
            var arrayFourAttack = [];
            while (arrayFourAttack.length < 4) arrayFourAttack.push(fourAttack.splice(Math.floor(Math.random() * fourAttack.length), 1)[0]);
            for (let i = 0; arrayFourAttack.length; i++) {
                fetch(arrayFourAttack[i].move.url)
                    .then((response) => response.json())
                    .then((data) => {
                        arrayEnnemyAttacks.push(data);
                    })
            }
        })
    //recuperation datas starter
    let buttonAttack = document.querySelectorAll('.attack_button');
    document.querySelector('.mypkmonname').textContent = JSON.parse(localStorage.getItem('starter')).name;
    let arrayMyPkmonAttacks = [];
    Combatmove(arrayMyPkmonAttacks, arrayEnnemyAttacks, speedEnnemy);
    let mypkmonattacks = JSON.parse(localStorage.getItem('starter')).moves;
    var mypkmonfourAttack = mypkmonattacks.slice(0);
    var arraymypkmonFourAttack = [];
    while (arraymypkmonFourAttack.length < 4) arraymypkmonFourAttack.push(mypkmonfourAttack.splice(Math.floor(Math.random() * mypkmonfourAttack.length), 1)[0]);
    for (let i = 0; arraymypkmonFourAttack.length; i++) {
        fetch(arraymypkmonFourAttack[i].move.url)
            .then((response) => response.json())
            .then((data) => {
                arrayMyPkmonAttacks.push(data);
                buttonAttack[i].textContent = data.names[3].name;
            })
    };
}