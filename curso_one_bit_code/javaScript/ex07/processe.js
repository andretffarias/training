const name = prompt("What your name?")
const cities = confirm("Have you ever visited any city?")


while (cities == true) {
    alert('rep')
    var confirm3 = confirm("Have you visited any other cities?")
    if (confirm3 == false) {
        cities = false
    }
}