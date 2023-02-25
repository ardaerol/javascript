
let items = [1, 2, 3, 4, 5]

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)

console.log(items)

items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length) // Array içindeki istedigimiz Arrayin lengthti
console.log(items[0][0]) // Ayse bilgisi

// Array icerisinden oge ayirmak -> spice(pos, item?)
let newItems = items.splice(1, 5)
console.log("newItems: ", newItems)
console.log("Items", items)

// Array icerisindeki ogenin index bilgisini bulmak ->indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))
console.log(items[3])

// Array kopyalamak -> slice, [....ES6]
let copyItems = items
console.log(items)

copyItems.pop()
console.log("copyItems:", copyItems)
console.log("items: ", items)

console.log("slice ile kopyalandıktan sonraki hali sadece copyItemsden sildi")
copyItems = items.slice()//kopyalama

copyItems.pop()
console.log("copyItems:", copyItems)
console.log("items: ", items)

let es6Items = [...items]
console.log(es6Items) // bu şekildede kopyalana bilir

let allUsers = [...maleUsers, ...femaleUsers] //es6 ile birden fazla array yapisini birlestirmek
console.log(allUsers)

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join

console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

//İki array bilgisini birleştirme -> [...ES6, ...ES6]
let allUsers2 = [...maleUsers, ...femaleUsers] //es6 ile birden fazla array yapisini birlestirmek
console.log(allUsers2)

// Istedigimiz Index bilgisin oge eklemek -> splice(index, 0, value)

allUsers.splice(allUsers.length-1, 0, "Melisa")
allUsers.splice(Math.floor(allUsers.length/2), 0, "Lorem")
console.log(allUsers)