var speed = prompt("what's your speed")

while(speed > 0) {
    alert(
        "your speed is " + speed + 
        "km and each round you decrease by 10 km."
    )

    speed-=10
}

alert("your speed is 0km and each round you decrease by 10 km.")