function FormAddPlayer() {
    const form = document.querySelector("#lineup-form")

    if (form.style.display === "none") {
        form.style.display = "block"
    }else {
        form.style.display = "none"
    }

    cleanField()
}

function lineup() {
    const namePlayer = document.querySelector("#input-name").value
    const numPlayer = document.querySelector("#input-num").value
    const positionPlayer = document.querySelector('input[name=input-radio]:checked').value

    const section = document.querySelector("#lineup-list")

    const div = document.createElement("div")
    div.setAttribute("id", "div-player")

    const titleName = document.createElement("h3")
    titleName.setAttribute("id", "title-name")
    titleName.innerText = "Name: "

    const titleNum = document.createElement("h3")
    titleNum.setAttribute("id", "title-num")
    titleNum.innerText = "Shirt number: "

    const titlePosition = document.createElement("h3")
    titlePosition.setAttribute("id", "title-position")
    titlePosition.innerText = "Position: "

    div.append(titleName, namePlayer, titleNum, numPlayer, titlePosition, positionPlayer)
    section.appendChild(div)

    cleanField()
}

function cleanField() {

    const form = document.querySelector("#lineup-form")

    const namePlayer = document.querySelector("#input-name")
    const numPlayer = document.querySelector("#input-num")
    const radio = document.querySelectorAll('input[name=input-radio]')

    namePlayer.value = ""
    numPlayer.value = ""
    radio.forEach((radio) => {
        radio.checked = false;
    })
}