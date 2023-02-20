// eger kullanıcı adı varsa yaz yoksa kullanıcı adı yok de

let userName = prompt("Kullanıcı adınızı giriniz")
let info = document.querySelector("#info")
info.classList.add("isim")
// ternary kullanımı :
// kosul ? dogruysa : yanlışsa

info.innerHTML = userName.length > 0 ? userName : "kullanıcı adı yok"