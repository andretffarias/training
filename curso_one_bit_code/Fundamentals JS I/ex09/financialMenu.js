var balance = 0
var exit = 0

do{
    var account = parseInt(prompt(
        "Balance: " + balance +
        "\n\n-1 add cash" +
        "\n-2 remove cash" +
        "\n-3 exit"
    ))

    switch(account){
        case 1 :
            var add = parseFloat(prompt("how many dollars do you want to add to your account?"))
            balance = balance + add
            break;
        case 2 :
            var remove = parseFloat(prompt("how many dollars do you want to remove from your account?"))
            if (balance >= remove){
                balance = balance - remove
            }else {
                alert("insufficient funds")
            }
            break;
        case 3 :
            var x = confirm("Are you sure you want to log out of your account?")
            if (x == true) {
                exit = 1
            }
            break;
        default:
            alert("invalid option");
    }
}while(exit == 0)