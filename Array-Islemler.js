

let items = [10, 20, 30, 40 , ]
console.log("items-ilk hali:", items)

//Array: sona oge/eleman eklemek -> push
items.push(50)
console.log("50: ",items)

// Array: basa oge eklemek -> unshift
items.unshift(5)
console.log("5: ",items)

// Array: sondaka ogeyi cikarmak -> pop
let lastitem =items.pop()
console.log("çıkartma ",items)
console.log(lastitem)

// Array: bastaki ogeyi cikarmak -> shift
let firstitem = items.shift()
console.log("bastaki oge cıkatma:",items)
console.log(firstitem)

// Array icindeki bir ogenin bilgisini degistirmek

// ilk eleman
items[0] = 5;
console.log(items)

// son eleman
items[items.length-1] = 1000
console.log(items)