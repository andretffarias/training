var listProperties = []

 var i = listProperties.length
do {
    var option = parseInt(prompt(
        "registered properties: " + i + 
        "\n\n1- save property." +
        "\n2- see properties save." +
        "\n3- exit."
    ))

    switch (option) {
        case 1 :
            var property = [ownerName, bedrooms, bathrooms, garage]
            var ownerName = prompt("Enter the owner's name:")
            var bedrooms = prompt("Enter how many rooms have the property:")
            var bathrooms = prompt("Enter how many bathrooms the property has:")
            var garage = confirm("Does the house have a garage?")
            alert(property)
            break
        case 2 :
            if (i > 0) {
                alert(listProperties)
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