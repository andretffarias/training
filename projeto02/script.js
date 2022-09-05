    const btn = document.querySelector('#send');
    const res = document.querySelector('#res');
    
    btn.addEventListener("click", function() {

        // ano do form
        const anof = window.document.getElementById('vano')
        const valueano = anof.value;

        // ano atual
        const data = new Date()
        const anoa = data.getFullYear()
        
        // calculo da idade
        const idade = anoa - valueano
        

        // genero
        const sexm = document.querySelector('#sexm');
        const sexf = document.querySelector('#sexf');

        if (sexm.checked == true) {
            switch (idade) {
                case  false || anoa || idade <= 0:
                    window.alert('[ERRO] tente verificar os dados')
                break
                default:
            }
        }else if (sexf.checked == true) {
            
        }
    })
