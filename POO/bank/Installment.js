module.exports = class Installment extends Loan {
    constructor(value, number) {
         this.value = value
         this.number = number
         this.status = 'pending'
    }
}