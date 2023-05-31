function FormAddPlayer() {
    const form = document.querySelector("#lineup-form")
    
    if (form.style.display === "none") {
        form.style.display = "block"
    }else{form.style.display = "none"}

    document.querySelector("#input-name").value = "";
    document.querySelector("#input-num").value = "";
}

function lineup() {
    const namePlayer = document.querySelector("#input-name").value
    const numPlayer = document.querySelector("#input-num").value
    const positionPlayer = document.querySelector("#input-position").value
    console.log(namePlayer, numPlayer, positionPlayer)
}