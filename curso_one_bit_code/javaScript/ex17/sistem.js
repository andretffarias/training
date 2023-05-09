let option;
let listVacancies = [];
let id = 1;
let indexId
function newVacancy (nameVacancy, descriptionVacancy, wageVacancy) {
    let vacancy = {
        name: "",
        description: "",
        wage: "",
        candidates: [],
        id : 0,
    }
    vacancy.name = nameVacancy
    vacancy.description = descriptionVacancy
    vacancy.wage = wageVacancy
    vacancy.id = id
    id++
    listVacancies.push(vacancy)
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
                let vacancyList = ""
                for (let i = 0; i < listVacancies.length; i++) {
                    let vacancy = listVacancies[i]
                    vacancyList += "\nID: 0" + vacancy.id +
                        "\nName: " + vacancy.name +
                        "\nDescription: " + vacancy.description +
                        "\nWage: $" + vacancy.wage + "/h\n" +
                        "============================================\n"
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
            let findId = prompt("ID:") 
            indexId = listVacancies.findIndex(object => object.id === parseInt(findId))
            alert(indexId)
            break
        case 4:
            break
        case 5:
            let idDel = parseInt(prompt("ID:"))
            indexId = listVacancies.findIndex(object => object.id === idDel)
            if (indexId !== -1) {
                let conf = confirm(`Are you sure you want to delete the ${listVacancies[indexId].name} vacancy?`)
                if (conf == true) {
                    listVacancies.splice(indexId, 1)
                    alert("Vacancy deleted.")
                }else {
                    alert("Vacancy not deleted.")
                }
            }else{alert("Vacancy not find.")}
            break
        case 6:
            alert("closing program...")
            console.log(listVacancies)
            break
        default: alert("[ERRO]: option invalid")
    }
}while(option != 6)