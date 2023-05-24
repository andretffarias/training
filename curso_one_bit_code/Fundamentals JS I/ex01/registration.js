const firstName = prompt('First name:')
const lastName = prompt('Last name:')
const yearOfBirth = prompt('Year of birth:')
const fieldOfStudy = prompt('Field of study:')

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

const age = currentYear - yearOfBirth

alert(
    "Your name is " + firstName + " " + lastName +
    "\nYear of birth " + age +
    "\nField of study " + fieldOfStudy
)