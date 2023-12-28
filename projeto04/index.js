function climb(){
    //get inputs:
    let ul = document.querySelector("#lineup-list")
    let name = document.querySelector("#input-name").value
    let shirtNum = document.querySelector("#input-shirt-number").value
    let position = document.querySelector('input[name=radio-opition]:checked').value

    //create tags:
    let li = document.createElement('li')
    let nameLabel = document.createElement('p')
    let shirtNumLabel = document.createElement('p')
    let positionLabel = document.createElement('p')

    //seting tags:
    nameLabel.innerText = "Name: "
    shirtNumLabel.innerText = "Shirt number: "
    positionLabel.innerText = "Position: "

    nameLabel.style.fontWeight = "bold";
    shirtNumLabel.style.fontWeight = "bold";
    positionLabel.style.fontWeight = "bold";

    //linking the tags:
    li.append(nameLabel, name, shirtNumLabel, shirtNum, positionLabel, position)
    ul.appendChild(li)

    //calling fildsCleaning() function to clean the filds:
    fieldsCleaning()
}

function remove(){
    window.alert("remove")
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