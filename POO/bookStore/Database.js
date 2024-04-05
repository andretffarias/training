module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        pens: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book) {
        const bookExists = this.findBookByName(book.name)
        if(!bookExists) {
            this.#storage.books.push(book)
        }
    }

    addBookToStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBookToStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    findPenByName(PenName) {
        return this.#storage.pens.find(p => p.name === PenName)
    }

    savePen(pen) {
        const penExists = this.findPenByName(pen.name)
        if(!penExists) {
            this.#storage.pens.push(pen)
        }
    }

    addPenToStock(penName, quantity) {
        const pen = this.findPenByName(penName)
        pen?.addToStock(quantity)
    }

    removePenToStock(penName, quantity) {
        const pen = this.findPenByName(penName)
        pen?.removeFromStock(quantity)
    }

    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user)
        if (!userExists) {
            this.#storage.users.push(user)
        }
    }

    saveOrder(order) {
        this.#storage.orders.push(order)
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.pens)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}