const car01 = prompt("choose a name for the car:")
const car02 = prompt("choose a name for the opponent car:")

const veloCar01 = prompt("What is the speed of your car?")
const veloCar02 = prompt("What is the speed of opponent car?")

if (veloCar01 > veloCar02) {
    alert(
        "Win the race\n  your car "
        + car01 + "\nwon the race"
    )
} else {
    alert(
        "You lost the race\n the car "
        + car02 + "\nwon the race"
    )
}