
let domain = "kodluyoruz"
isActive = false
let items = [1,2,3,isActive,domain]

console.log(items)

let emptyArray = [] // bos list


console.log(items.length)

document.querySelector("#info").innerHTML = items.length

document.querySelector("#arda").innerHTML = items[0] //ilk eleman

console.log(items[items.length-1]) // son eleman

console.log(
    typeof(items) //object olarak çıktı veriyo
)

console.log(
    Array.isArray(items) //true arraydir
)

// hangileri isArray --> true verir?

console.log(Array.isArray([]) ) // true verir
console.log(Array.isArray(1) ) // false
console.log(Array.isArray(true) ) // false

// Arraydeki ortadaki elemanı çağırma
console.log(items[Math.floor(items.length/2)])