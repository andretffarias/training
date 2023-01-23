const name = prompt("What your name?");
var nameCities = ""
var numberCity = 0

var proceed = confirm("did you visit any city?");

while(proceed == true) {
    var nameCity = prompt("what is the name of the city?");
    nameCities = "- " + nameCity + "\n" + nameCities
    numberCity++
    proceed = confirm("did you visit another city?")
}

if (numberCity > 0) {
    alert(
        "Name: " + name + "\n\n" +
        "you visited " + numberCity + " cities" + 
        "\n Names of cities visited:\n" + nameCities
    )
}else {
    alert(
        "Name: " + name + "\n" +
        "you haven't even visited a city"
    )
}