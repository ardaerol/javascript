// ilk fonksiyonumuzu tanimlamak 
let userName = prompt("Kullanici adiniz:")
let age = prompt("yasiniz")

function hello(){
    console.log("merhaba")
}

function helloWorld(){
    let info = document.querySelector("#info")
    info.classList.add("isim")
    info.innerHTML = "Merhaba"
}

function userCheck(){
    let info = document.querySelector("#info")
    if(userName && age >= 18){
        info.innerHTML = "ehliyet alabilir"
    }else if(userName.length==0 && !(age >=18)){
        info.innerHTML = ("bilgileri doldurunuz")
    }
    else if(userName && age < 18 ){
        info.innerHTML = ("ehliyet yaşınız tutmamakta")
    }
    
    else if( !(age >= 18)){
        info.innerHTML =  ("yaş bilgisi bulunamadı")
    }
    else if(!userName){
        info.innerHTML = ("kullanıcı adı boş olamaz")
    }
     else{info.innerHTML = ("bilgileri doldurunuz")}
}

hello() //fonksiyon çağırıldı ve çalıştırıldı

helloWorld()

userCheck(userName,age)