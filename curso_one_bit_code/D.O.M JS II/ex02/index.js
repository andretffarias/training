listPlayers = []
const divPlayer = "";
i = 0;
function FormLineup() {
    const form = document.querySelector("#lineup-form")
    
    const formRemove = document.querySelector("#remove-form")
    
    formRemove.style.display = "none"
    
    if (form.style.display === "none") {
        form.style.display = "block"
    }else {
        form.style.display = "none"
    }
    
    cleanFieldLineup()
    cleanFieldremove()
}

function lineup() {
    const namePlayer = document.querySelector("#input-name").value
    const numPlayer = document.querySelector("#input-num").value
    const positionPlayer = document.querySelector('input[name=input-radio]:checked').value
    
    const section = document.querySelector("#lineup-list")
    
    const div = document.createElement("div")
    div.setAttribute("id", `div-player-${i}`)
    
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
    
    const player = {
        name: namePlayer,
        shirtNum: numPlayer,
        position: positionPlayer
    }
    
    listPlayers.push(player)

    i++
    
    FormAddPlayer()
    cleanFieldLineup()
}

function FormRemovePlayer() {
    const form = document.querySelector("#remove-form")
    
    const formLineup = document.querySelector("#lineup-form")
    
    formLineup.style.display = "none"
    
    if (form.style.display === "none") {
        form.style.display = "block"
    }else {
        form.style.display = "none"
    }
    cleanFieldremove()
}

function checkedPlayerRemove() {
    const shirtNum = document.querySelector("#shirt-num").value
    
    listPlayers.forEach((player) => {
        if (player.shirtNum === shirtNum) {
            const divReturn = document.querySelector("#div-return-form")
            divReturn.style.display = "block"
            
            const pName = document.querySelector("#p-name")
            pName.textContent = player.name
            
            const pNum =  document.querySelector("#p-num")
            pNum.textContent = player.shirtNum
            
            const pPosition =  document.querySelector("#p-position")
            pPosition.textContent = player.position
            
            const divForm = document.querySelector("#div-input-shirt-num")
            divForm.style.display = "none"
        }else {
            alert("xxxx")
            cleanFieldremove()
        }
    })
}

function removePlayer() {
    const pNum = document.querySelector('#p-num').textContent

    divPlayer = document.querySelector(`#div-player-${pNum}`)
    const lineupList = document.querySelector("#lineup-list")

    lineupList.removeChild(divPlayer)
}

function cleanFieldLineup() {

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

function cleanFieldremove() {
    
    const form = document.querySelector("#remove-form")
    
    const shirtNum = document.querySelector("#shirt-num")
    
    shirtNum.value = ""
}