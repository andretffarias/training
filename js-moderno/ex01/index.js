const average = (...parameters) => {
    const sum = parameters.reduce((accum, num) => accum + num, 0)
    return sum / parameters.length
}

//console.log(average([7, 2, 9, 5, 3, 1, 7]))

const weightedAverage = (...parameters) => {
    const sum = parameters.reduce((accum, {number, weight}) => accum + (number * (weight ?? 1)), 0)
    const weightSum = parameters.reduce((accum, parameters) => accum + (parameters.weight ?? 1), 0)
    return sum / weightSum
}

console.log(
    `Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10},
)}`)

const median = (...parameters) => {
    const array = [...parameters].sort((a, b) => a - b)
    const middle = Math.floor(array.length / 2)
    if (array.length % 2 === 0) {
        const num1 =array[middle - 1]
        const num2 =array[middle]
        return (num1 + num2) / 2
    }else {
        return array[middle]
    }
}

//console.log(median([7, 2, 9, 5, 3, 1, 7]))

const mode = (...parameters) => {
    const quantities = parameters.map(num => [
        num,
        parameters.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(
    `Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4
)}`)