export function Combatmove(arrayMyPkmonAttacks, arrayEnnemyAttacks, speedEnnemy) {
    let myPkmonSpeed = [];
    myPkmonSpeed.push(JSON.parse(localStorage.getItem('starter')).stats[5])
    console.log('attaques de mon pokemon', arrayMyPkmonAttacks);
    console.log("attaques de l'ennemi", arrayEnnemyAttacks);
    console.log("vitesse de mon pkmon", myPkmonSpeed);
    console.log("vitesse de l'ennemi", speedEnnemy);

    function ennemyattacks() {
        let random_Number = Math.floor(Math.random() * 5)
        let attack = []
        console.log(random_Number);
        if (0 < random_Number < 5) {
            attack.push(arrayEnnemyAttacks[random_Number]);
            console.log(attack);
        }
    }
    ennemyattacks();
}