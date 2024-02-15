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
    function turn (block) {
        const idDiv = block.id
            const p = document.querySelector('#p-block-' + idDiv)
            
            if (p.innerText === '') {
                if (shiftStatus  === 'p1') {
                    p.innerText = 'X'
                    block.dataset.status = 'x'
                    
                    block.classList.add('p1')
                    
                    
                    shiftStatus  = 'p2'
                    statusArrow.innerText = '>>>'
                }else {
                    p.innerText = 'O'
                    block.dataset.status = 'o'
                    
                    block.classList.add('p2')
                    
                    shiftStatus  = 'p1'
                    statusArrow.innerText = '<<<'
                }
                
                
            }

            const a0 = document.querySelector('#a0')
            const a1 = document.querySelector('#a1')
            const a2 = document.querySelector('#a2')
            const b0 = document.querySelector('#b0')
            const b1 = document.querySelector('#b1')
            const b2 = document.querySelector('#b2')
            const c0 = document.querySelector('#c0')
            const c1 = document.querySelector('#c1')
            const c2 = document.querySelector('#c2')

            const a0stts = a0.dataset.status
            const a1stts = a1.dataset.status
            const a2stts = a2.dataset.status
            const b0stts = b0.dataset.status
            const b1stts = b1.dataset.status
            const b2stts = b2.dataset.status
            const c0stts = c0.dataset.status
            const c1stts = c1.dataset.status
            const c2stts = c2.dataset.status

            if (a0stts === 'x' && b0stts === 'x' && c0stts === 'x') {
                win('p1', a0, b0, c0)
            }else if (a1stts === 'x' && b1stts === 'x' && c1stts === 'x') {
                win('p1', a1, b1, c1)
            }else if (a2stts === 'x' && b2stts === 'x' && c2stts === 'x') {
                win('p1', a2, b2, c2)
            }else if (a0stts === 'x' && a1stts === 'x' && a2stts === 'x') {
                win('p1', a0, a1, a2)
            }else if (b0stts === 'x' && b1stts === 'x' && b2stts === 'x') {
                win('p1', b0, b1, b2)
            }else if (c0stts === 'x' && c1stts === 'x' && c2stts === 'x') {
                win('p1', c0, c1, c2)
            }else if (a0stts === 'x' && b1stts === 'x' && c2stts === 'x') {
                win('p1', a0, b1, c2)
            }else if (a2stts === 'x' && b1stts === 'x' && c0stts === 'x') {
                win('p1', a2, b1, c0)
            }else if (a0stts === 'o' && b0stts === 'o' && c0stts === 'o') {
                win('p2', a0, b0, c0)
            }else if (a1stts === 'o' && b1stts === 'o' && c1stts === 'o') {
                win('p2', a1, b1, c1)
            }else if (a2stts === 'o' && b2stts === 'o' && c2stts === 'o') {
                win('p2', a2, b2, c2)
            }else if (a0stts === 'o' && a1stts === 'o' && a2stts === 'o') {
                win('p2', a0, a1, a2)
            }else if (b0stts === 'o' && b1stts === 'o' && b2stts === 'o') {
                win('p2', b0, b1, b2)
            }else if (c0stts === 'o' && c1stts === 'o' && c2stts === 'o') {
                win('p2', c0, c1, c2)
            }else if (a0stts === 'o' && b1stts === 'o' && c2stts === 'o') {
                win('p2', a0, b1, c2)
            }else if (a2stts === 'o' && b1stts === 'o' && c0stts === 'o') {
                win('p2', a2, b1, c0)
            }

        }
        function removeEv (block) {
            block.removeEventListener('click', turn)
        }
    
        function win (player, case1, case2, case3) {
            blocks.forEach(function (block) {
                removeEv(block)
            })
            case1.classList.add('win')
            case2.classList.add('win')
            case3.classList.add('win')
            
            case1.classList.remove('p1', 'p2')
            case2.classList.remove('p1', 'p2')
            case3.classList.remove('p1', 'p2')  
        
        }

}


function appendDiv (numberPlayer, pName, pLetter) {
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