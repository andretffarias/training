const Author = require("./Author.js")

const jhon = new Author("jhon doe")

const post = jhon.createPost('oranje', 'lorem...')

post.addComment("Isa", "nice")
post.addComment("luca", "great")

console.log(jhon)
console.log(post)