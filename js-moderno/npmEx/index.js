const dayjs = require("dayjs")

function birthday (dateOfBirth) {
    const birth = dayjs(dateOfBirth)
    const today = dayjs()

    const age = today.diff(birth, 'year')
    const nextBirthday = birth.add(age + 1, "year")
    const daysToBirthday = nextBirthday.diff(today, "day") + 1
    console.log(`age: ${age}`)
    console.log(`next birthday: ${daysToBirthday}`)

    
}

birthday("1995-2-29")