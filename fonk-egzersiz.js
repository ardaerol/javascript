
let counter = 0
let counterDOM = document.querySelector(`#counter`)
let increaseDOM = document.querySelector(`#increase`)
let decreaseDOM = document.querySelector(`#decrease`)

// counter = prompt("deger gir")
counterDOM.innerHTML = counter

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)

function clickEvent(){
    console.log(this.id)
    this.id == "increase" ? counter+=1 : counter-=1
    counterDOM.innerHTML = counter
    
}