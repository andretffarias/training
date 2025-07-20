const express = require('express')
const path = require('node:path')

const app = express()
const PORT = 3000

// config ejs:
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// config public:
app.use(express.static('public'))

// config urlencoded:
app.use(express.urlencoded({ extended: true }))

const users = []

app.get('/', (req, res) => {
  res.render('users', { users })
})

app.post('/', (req, res) => {
  const email = req.body.email

  const i =users.findIndex(user => user.email === email)

  if(i !== -1) {
    users.splice(i, 1)
  }else {
    console.log(`User not found: ${email}`)
  }
  res.redirect('/')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.post('/register', (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
  const i = users.findIndex(userArrey => userArrey.email === user.email)

  if(i === -1) {
    users.push(user)
  } else {
    res.status(400).send(`Email already registered: ${user.email}`)
  } 
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`)
})