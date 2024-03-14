import { calculate } from "./calculate.js"
import { allowedInput } from "./allowedInput.js"
import { clipboard } from "./clipboard.js"
import { clear } from "./clear.js"
import { switchTheme } from "./theme.js"

const themeBtn = document.querySelector('#themeSwitcher')
const copyBtn = document.querySelector('#btn-copy')

const clearBtn = document.querySelector('#clear')
const equalBtn = document.querySelector('#equal')

const input = document.querySelector('#inp-calc')

const keys = document.querySelectorAll('.charKey')

keys.forEach(function (carhkeyBtn) {
    carhkeyBtn.addEventListener('click', function () {
        const value = carhkeyBtn.dataset.value
        input.value += value
    })
})

input.addEventListener('keydown', allowedInput)
copyBtn.addEventListener('click', clipboard)
equalBtn.addEventListener('click', calculate)
equalBtn.addEventListener('click', clear)
clearBtn.addEventListener('click', clear)
themeBtn.addEventListener('click', switchTheme)