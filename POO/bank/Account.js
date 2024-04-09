const Transfer = require("./Transfer.js")
const Deposit = require("./Deposit.js")
const Loan = require("./Loan.js")

module.exports = class Account {
    #balance
    constructor(user) {
        this.user = user
        this.#balance = 0

        this.loans = []
        this.deposits = []
        this.transfers = []
    }

    get getBalance() {
        return this.#balance
    }

    addToBalance(value) {
        this.#balance += value
    }

    removeToBalance(value) {
        this.#balance -= value
    }

    newDeposit(value) {
        this.addToBalance(value)

        const deposit = new Deposit(value)
        this.deposits.push(deposit)
    }

    newTransfer(toUser, value) {
        this.removeToBalance(value)
        toUser.addToBalance(value)

        const transfer = new Transfer(this, toUser, value)
        this.transfers.push(transfer)
        toUser.transfers.push(transfer)
    }

    newLoan(value, installmentNum) {
        this.addToBalance(value)

        const loan = new Loan(value, installmentNum)
        this.loans.push(loan)
    }
}