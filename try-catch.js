

let products;

try {
    products.forEach(item => console.log(item));
} catch{
    console.error("hata")
    products = [1, 2, 3]
    products.forEach(item => console.log(item));
;}


console.log("hata yonetimi duzgun calisiyor")

let info = "kodluyoruz"
console.log(info)