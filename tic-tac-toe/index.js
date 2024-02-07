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

            const a1 = document.querySelector('#a1')
            const b1 = document.querySelector('#b1')
            const c1 = document.querySelector('#c1')
            const a2 = document.querySelector('#a2')
            const b2 = document.querySelector('#b2')
            const c2 = document.querySelector('#c2')
            const a3 = document.querySelector('#a3')
            const b3 = document.querySelector('#b3')
            const c3 = document.querySelector('#c3')

            const a1stt = a1.dataset.status
            const b1stt = b1.dataset.status
            const c1stt = c1.dataset.status
            const a2stt = a2.dataset.status
            const b2stt = b2.dataset.status
            const c2stt = c2.dataset.status
            const a3stt = a3.dataset.status
            const b3stt = b3.dataset.status
            const c3stt = c3.dataset.status

            if (a1stt === 'x' && a2stt === 'x' && a3stt === 'x') {
                win('p1', a1, a2, a3)
            }else if (b1stt === 'x' && b2stt === 'x' && b3stt === 'x') {
                win('p1', b1, b2, b3)
            }else if (c1stt === 'x' && c2stt === 'x' && c3stt === 'x') {
                win('p1', c1, c2, c3)
            }else if (a1stt === 'x' && b1stt === 'x' && c1stt === 'x') {
                win('p1', a1, b1, c1)
            }else if (a2stt === 'x' && b2stt === 'x' && c2stt === 'x') {
                win('p1', a2, b2, c2)
            }else if (a3stt === 'x' && b3stt === 'x' && c3stt === 'x') {
                win('p1', a3, b3, c3)
            }else if (a1stt === 'x' && b2stt === 'x' && c3stt === 'x') {
                win('p1', a1, b2, c3)
            }else if (c1stt === 'x' && b2stt === 'x' && a3stt === 'x') {
                win('p1', c1, b2, a3)
            }else if (a1stt === 'o' && a2stt === 'o' && a3stt === 'o') {
                win('p2', a1, a2, a3)
            }else if (b1stt === 'o' && b2stt === 'o' && b3stt === 'o') {
                win('p2', b1, b2, b3)
            }else if (c1stt === 'o' && c2stt === 'o' && c3stt === 'o') {
                win('p2', c1, c2, c3)
            }else if (a1stt === 'o' && b1stt === 'o' && c1stt === 'o') {
                win('p2', a1, b1, c1)
            }else if (a2stt === 'o' && b2stt === 'o' && c2stt === 'o') {
                win('p2', a2, b2, c2)
            }else if (a3stt === 'o' && b3stt === 'o' && c3stt === 'o') {
                win('p2', a3, b3, c3)
            }else if (a1stt === 'o' && b2stt === 'o' && c3stt === 'o') {
                win('p2', a1, b2, c3)
            }else if (c1stt === 'o' && b2stt === 'o' && a3stt === 'o') {
                win('p2', c1, b2, a3)
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