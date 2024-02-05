const sectionInfo = document.querySelector('#section-info')

const display = document.querySelector('#div-display')
const divInputP1 = document.querySelector('#div-inp-p1')
const divInputP2 = document.querySelector('#div-inp-p2')

const btnPlay = document.querySelector('#btn-play')
const blocks = document.querySelectorAll('.block')

function game () {
    const inpNameP1 = document.querySelector('#input-p1')
    const inpNameP2 = document.querySelector('#input-p2')
    
    const nameP1 = inpNameP1.value
    const nameP2 = inpNameP2.value
    
    let shiftStatus  = 'p1'

    const statusArrow = document.createElement('p')
    statusArrow.id = 'arrow'
    statusArrow.innerText = '<<<'

    display.append(statusArrow)

    divInputP1.remove()
    divInputP2.remove()
    
    if (nameP1 != '') {
        appendDiv(1, nameP1, 'X')
    }else {
        appendDiv(1, 'Player 1', 'X')
    }
    
    if (nameP2 != '') {
        appendDiv(2, nameP2, 'O', shiftStatus)
    }else {
        appendDiv(2, 'Player 2', 'O', shiftStatus)
    }
    
    blocks.forEach(function (block) {
        const idDiv = block.id
        const p = document.querySelector('#p-block-' + idDiv)
        
        p.innerText = ''
        block.dataset.status = 'undefined'
    })
    
    blocks.forEach(function turn (block) {
        block.addEventListener('click', function () {
            const idDiv = block.id
            const p = document.querySelector('#p-block-' + idDiv)
            
            if (p.innerText === '') {
                if (shiftStatus  === 'p1') {
                    p.innerText = 'X'
                    block.dataset.status = 'x'
                    
                    p.classList.remove('p1', 'p2')
                    p.classList.add('p1')
                    
                    
                    shiftStatus  = 'p2'
                    statusArrow.innerText = '>>>'
                }else {
                    p.innerText = 'O'
                    block.dataset.status = 'o'
                    
                    p.classList.remove('p1', 'p2')
                    p.classList.add('p2')
                    
                    shiftStatus  = 'p1'
                    statusArrow.innerText = '<<<'
                }
            }
        })
    })
}

function appendDiv (numberPlayer, pName, pLetter, shiftStatus) {
    const div = document.createElement('div')
    div.id = 'div-p' + numberPlayer
    div.classList.add('div-player')

    const name = document.createElement('p')
    name.id = 'name-p' + numberPlayer
    name.innerText = pName + ':'

    const letter = document.createElement('p')
    letter.id = pLetter.toLowerCase()
    letter.innerText = pLetter

    div.append(name, letter)
    sectionInfo.append(div)
    btnPlay.remove()
}


btnPlay.addEventListener('click', game)