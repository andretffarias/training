class Character {
    constructor(name, life, att, def) {
        this.name = name
        this.life = life
        this.att = att
        this.def = def
    }

    attack(target) {
        target.life -= this.att - target.def
    }
}

module.exports = Character