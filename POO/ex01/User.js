class User {
    constructor (fullName, email, passeword) {
        this.fullName = fullName
        this.email = email
        this.passeword = passeword
    }

    login(email, password) {
        if (this.email === email && this.passeword === password) {
            console.log('successful login!!!')
        }else {
            console.log('error')
        }
    }
}