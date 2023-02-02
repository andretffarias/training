var listProperties = []

var i = parseInt(listProperties.length)
do {
    var option = parseInt(prompt(
        "registered properties: " + i + 
        "\n\n1- save property." +
        "\n2- see properties save." +
        "\n3- exit."
    ))

    switch (option) {
        case 1 :
            var ownerName = prompt("owner name:")
            var bedroom = prompt("number of bedrooms:")
            var bathroom = prompt("number of bathrooms:")
            var garage = confirm("do you have a garage?")

            var j = i++
            j++

            listProperties.push(["house" + j++, ownerName, bedroom, bathroom, garage])
            break
        case 2 :
            if (i > 0) {

                str = ""

                for (var x = 0; x < listProperties.length; x++) {
                    str = str + "-" + listProperties[x][0] + "\n"
                }
                alert(str)
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