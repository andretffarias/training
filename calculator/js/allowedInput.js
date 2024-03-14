import { calculate } from "./calculate.js"
import { clear } from "./clear.js"

export function allowedInput (ev) {
    ev.preventDefault()

    const input = document.querySelector('#inp-calc')
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

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