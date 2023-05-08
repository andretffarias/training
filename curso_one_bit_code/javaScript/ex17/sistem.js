let option;
let listVacancies = [];
let vacancyList = ""

function newVacancy (nameVacancy, descriptionVacancy, wageVacancy) {
    let Vacancy = {
        name: "",
        description: "",
        wage: "",
        candidates: [],
        id : listVacancies.length
    }
    Vacancy.name = nameVacancy
    Vacancy.description = descriptionVacancy
    Vacancy.wage = wageVacancy
    listVacancies.push(Vacancy)
    return listVacancies
}


do{
    option = parseInt(prompt(
        "1- list available vacancies.\n" +
        "2- create new vacancy.\n" +
        "3- view a vacancy.\n" +
        "4- register a candidate for a vacancy.\n" +
        "5- delete a vacancy.\n" +
        "6- [EXIT]."
    ))

    switch(option){
        case 1:
            if (listVacancies.length > 0) {
                for (let i = 0; i < listVacancies.length; i++) {
                    vacancy = listVacancies[i]
                    vacancyList += "\nID: " + vacancy.id +
                        "\nName: " + vacancy.name +
                        "\nDescription: " + vacancy.description +
                        "\nWage: $" + vacancy.wage + "/h\n" +
                        "=============================================="
                        "\n"
                }
                alert(vacancyList)
            }else{
                alert("There are no vacancies available.")
            }
            break
        case 2:
            nameVacancy = prompt("Name of vacancy:")
            descriptionVacancy = prompt("Description of vacancy:")
            wageVacancy = parseFloat(prompt("Wage of vacancy:"))
            newVacancy(nameVacancy, descriptionVacancy, wageVacancy)
            break
        case 3:
            break
        case 4:
            break
        case 5:
            /// vai pedir o id da vaga em seguida pedir uma confirmacao de excluir a vaga se verdadeira usa o splice para remover a vaga da lista se nao retorna ao loop
            break
        case 6:
            alert("closing program...")
            break
        default: alert("[ERRO]: option invalid")
    }
}while(option != 6)