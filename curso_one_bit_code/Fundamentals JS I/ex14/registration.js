var listProperties = []

do {
    var i = listProperties.length

    var option = parseInt(prompt(
        "registered properties: " + i + 
        "\n\n1- save property." +
        "\n2- see properties save." +
        "\n3- exit."
    ))

    switch (option) {
        case 1 :
            var property = {}
            property.ownerName = prompt("owner name:")
            property.bedroom = prompt("number of bedrooms:")
            property.bathroom = prompt("number of bathrooms:")
            property.garage = confirm("do you have a garage?")

            var revision = confirm(
                "property " + (i + 1) + ":" +
                "\nowner name: " + property.ownerName +
                "\nbedroom: " + property.bedroom +
                "\n bathroom: " + property.bathroom +
                "\ngarage: " + property.garage
            )

            if (revision) {
                listProperties.push(property)
                alert("registered property.")
            }else {
                alert("going to menu...")
            }
            break
        case 2 :
            if (i > 0) {
                for (var x = 0; x < listProperties.length; x++) {
                 alert(
                    "property " + (x + 1) + ":\n" +
                    "\nowner name: " + listProperties[x].ownerName + 
                    "\nbedrooms: " + listProperties[x].bedroom +
                    "\nbathrooms: " + listProperties[x].bathroom +
                    "\ngarage: " + listProperties[x].bedroom
                 )   
                }
            } else {
                alert("no properties saved at the moment.")
            }
            break
        case 3 :
            alert("closing system...")
            break
        default: alert("[ERRO] : invalid option")
    }
}while(option !== 3)