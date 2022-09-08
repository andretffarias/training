    
const btn = document.querySelector('#send');
var res = document.querySelector('#res');


res.innerHTML = `<p>Preencha os dados a cima para ver o resultado.</p>`


btn.addEventListener("click", function (event) {

    event.preventDefault()

    // ano do form
    const anof = window.document.getElementById('vano')
    const valueano = anof.value;

    // ano atual
    const data = new Date()
    const anoa = data.getFullYear()
    
    // calculo da idade
    const idade = valueano

    // genero
    const sexm = document.querySelector('#sexm');
    const sexf = document.querySelector('#sexf');

    if (sexm.checked == true) {
        if (idade < 0 || idade == false) {
            window.alert("[ERRO] tente preencher os dados corretamente")
        }else if (idade <= 3) {
            res.innerHTML = `<img src="src/masculino/bebe(m).png" alt="img-bebe">`        
        }else if (idade <= 13) {
            res.innerHTML = `<img src="src/masculino/menino.png" alt="img-menino">`
        }else if (idade <= 19) {
            res.innerHTML = `<img src="src/masculino/adolescente(m).png" alt="img-adolecente">`
        }else if (idade <= 29) {
            res.innerHTML = `<img src="src/masculino/homem.png" alt="img-homem">`
        }else if (idade <= 50) {
            res.innerHTML= `<img src="src/masculino/homem-meia-idade.png" alt="img-homem">`
        }else {
            res.innerHTML = `<img src="src/masculino/idoso.png" alt="img-idoso">`
        }

    }else if (sexf.checked == true) {
        if (idade < 0 || idade == false) {
            window.alert("[ERRO] tente preencher os dados corretamente")
        }else if (idade <= 3) {
            res.innerHTML = `<img src="src/feminino/bebe(f).png" alt="img-bebe">`        
        }else if (idade <= 13) {
            res.innerHTML = `<img src="src/feminino/menina.png" alt="img-menina">`
        }else if (idade <= 19) {
            res.innerHTML = `<img src="src/feminino/adolescente(f).png" alt="img-adolecente">`
        }else if (idade <= 29) {
            res.innerHTML = `<img src="src/feminino/mulher.png" alt="img-mulher">`
        }else if (idade <= 50) {
            res.innerHTML= `<img src="src/feminino/mulher-meia-idade.png" alt="img-mulher">`
        }else {
            res.innerHTML = `<img src="src/feminino/idosa.png" alt="img-idosa">`
        }
    }
    
    //res.innerHTML = `<p>Você tem ${idade}<p/>`
})
