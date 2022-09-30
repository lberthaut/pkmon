import { Combatstats } from "./combatstats.js";

export function Pokecombat() {
    let saved_id_chara_case = document.querySelector(".chara").parentElement.getAttribute("id");
    let container = document.querySelector('.container');
    container.innerHTML = '';
    container.innerHTML = `<div class="popattack_container">
                                                <p class ="message_attack">Un Pokémon sauvage est apparu !</p>
                                                </div>`
    let arrayNumber = Array.from(Array(10249).keys())
    arrayNumber.splice(905, 9096)
    var onenumber = arrayNumber.slice(0);
    var arrayonenumber = [];
    while (arrayonenumber.length < 1) arrayonenumber.push(onenumber.splice(Math.floor(Math.random() * onenumber.length), 1)[0]);
    fetch(`https://pokeapi.co/api/v2/pokemon/${arrayonenumber}`)
        .then((response) => response.json())
        .then((data) => {
            let imgpkmon = document.createElement('img');
            imgpkmon.className = 'centerimg';
            let popattack = document.querySelector('.popattack_container');
            imgpkmon.src = `${data.sprites.front_default}`;
            popattack.appendChild(imgpkmon);
            setTimeout(Combatbeginning, 2500);
            function Combatbeginning() {
                container.innerHTML = '';
                container.innerHTML = `<div class="combat_container">
                                                                <div class="ennemy_block">
                                                                <div class="HP_block">
                                                                    <td>
                                                                        <div class="barre barre_contenant">
                                                                            <div class="barre barre_dynamique" style="width:<?php echo (100*$infosmembre['vie_du_joueur'])/$VieMax; ?>%;" ></div>
                                                                        </div>
                                                                    </td>
                                                                    <p class="ennemyHP">HP: ${data.stats[0].base_stat}</p>
                                                                    </div>
                                                                    <img class="ennemypic" src="${data.sprites.front_default}"/>
                                                                    
                                                                </div>
                                                                <div class="mypkmon_block">
                                                                <img class="starterpic" src="${JSON.parse(localStorage.getItem('starter')).sprites.front_default}">
                                                                <div class="HP_attacks_block">
                                                                <div class="HP_block_my">
                                                                <td>
                                                                <div class="barre barre_contenant">
                                                                    <div class="barre barre_dynamique" style="width:<?php echo (100*$infosmembre['vie_du_joueur'])/$VieMax; ?>%;" ></div>
                                                                </div>
                                                            </td>
                                                            <p class="mypkmonHP">HP: ${JSON.parse(localStorage.getItem('starter')).stats[0].base_stat}</p>
                                                            </div>
                                                            <div class="attacks_block">
                                                            <button class="attack0 attack_button"></button>
                                                            <button class="attack1 attack_button"></button>
                                                            <button class="attack3 attack_button"></button>
                                                            <button class="attack4 attack_button"></button>
                                                            </div>
                                                            </div>
                                                    </div>
                                                            </div>`

                Combatstats(arrayonenumber);
            }
        })


}