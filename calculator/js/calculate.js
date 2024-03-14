import { animationBtnCopy } from "./animationBtn.js"
export function calculate () {
    const input = document.querySelector('#inp-calc')
    const resultInput = document.querySelector('#result-input')

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