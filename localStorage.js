let user = {userName: "ArdaErol", isActive: true}

localStorage.setItem(`userInfo`,JSON.stringify(user))

let userInfo = localStorage.getItem(`userInfo`) // bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)

let item = [1,2,3,user]

localStorage.setItem(`ìtemInfo`,JSON.stringify(item))

let itemInfo = localStorage.getItem(`itemInfo`)
itemInfo = JSON.parse(itemInfo)
console.log(itemInfo)

let arda = [1,2,3,user]

localStorage.setItem(`ardaInfo`,JSON.stringify(arda))

let ardaInfo = localStorage.getItem(`ardaInfo`)
ardaInfo = JSON.parse(ardaInfo)
console.log(ardaInfo)