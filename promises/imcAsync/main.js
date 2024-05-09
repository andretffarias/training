async function imc(weight ,height) {
    if(typeof(weight) != 'number' || typeof(height) != 'number') {
        return Promise.reject('arguments must by of type number')
    }
    return weight / (height * height)
}

async function showImc(weight, height) {
    try {
        const resultImc = await imc(weight, height)

        console.log(`Calculando IMC para o peso ${weight} e altura ${height}...`)
        
        console.log(`O resultado do IMC foi: ${resultImc}`)

        if(resultImc < 18.5) console.log('Situação: magreza.')
        else if(resultImc < 25) console.log('Situação: normal.')
        else if(resultImc < 30) console.log('Situação: sobrepeso.')
        else if(resultImc < 40) console.log('Situação: obesidade.')
        else console.log('Situação: obesidade grave.')
    } catch (error){
        console.log(error)
    }
}

showImc(71, 1.72)
showImc(60, 1.72)
showImc(65, 1.72)
showImc(80, 1.72)
showImc(71, 'oii')