

 // let firstName = "Lorem"

function greetings(firstName, lastName){
    firstName = prompt("Adınızı giriniz")
    lastName = prompt("soyadınızı giriniz")
    let info = document.querySelector("#info")
    info.classList.add("isim")
    info.innerHTML = (`merhaba ${firstName} ${lastName}`)
    // console.log(`merhaba ${firstName}`)
}

greetings()

function greetings2(firstName,lastName){
    firstName = prompt("Adınızı giriniz")
    lastName = prompt("soyadınızı giriniz")
    let info = `merhaba ${firstName} ${lastName}`
    return info

}

let arda = greetings2()
console.log(info)

function domIdWriteInfo(id,info){
    let domObject = document.querySelector(`#${id}`)
    domObject.classList.add("isim")
    domObject.innerHTML = info
}

domIdWriteInfo(`arda`,arda)