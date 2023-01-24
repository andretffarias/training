do {
    var option = parseInt(prompt(
        "interactive menu" +
        "\nchoose an option:" +
        "\n-1" + "\n-2" + "\n-3" +
        "\n-4" + "\n-5  [CLOSE]"
    ))

    if (option < 1 || option > 5) {
        alert("[ERROR] :\ninvalid option")
    } else if (option === 5){
        alert("the chosen option was 5, the program will close")

    } else  {
        alert("the chosen option was " + option)
    }
}while(option != 5)