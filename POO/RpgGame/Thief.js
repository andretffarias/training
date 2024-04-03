const Character = require("./Character.js")

class Thief extends Character {
    attack(target) {
        target.life -= (this.att - target.def) * 2
    }
}

module.exports = Thief