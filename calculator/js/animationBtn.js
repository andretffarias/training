export function animationBtnCopy (equal) {
    const copyBtn = document.querySelector('#btn-copy')
    const resultInput = document.querySelector('#result-input')

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