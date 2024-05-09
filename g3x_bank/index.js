const transactions = []

function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}

function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
}

function createTransactionAmout(amount) {
    const span = document.createElement('span')
    span.classList.add('transaction-amount')

    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })

    span.textContent = formater.format(amount)

    if (amount > 0) {
        span.classList.add('positive-transaction')
    }else {
        span.classList.add('negative-transaction')
    }
    return span
}

function createEditTransactionBtn(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Edit'

    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id
        document.querySelector('#name-input').value = transaction.name
        document.querySelector('#amount-input').value = transaction.amount
    })
    return editBtn
}

function createDeleteTransactionBtn(id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Delete'

    deleteBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })
        
        deleteBtn.parentElement.remove()

        const iToRemove = transactions.findIndex(transaction => transaction.id === id)
        transactions.splice(iToRemove, 1)
        updateBalance()
    })
    return deleteBtn
}

function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmout(transaction.amount)
    const editBtn = createEditTransactionBtn(transaction)
    const deleteBtn = createDeleteTransactionBtn(transaction.id)

    document.querySelector('#transactions-list').append(container)
    container.append(title, amount, editBtn, deleteBtn)
}

async function fetchTransactions() {
    return await fetch('http://localhost:3000/transactions').then(res => res.json())
}

function updateBalance() {
    const balanceSpan = document.querySelector('#balance-span')
    const balance = transactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0)

    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    balanceSpan.textContent = formater.format(balance)
}

async function setup() {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
}

async function saveTransaction(ev) {
    ev.preventDefault()

    const id = document.querySelector('#id').value
    const name = document.querySelector('#name-input').value
    const amount = document.querySelector('#amount-input').value

    if (id) {
        //edit transaction
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'PUT',
            body: JSON.stringify({name, amount}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const transaction = await response.json()

        const iToRemove = transactions.findIndex(transaction => transaction.id === id)
        transactions.splice(iToRemove, 1, transaction)

        document.querySelector(`#transaction-${id}`).remove()
        renderTransaction(transaction)
    }else {
        //create new trasaction
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            body: JSON.stringify({name, amount}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        const transaction = await response.json()
        transactions.push(transaction)
        renderTransaction(transaction)
    }

    ev.target.reset()
    updateBalance()
}
  
document.querySelector('form').addEventListener('submit', saveTransaction)
document.addEventListener('DOMContentLoaded', setup)