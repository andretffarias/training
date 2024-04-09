const Loan = require("./Loan.js")
const User = require("./User.js")
const Account = require("./Account.js")
const Deposit = require("./Deposit.js")

module.exports = class App {
    static #users = []
    
    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser(name, email, password) {
        const userExists = this.findUser(email)
        if (!userExists) {
            this.#users.push(new User(name, email, password))
        }else {
            console.log('[ERROR]:This email is already registered.')
        }
    }

    static deposit(email, value) {
        const user = this.findUser(email)
        if (user) {
            user.account.newDeposit(value)
        }else {
            console.log('[ERROR]:This email is already registered.')
        }
    }

    static transfer(emailFromUser, emailToUser, value) {
        const FromUser = this.findUser(emailFromUser)
        const toUser = this.findUser(emailToUser)

        if (FromUser && toUser) {
            FromUser.account.newTransfer(emailToUser, value)
        }else {
            console.log('[ERROR]:This email is already registered.')
        }
    }

    static loan(email, value, installmentNum) {
        const user = this.findUser(email)
        if (user) {
            user.account.newLoan(value, installmentNum)
        }else {
            console.log('[ERROR]:This email is already registered.')
        }
    }

    static changeLoanFee(newFee) {
        Loan.fee = newFee
    }
}