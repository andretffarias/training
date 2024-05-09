function imc(weight ,height) {
    return new Promise((resolve, reject) => {
        if(typeof(weight) != 'number' || typeof(height) != 'number') {
            reject('arguments must by of type number')
        }else {
            resolve(weight / (height * height))
        }
    })
}

function showImc(weight, height) {
    const imcPromise = imc(weight, height).then((result) => {
        console.log(`O resultado do IMC foi: ${result}`)

        if(result < 18.5) console.log('Situação: magreza.')
        else if(result < 25) console.log('Situação: normal.')
        else if(result < 30) console.log('Situação: sobrepeso.')
        else if(result < 40) console.log('Situação: obesidade.')
        else console.log('Situação: obesidade grave.')
    }).catch((err) => {
        console.log(err)
    })

    console.log('calculando...')
}

showImc(71, 1.72)
showImc(60, 1.72)
showImc(65, 1.72)
showImc(80, 1.72)
showImc(71, 'oii')