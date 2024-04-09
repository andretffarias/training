const Installment = require("./Installment.js")

module.exports = class Loan {
    static #fee = 0.03  
    constructor(amount, installments) {
        this.amount = amount
        this.installments = []
        this.date = new Date()
        
        const value = (amount * (1 + Loan.#fee)) / installments
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installment(value, i))
        }
    }

    static get fee() {
        return Loan.#fee
    }

    static set fee(newFee) {
        Loan.#fee = newFee / 100
    }
}