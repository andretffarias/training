let listNumber = []

for (let i = 1; i <= 100; i++) {
    listNumber.push(i)
}

let listEvenNumber = listNumber.filter(number => number % 2 === 0)

let listSquareNumber = listEvenNumber.map(number => number ** 2)

let sumSquareNumber = listSquareNumber.reduce((amount, square) => amount + square, 0)

console.log(listEvenNumber, listSquareNumber, sumSquareNumber)