

let formDOM = document.querySelector("#userForm")

formDOM.addEventListener(`submit`,formSubmit)


function formSubmit(event){
    event.preventDefault() //default işlemi engelledik
    console.log("islem tamam")
    let scoreInputDOM = document.querySelector(`#score`)
    console.log(scoreInputDOM.value)
    localStorage.setItem(`score`,scoreInputDOM.value)
}