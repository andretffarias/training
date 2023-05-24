let i = 1;

function addContact() {
    let contactSection = document.getElementById('contact-section')

    let contactCreate = document.createElement("form")
    contactCreate.setAttribute("id", "create-contact")

    let labelName = document.createElement("label")
    labelName.setAttribute("for", "input-name")
    labelName.textContent = "Name:"

    let inputName = document.createElement("input")
    inputName.setAttribute("id", "input-name")
    inputName.type = "text"

    let br1 = document.createElement("br")
    let br2 = document.createElement("br")

    let labelNum = document.createElement("label")
    labelNum.setAttribute("for", "input-num")
    labelNum.textContent = "Number:"

    let inputNum = document.createElement("input")
    inputNum.setAttribute("id", "input-num")
    inputNum.type = "number"

    let buttonCreate = document.createElement("button")
    buttonCreate.setAttribute("onclick", "createForm(input-Name.value,input-num.value, contact-section)")
    buttonCreate.textContent = "create"

    let buttonDelete = document.createElement("button")
    buttonDelete.setAttribute("onclick", "dellForm()")
    buttonDelete.textContent = "Delete"

    contactCreate.append(labelName, inputName)
    contactCreate.appendChild(br1)
    contactCreate.append(labelNum, inputNum)
    contactCreate.appendChild(br2)
    contactCreate.append(buttonCreate, buttonDelete)
    contactSection.append(contactCreate)
}

function createForm(name, num, contactSection) {
    let divContact = document.createElement("div")
    divContact.setAttribute("id", "contact-div")

    let h3 = document.createElement("h3")
    h3.setAttribute("id", "name-contact")
    h3.textContent = name

    let h4 = document.createElement("h4")
    h4.setAttribute("id", "number-contact")
    h4.textContent = num

    divContact.append(h3,h4)
    contactSection.append(divContact)
}

function dellForm() {
    alert("Contact not added.")
}



function dellContact() {
    

    i--
}