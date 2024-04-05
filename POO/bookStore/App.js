const Database = require("./DataBase")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Pen = require("./entities/Pen")
const User = require("./entities/User")
const Order = require("./entitis/Order")

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find("users")
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find("authors")
    }

    createBook(title, synopsis, genere, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genere, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    getBooks() {
        return App.#database.find("books")
    }

    addBook(bookName, quantity) {
        App.#database.addBookToStock(bookName, quantity)
    }

    createPen(name, description, color, price, inStock = 0) {
        const pen = new Pen(name, description, color, price, inStock = 0)
        App.#database.savePen(pen)
    }

    getPens() {
        return App.#database.find("pens")
    }

    addPen(penName, quantity) {
        App.#database.addPenToStock(penName, quantity)
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEache(({ product, quantity}) => {
            if (product instanceof Book) {
                App.#database.removeBookToStock(product.name, quantity)
            }else if (product instanceof Pen) {
                App.#database.removePenToStock(product.name, quantity)
            }
        })
    }

    getOrders() {
        return App.#database.find('orders')
    }

    showDatabase() {
        App.#database.showStorage()
    }
}