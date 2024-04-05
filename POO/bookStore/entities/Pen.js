const Product = require("./Product");

module.exports = class Pen extends Product {
    constructor(name, description, color, price, inStock = 0) {
        super(name, description, price, inStock)
        this.color = color
    }
}