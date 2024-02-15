const btnPlay = document.querySelector('#btn-play')

const displayMain = document.querySelector('#display-main')
const displayP1 = document.querySelector('#display-p1')
const displayP2 = document.querySelector('#display-p2')

const inputP1 = document.querySelector('#inp-p1')
const inputP2 = document.querySelector('#inp-p2')

const turnIndicator = document.createElement('p')

const a0 = document.querySelector('#a0')
const a1 = document.querySelector('#a1')
const a2 = document.querySelector('#a2')
const b0 = document.querySelector('#b0')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const c0 = document.querySelector('#c0')
const c1 = document.querySelector('#c1')

let i = 'x'
let gg = false
const c2 = document.querySelector('#c2')

btnPlay.addEventListener('click', start)

function start () {
    btnPlay.remove()
    
    inputP1.remove()
    inputP2.remove()
    
    const pNameP1 = document.createElement('p')
    pNameP1.innerText = (inputP1.value != undefined && inputP1.value != '') ? inputP1.value : 'Player 1'
    
    const pNameP2 = document.createElement('p')
    pNameP2.innerText = (inputP2.value != undefined && inputP2.value != '') ? inputP2.value : 'Player 2'
    
    turnIndicator.innerText = i != 'x' ? '> > >' : '< < <'
    
    displayP1.append(pNameP1)
    displayP2.append(pNameP2)
    displayMain.append(turnIndicator)
    
    a0.addEventListener('click', function () {
        addClick(a0)
        checkWin
    })
    a1.addEventListener('click', function () {
        addClick(a1)
        checkWin
    })
    a2.addEventListener('click', function () {
        addClick(a2)
        checkWin
    })
    b0.addEventListener('click', function () {
        addClick(b0)
        checkWin
    })
    b1.addEventListener('click', function () {
        addClick(b1)
        checkWin
    })
    b2.addEventListener('click', function () {
        addClick(b2)
        checkWin
    })
    c0.addEventListener('click', function () {
        addClick(c0)
        checkWin
    })
    c1.addEventListener('click', function () {
        addClick(c1)
        checkWin
    })
    c2.addEventListener('click', function () {
        addClick(c2)
        checkWin
    })
}

function checkWin () {
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

    function win(player, case1, case2, case3) {
        case1.classList.add('win')
        case2.classList.add('win')
        case3.classList.add('win')

        removeClick
    }
}

function removeClick () {
    a0.removeEventListener('click', addClick(a0))
    a1.removeEventListener('click', addClick(a1))
    a2.removeEventListener('click', addClick(a2))
    b0.removeEventListener('click', addClick(b0))
    b1.removeEventListener('click', addClick(b1))
    b2.removeEventListener('click', addClick(b2))
    c0.removeEventListener('click', addClick(c0))
    c1.removeEventListener('click', addClick(c1))
    c2.removeEventListener('click', addClick(c2))
}

function addClick (block) {
    const id = block.id
    const p = document.querySelector('#p-' + id)
    
    if (p.innerText === '') {
        p.innerText = i
        block.dataset.status = i

        i = (i === 'x') ? 'o' : 'x'
        turnIndicator.innerText = i != 'x' ? '> > >' : '< < <'
    }
}