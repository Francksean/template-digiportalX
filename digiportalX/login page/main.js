console.log('ok')

let matriculeInput = document.querySelector('#matricule-input')
let passwordInput = document.querySelector('#password-input')
const loginBtn = document.querySelector('#btn-login')

const inputArray = [matriculeInput, passwordInput]

loginBtn.addEventListener('click', ()=>{
  inputArray.map((item)=>{
    if (item.value==""){
      item.style.border='1px solid pink'
      item.style.backgroundColor='pink'
      item.setAttribute('placeholder', 'information obligatoire')
    }
  })
})

const viewPasswd =  document.querySelector('#passw-view')

viewPasswd.addEventListener('click', ()=>{
  if (inputArray[1].type==="password"){
    inputArray[1].type="text"
  }else{
    inputArray[1].type="password"
  }
})