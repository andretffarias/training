const Character = require("./Character.js")

class Mage extends Character {
    constructor(name, life, att, def, magic) {
        super(name, life, att, def)
        this.magic = magic
    }

    attack(target) {
        target.life -= (this.att + this.magic) - target.def
    }

    heal(target) {
        target.life += this.magic * 2
    }
}

module.exports = Mage