module.exports = class Order {
    #total
    #items
    #user

    constructor(items, user) {
        items.forEache(({ product, quantity }) => {
            if (quantity > product.inStock) {
                throw new Error('insufficient quantity in stoke.')
            }
        })
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, { product, quantity }) => sum + (product * quantity), 0)
    }

    get data() {
        return {
            items: this.#items,
            user: this.#total,
            total: this.#total
        }
    }
}