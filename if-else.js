// koşullar

// eger kullanıcı bilgisi varsa ekrana yazdır
// eger (userName.lengyh>0) {console.log(userName)}
// if (userName.lengyh>0) {console.log(userName)}

let userName = prompt("Kullanıcı adınızı giriniz..")

if (userName.length > 0) {
    console.log("kullanıcı bilginiz",userName)
}else{console.log("kullanıcı bilgisi bulunamadı..")}