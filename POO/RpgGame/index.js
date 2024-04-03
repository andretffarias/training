const Mage = require ("./Mage")
const Thief = require ("./Thief")
const Warrior = require ("./Warrior")

const imp = new Mage('heri', 100, 10, 10, 10)
const furia = new Thief('fallen', 100, 12, 15)
const pain = new Warrior('biguzeira', 120, 15, 10, 5)

console.table({ imp, furia, pain })

pain.switchStance()
imp.attack(pain)
furia.attack(imp)

console.table({ imp, furia, pain })