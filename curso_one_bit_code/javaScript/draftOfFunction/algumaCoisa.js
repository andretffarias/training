i = 0;



function factorial (num) {
    if (num === 0) {
        return 1
    }else if (num === 1) {
        return 1
    }
    else {    
        return num * factorial(num - 1)
    }
}

//console.log(factorial(5))


function cal (num) {
    i++
    if (i === 15) {
        return num / 2
    }else {
        return cal(num / 2)
    }
}

//console.log(cal(100))

// DIV:

const sub = (a, b) => {
    return a - b
}

// DIV:

 