import { animationBtnCopy } from "./animationBtn.js"
export function clipboard () {
    const resultInput = document.querySelector('#result-input')
    navigator.clipboard.writeText(resultInput.value)
    animationBtnCopy(false)
}