function createFormAddPlayer() {

    const buttonLineupPlayer = document.querySelector("#lineup-player")
    buttonLineupPlayer.removeAttribute("onclick")

    const lineup = document.querySelector("#lineup-list")
    
    const form = document.querySelector("form")
    
    //01) cria input e label do nome do jogador

    const divName = document.createElement("div")
    divName.setAttribute("id", "div-name")
    
    const labelName = document.createElement("label")
    labelName.setAttribute("for", "input-name")
    labelName.innerText = "Name: "
    
    const inputName = document.createElement("input")
    inputName.setAttribute("type", "text")
    inputName.setAttribute("id", "input-name")
    
    //02) cria o titulo, input e o label da posição do jogador

    
    const titleRadio = document.createElement("h3")
    titleRadio.innerText = "Player position: "
    
    const divRadio = document.createElement("div")
    divRadio.setAttribute("id", "div-radio")

    // Goleiro
    
    const labelGOL = document.createElement("label")
    labelGOL.setAttribute("for", "radio-GOL")
    labelGOL.innerText = "GOL"
    
    const inputGOL = document.createElement("input")
    inputGOL.setAttribute("type", "radio")
    inputGOL.setAttribute("name", "radio-position")
    inputGOL.setAttribute("id", "radio-GOL")
    inputGOL.setAttribute("value", "GOL")
    
    // Zagueiro
    
    const labelZAG = document.createElement("label")
    labelZAG.setAttribute("for", "radio-ZAG")
    labelZAG.innerText = "ZAG"
    
    const inputZAG = document.createElement("input")
    inputZAG.setAttribute("type", "radio")
    inputZAG.setAttribute("name", "radio-position")
    inputZAG.setAttribute("id", "radio-ZAG")
    inputZAG.setAttribute("value", "ZAG")
    
    // Lateral
    
    const labelLAT = document.createElement("label")
    labelLAT.setAttribute("for", "radio-LAT")
    labelLAT.innerText = "LAT"
    
    const inputLAT = document.createElement("input")
    inputLAT.setAttribute("type", "radio")
    inputLAT.setAttribute("name", "radio-position")
    inputLAT.setAttribute("id", "radio-LAT")
    inputLAT.setAttribute("value", "LAT")
    
    // Volante
    
    const labelVOL = document.createElement("label")
    labelVOL.setAttribute("for", "radio-VOL")
    labelVOL.innerText = "VOL"
    
    const inputVOL = document.createElement("input")
    inputVOL.setAttribute("type", "radio")
    inputVOL.setAttribute("name", "radio-position")
    inputVOL.setAttribute("id", "radio-VOL")
    inputVOL.setAttribute("value", "VOL")
    
    // Meio de campo
    
    const labelMC = document.createElement("label")
    labelMC.setAttribute("for", "radio-MC")
    labelMC.innerText = "MC"
    
    const inputMC = document.createElement("input")
    inputMC.setAttribute("type", "radio")
    inputMC.setAttribute("name", "radio-position")
    inputMC.setAttribute("id", "radio-MC")
    inputMC.setAttribute("value", "MC")
    
    // Atacante
    
    const labelATA = document.createElement("label")
    labelATA.setAttribute("for", "radio-ATA")
    labelATA.innerText = "ATA"
    
    const inputATA = document.createElement("input")
    inputATA.setAttribute("type", "radio")
    inputATA.setAttribute("name", "radio-position")
    inputATA.setAttribute("id", "radio-ATA")
    inputATA.setAttribute("value", "ATA")
    
    // Ponta
    
    const labelPT = document.createElement("label")
    labelPT.setAttribute("for", "radio-PT")
    labelPT.innerText = "PT"
    
    const inputPT = document.createElement("input")
    inputPT.setAttribute("type", "radio")
    inputPT.setAttribute("name", "radio-position")
    inputPT.setAttribute("id", "radio-PT")
    inputPT.setAttribute("value", "PT")
    
    // Centroavante
    
    const labelCA = document.createElement("label")
    labelCA.setAttribute("for", "radio-CA")
    labelCA.innerText = "CA"
    
    const inputCA = document.createElement("input")
    inputCA.setAttribute("type", "radio")
    inputCA.setAttribute("name", "radio-position")
    inputCA.setAttribute("id", "radio-CA")
    inputCA.setAttribute("value", "CA")
    
    //03) pedir numero da camisa

    const divNum = document.createElement("div")
    divNum.setAttribute("id", "div-num")
    
    const labelNum = document.createElement("label")
    labelNum.setAttribute("for", "input-num")
    labelNum.innerText = "shirt number: "
    
    const inputNum = document.createElement("input")
    inputNum.setAttribute("type", "number")
    inputNum.setAttribute("id", "input-num")
    
    //04) BUTTON ESCALAR e deletar cadastro

    const divButton = document.createElement("div")
    divButton.setAttribute("id", "div-button")
    
    const buttonLineup = document.createElement("button")
    buttonLineup.setAttribute("onclick", "addPlayer()")
    buttonLineup.innerText = "Lineup"
    
    const buttonDell = document.createElement("button")
    buttonDell.addEventListener("click", function(event) {
        dellForm(event, form, buttonLineupPlayer, divName, titleRadio, divRadio, divNum, divButton);
    })
    buttonDell.innerText = "Cancel"

    divRadio.append(labelGOL, inputGOL, labelZAG, inputZAG, labelLAT, inputLAT, labelVOL, inputVOL, labelMC, inputMC, labelATA, inputATA, labelPT, inputPT, labelCA, inputCA)

    divName.append(labelName, inputName)
    divNum.append(labelNum, inputNum)
    divButton.append(buttonLineup, buttonDell)

    form.append(divName, titleRadio, divRadio, divNum, divButton)
}

function dellForm(event, form, buttonLineupPlayer, divName, titleRadio, divRadio, divNum, divButton) {
    event.preventDefault()
    form.remove(divName, titleRadio, divRadio, divNum, divButton)
    buttonLineupPlayer.addEventListener("onclick", createFormAddPlayer)
}
