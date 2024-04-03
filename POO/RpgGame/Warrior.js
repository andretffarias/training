const Character = require("./Character.js")

class Warrior extends Character {
    constructor(name, life, att, def, shield) {
        super(name, life, att, def)
        this.shield = shield
        this.stance = 'att'
    }

    attack(target) {
        if (this.stance === 'att') {
            super.attack(target)
        }else {
            console.log('you cannot attack while in defense stance')
        }
    }

    switchStance() {
        if (this.stance === 'att') {
            this.stance = 'def'
            this.def += this.shield
        }else {
            this.stance = 'att'
            this.def -= this.shield
        }
    }
}

module.exports = Warrior