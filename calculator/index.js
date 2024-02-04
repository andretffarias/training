const themeBtn = document.querySelector('#themeSwitcher')
const copyBtn = document.querySelector('#btn-copy')

const clearBtn = document.querySelector('#clear')
const equalBtn = document.querySelector('#equal')

const input = document.querySelector('#inp-calc')
const resultInput = document.querySelector('#result-input')

const keys = document.querySelectorAll('.charKey')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const root = document.querySelector(':root')

keys.forEach(function (carhkeyBtn) {
    carhkeyBtn.addEventListener('click', function () {
        const value = carhkeyBtn.dataset.value
        input.value += value
    })
})

function allowedInput (ev) {
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if(ev.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
        calculate()
        clear()
    }
}

function calculate () {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
    
    if (eval(input.value) === undefined) {
        resultInput.value = 'ERROR'
        resultInput.classList.add('error')
    }

    animationBtnCopy(true)
}

function clear () {
    input.value = ''
    input.focus()
}

function clipboard () {
    navigator.clipboard.writeText(resultInput.value)
    animationBtnCopy(false)
}

function animationBtnCopy (equal) {
    if (equal === true) {
        copyBtn.innerText = 'Copy'
        copyBtn.classList.remove('success')
    }else {
        if (copyBtn.innerText === 'Copy' && resultInput.value !== '') {
            copyBtn.innerText = 'Copyed'
            copyBtn.classList.add('success')
            
            if (resultInput.value === 'ERROR') {
                resultInput.value = ''
                resultInput.classList.remove('error')

                copyBtn.innerText = 'Copy'
                copyBtn.classList.remove('success')
            }
        }else {
            copyBtn.innerText = 'Copy'
            copyBtn.classList.remove('success')
            resultInput.value = ''
        }
    }
}

function switchTheme () {
    const main =document.querySelector('main')

    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light"
    } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"
      }
}

input.addEventListener('keydown', allowedInput)
copyBtn.addEventListener('click', clipboard)
equalBtn.addEventListener('click', calculate)
equalBtn.addEventListener('click', clear)
clearBtn.addEventListener('click', clear)
themeBtn.addEventListener('click', switchTheme)