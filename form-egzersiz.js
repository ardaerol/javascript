

let userFormDOM = document.querySelector("#userform")
userFormDOM.addEventListener(`submit`,formHandler)
const alertDOM = document.querySelector("#alert")
const alertSucDOM = document.querySelector("#alert-suc")

const alertFunc = (title,message,className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
const alertFuncSuc = (title,message,className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value) // gönderdikten sonra sıfırla
        USER_NAME.value = ""
        SCORE.value = ""
        alertSucDOM.innerHTML = alertFuncSuc(
            "Tebrikler!",
            "Score başarıyla kaydedildi",
            "success"
            
        )
    }else {
       alertDOM.innerHTML = alertFunc(
        "Aman Allahım!",
        "Bir şeyleri yanlış yaptın.",
        "danger"
        )
    }
    


}

/* <li class="list-group-item d-flex justify-content-between align-items-center">
  A list item
 <span class="badge bg-primary rounded-pill">14</span>
 </li> 
 */

 let userListDOM = document.querySelector("#userList")

 const addItem = (userName, score) => {
    let liDOM = document.createElement(`li`)
    liDOM.innerHTML = `
    ${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}