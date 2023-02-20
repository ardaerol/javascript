let email = "aazizeerol@gmail.com"
let firstName = "arda"
let lastName = "erol"

console.log(email.length)

console.log(firstName[0])

console.log(email.search("@"))
console.log(email[10])

let DOMAIN = email.slice(email.search("@")+ 1 )
console.log(DOMAIN)
console.log(DOMAIN.slice(0,DOMAIN.indexOf('.')))

 email = email.replace('gmail.com','kodluyoruz.org')
console.log(email)

console.log(email.includes('dsdasda')) // false


console.log(email.endsWith('kodluyoruz.org'))


let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1)}`
console.log(fullName)