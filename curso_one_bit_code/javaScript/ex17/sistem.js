let option;
let listVacancies = [];

function newVacancy (nameVacancy, descriptionVacancy, wageVacancy) {
    let Vacancy = {
        name: "",
        description: "",
        wage: "",
        candidates: [],
        id: listVacancies.length() + 1
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
            alert(listVacancies)
            break
        case 2:
            nameVacancy = prompt("Name of vacancy:")
            descriptionVacancy = prompt("Description of vacancy:")
            wageVacancy = prompt("Wage of vacancy:")
            newVacancy(nameVacancy, descriptionVacancy, wageVacancy)
            break
        case 3:
            break
        case 4:
            break
        case 5:
            break
        case 6:
            alert("closing program...")
            break
        default: alert("[ERRO]: option invalid")
    }
}while(option != 6)