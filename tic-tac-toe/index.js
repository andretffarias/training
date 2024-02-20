const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function updateTitle() {
    const player = document.getElementById(turnPlayer)

    if (player.value === '' && turnPlayer === 'player-1') {
        document.querySelector('#span-turn').innerText = 'X'
    }else if (player.value === '' && turnPlayer === 'player-2') {
        document.querySelector('#span-turn').innerText = 'O'
    }else {
        document.querySelector('#span-turn').innerText = player.value 
    }
}

function initializeGame() {
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player-1'
    document.querySelector('h2').innerHTML = 'Turn: <span id="span-turn"></span>'
    updateTitle()
    boardRegions.forEach(function (element) {
        element.classList.remove('win', 'p1', 'p2')
        element.innerText = ''
        element.classList.add('cursor-pointer')
        element.style.hover = 'backgrald-color = #ccc'
        element.addEventListener('click', handleBoardClick)
    })
}

function getWinRegions() {
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
        winRegions.push("0.0", "0.1", "0.2")
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
        winRegions.push("1.0", "1.1", "1.2")
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
        winRegions.push("2.0", "2.1", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
        winRegions.push("0.0", "1.0", "2.0")
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
        winRegions.push("0.1", "1.1", "2.1")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
        winRegions.push("0.2", "1.2", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
        winRegions.push("0.0", "1.1", "2.2")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
        winRegions.push("0.2", "1.1", "2.0")
    return winRegions
}

function disableRegion(element) {
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', handleBoardClick)
}

function handleWin(regions) {
    regions.forEach(function (region) {
        const regionClass = document.querySelector('[data-region="' + region + '"]')
        regionClass.classList.remove("p1", "p2");
        regionClass.classList.add("win")
    })

    const playerName = document.getElementById(turnPlayer).value
    if (playerName === "" && turnPlayer === 'player-1') {
        document.querySelector("h2").innerHTML = "(x) Win!!!"
    }else if (playerName === "" && turnPlayer === 'player-2') {
        document.querySelector("h2").innerHTML = "(o) Win!!!"
    }else {
        document.querySelector('h2').innerHTML = playerName + ' Win!!!'
    }    
}

function handleBoardClick(ev) {
    const span = ev.currentTarget
    const region = span.dataset.region
    const rowColumnPair = region.split('.')

    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    
    if(turnPlayer === 'player-1') {
        vBoard[row][column] = 'X'

        span.innerText = 'X'
        span.classList.add('p1')
    }else {
        vBoard[row][column] = 'O'

        span.innerText = 'O'
        span.classList.add('p2')
    }

    disableRegion(span)

    const winRegions = getWinRegions()
    if (winRegions.length > 0) {
        handleWin(winRegions)

        boardRegions.forEach(function (region) {
            disableRegion(region)
        })
    }else if (vBoard.flat().includes('')) {
        turnPlayer = turnPlayer === 'player-1' ? 'player-2' : 'player-1'
        updateTitle()
    }else {
        document.querySelector('h2').innerHTML = 'Draw!'
    }
}

document.querySelector('#start').addEventListener('click', initializeGame)