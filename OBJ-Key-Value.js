

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2,
    modelName: "MacBook Pro 14'' "
}

console.log(laptop1)
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model)
console.log(laptop1["2kg"])
console.log(laptop1.modelName)

// laptop1.brand = "Mac"
console.log(laptop1)

keys = Object.keys(laptop1)

console.log(Object.keys(laptop1))
console.log(Object.values(laptop1))

for(const key in keys){
    console.log(key)
}
console.log("------------------")

keys.forEach(item => {
    console.log(item)
    console.log(laptop1[item])
});


console.log("------------------")
let values = Object.values(laptop1)

values.forEach(item =>{
    console.log(item)
    
})


let setting = {
    password: 1234,
    userName: 'user1'
}