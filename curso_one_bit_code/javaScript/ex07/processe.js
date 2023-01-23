const name = prompt("What your name?")
var cities = confirm("Have you ever visited any city?")

if (cities == true) {
    var nameCities = prompt("which city did you visit")
    var confirm01 = confirm("Have you visited any other cities?")
    if (confirm01 == true) {
        while (cities == true) {
            var nameCities = nameCities + ", " + prompt("which city did you visit")
            var confirm02 = confirm("Have you visited any other cities?")
            if (confirm02 == false) {
                cities = false
            }
        }
    }
    alert(
        "Name: " + name + "\n" +
        "\nName of cities visited:\n"
        + nameCities + "."
    )
}else {
    alert(
        "Name: " + name +
        "\n\nYou haven't even visited a city yet"
    )
}
