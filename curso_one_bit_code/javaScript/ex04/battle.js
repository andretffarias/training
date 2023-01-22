const character =  prompt("Choose a name for you:");
const enemy =  prompt("Choose a name for enemy:");

var attPower = parseFloat(prompt("What is your attack power:"))
var lifeEnemy = parseFloat(prompt("what is the life of the enemy:"))
const shield = confirm("Does the enemy use a shield?")

const attack = confirm("Do you want to attack your enemy?")

if (attack === true && lifeEnemy > 0) {
    if (shield === true){
        attPower = attPower/2
        lifeEnemy = lifeEnemy - attPower       
        if (lifeEnemy <= 0) {
            alert("congratulations you managed to defeat " + enemy)
        }else {
            alert("your attack was not strong enough to defeat, try to get stronger")
        }
    }else {
        lifeEnemy = lifeEnemy - attPower       
        if (lifeEnemy <= 0) {
            alert("congratulations you managed to defeat " + enemy)
        }else {
            alert("your attack was not strong enough to defeat, try to get stronger")
        }
    }
}else if(lifeEnemy <=0 || null) {
    alert("it was not possible to attack the enemy, because " + enemy + "'s life is too low")
}else if (attack != true) {
    alert("You are choose not attack")
}