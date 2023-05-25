let i = 1;

function addContact() {
    let contactSection = document.getElementById('contact-section')

    let formCreate = document.createElement("form")
    formCreate.setAttribute("id", "create-contact")

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
    
    let buttonCreate = document.createElement("input")
    buttonCreate.type = "submit"
    buttonCreate.textContent = "create"
    
    let buttonDelete = document.createElement("button")
    buttonDelete.setAttribute("onclick", "dellForm()")
    buttonDelete.textContent = "Delete"
    
    formCreate.append(labelName, inputName)
    formCreate.appendChild(br1)
    formCreate.append(labelNum, inputNum)
    formCreate.appendChild(br2)
    formCreate.append(buttonCreate, buttonDelete)
    contactSection.append(formCreate)

    formCreate.addEventListener('submit', function(event) {
        event.preventDefault();
    
        let name = inputName.value
        let num = inputNum.value
        console.log(name, num)
        createContact(name, num, contactSection)
    })
}

function createContact(name, num, contactSection) {
    let divContact = document.createElement("div")
    divContact.setAttribute("id", "contact-div")
    
    let nameContact = document.createElement("h2")
    nameContact.setAttribute("id", "name-contact")
    nameContact.textContent = "- " + name

    let p = document.createElement("p")
    p.textContent = i
    
    let numContact = document.createElement("name")
    numContact.setAttribute("id", "number-contact")
    numContact.textContent = num

    divContact.append(p ,nameContact, numContact)
    contactSection.append(divContact)
    i++
}

function dellForm() {
    alert("Contact not added.")
}



function dellContact() {
    

    i--
}