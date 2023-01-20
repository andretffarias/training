const str1 = prompt("Enter a nuber:");
const str2 = prompt("Enter another nuber:");

const n1 = parseInt(str1);
const n2 = parseInt(str2);

const nSum = n1 + n2
const nSub = n1 - n2
const nMul = n1 * n2
const nDiv = n1 / n2

alert(
    'Result :' +
    '\nSum: ' + nSum +
    '\nSubtraction: ' + nSub +
    '\nMultiplication: ' + nMul +
    '\nDivision: ' + nDiv
)