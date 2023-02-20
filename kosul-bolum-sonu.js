let info = document.querySelector("#info")
info.classList.add("isim")


let puan = prompt("notunuzu giriniz")
let textInfo;

if(puan >= 0 && puan <= 100) {
    info.classList.add("isim")
        if (puan >= 90){
        textInfo = "AA"
    }else if (puan >= 85){
        textInfo = "BA"
    }else if (puan >= 80){
        textInfo = "BB"
    }else if (puan >= 75){
        textInfo = "CB"
    }else if (puan >= 70){
        textInfo = "CC"
    }else if (puan >= 65){
        textInfo = "DC"
    }else if (puan >= 60){
        textInfo = "DD"
    }else if (puan >=50 ){
        textInfo = "FD"
    }else if (puan < 50){
        textInfo = "FF"
        info.classList.remove("isim")
        info.classList.add("bad")
    }
}else{
    textInfo = "puan geçersiz"
}

info.innerHTML = `${textInfo} --> ${puan}`
console.log(textInfo)

