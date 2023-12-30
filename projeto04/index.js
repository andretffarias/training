function climb(){
    
    //create tags:
    let li = document.createElement('li')
    let nameLabel = document.createElement('p')
    let shirtNumLabel = document.createElement('p')
    let positionLabel = document.createElement('p')
    
    let name = document.createElement("p")
    let shirtNum = document.createElement("p")
    let position = document.createElement("p")

    //get inputs:
    let ul = document.querySelector("#lineup-list")
    nameValue = document.querySelector("#input-name").value
    shirtNumValue = document.querySelector("#input-shirt-number").value
    positionValue = document.querySelector('input[name=radio-opition]:checked').value

    name.innerText = nameValue
    shirtNum.innerText = shirtNumValue
    position.innerText = positionValue

    //seting tags:
    nameLabel.innerText = "Name: "
    shirtNumLabel.innerText = "Shirt number: "
    positionLabel.innerText = "Position: "

    nameLabel.style.fontWeight = "bold";
    shirtNumLabel.style.fontWeight = "bold";
    positionLabel.style.fontWeight = "bold";

    let divName = document.createElement('div')
    let divNum = document.createElement('div')
    let divPosition = document.createElement('div')

    divName.append(nameLabel, name)
    divNum.append(shirtNumLabel, shirtNum)
    divPosition.append(positionLabel, position)

    liChecked = document.getElementById("li-" + shirtNumValue)
    
    if (liChecked == null){
        if (nameValue !== "" && shirtNumValue !== ""){
            li.id = "li-" + shirtNumValue
    
            li.append(divName, divNum, divPosition)
            ul.appendChild(li)
    
            fieldsCleaning()
        }else{alert("field not fieled")}
    }else{alert("Player number in use.")}
}

function remove(){
    let shirtNum = document.querySelector("#shirt-number-input-remove").value
    let ul = document.querySelector("ul")
    let liId = "li-" + shirtNum
    let li = document.getElementById(liId)
    
    //requiring confirmation:
    if (li !== null){
        let name = li.querySelector("p:nth-child(2)").innerText
        let conf = window.confirm("Remove: " + name)
        if (conf == true){
            ul.removeChild(li)
        }
    }else{alert("player not found")}

    fieldsCleaning()
}

function fieldsCleaning(){
    document.querySelector("#input-name").value = ""
    document.querySelector("#input-shirt-number").value = ""
    
    let radioOptions = document.querySelectorAll('input[name=radio-opition]')
    radioOptions.forEach(function (radioOptions) {
        radioOptions.checked = false;
    });

    document.querySelector("#shirt-number-input-remove").value = ""
}