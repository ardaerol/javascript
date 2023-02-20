let bas = document.querySelector("#bas")
bas.addEventListener("click",domClick)

function domClick() {
    console.log("etkinlik denetlendi")
    this.style.color == "red" ? this.style.color = "blue" : this.style.color = "red"
}