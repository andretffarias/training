var list = []

do {
    var menu = parseInt(prompt(
        "1- add patient to list\n" +
        "2- attend patient\n" +
        "3- exit"
    ))

    switch (menu) {
        case 1 :
            list.push(prompt("enter the patient's name:"))
            var conf = confirm("Do you want to add another patient?")
            while (conf !== false) {
                list.push(prompt("enter the patient's name:"))
                conf = confirm("Do you want to add another patient?")
            }
            break
        case 2 : 
            if (list.length !== 0) {
                var firstPatient = list.shift()
                alert(
                    "The patient " + firstPatient + " was treated."
                    )
            }else {
                alert("[ERRO] : not even a patient has been defined")
            }
            break
        case 3 : alert("exiting the system...")
            break
        default : alert("[ERRO] : invalid option")
    } 
    console.log(list)
}while(menu !== 3)