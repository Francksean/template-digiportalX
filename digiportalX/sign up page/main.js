const signInBtn = document.querySelector('#sign-in-btn')

// récupération des éléments de la carte
let matriculeOnCard = document.querySelector('#front-card-matricule')
let firstNameOnCard =  document.querySelector('#name-content')
let lastNameOnCard = document.querySelector('#lastname-content')
let levelOnCard = document.querySelector('#level-on-card')
let filiereOnCard = document.querySelector('#filiere-on-card')
let statutOnCard = document.querySelector('#statut-on-card')
let sexeOnCard = document.querySelector('#sexe-on-card')
console.log('ok')
arrayItem = [matriculeOnCard, firstNameOnCard, lastNameOnCard]
arrayItem1 = [levelOnCard, filiereOnCard,statutOnCard,sexeOnCard]

// récupération des inputs
const matriculeInput = document.querySelector('#card-matricule')
const nameInput = document.querySelector('#name')
const lastNameInput = document.querySelector('#lastname')
const levelInput = document.querySelector('#card-niveau')
const statutInput = document.querySelector('#card-statut')
const sexeInput = document.querySelector('#card-sexe')
const filiereInput = document.querySelector('#filiere-niveau')
const emailInput = document.querySelector('#user-email')
const passwordConfInput = document.querySelector('#card-password-confirm')
const passwordInput = document.querySelector('#card-password')

let arrayInput = [matriculeInput, nameInput, lastNameInput]
let arrayInput1 = [levelInput,filiereInput,statutInput,sexeInput]

// tableaux intervenant dans la logique
let valueMatriculeArray = []
let valueNameArray = []
let valueLastNamehArray = []
let valuePasswordConfArray = []
let valuePasswordArray = []

const arrays = [valueMatriculeArray,valueNameArray,
  valueLastNamehArray]


function fulling(keyEntered, tabCalled){
  // console.log('ok')
  tabCalled.push(keyEntered)
}
function backSpace(tabCalled){
  tabCalled.pop()
}

function disabledInput(inputArea){
  inputArea.disabled=true
  setTimeout(inputArea.disabled=false, 500)
}

function DatasOnScreen(InputedArrayValue, targetCible){
  console.log("ok2")
  let etat = ""
  for (let i=0; i<=(InputedArrayValue.length)-1; i++){
    etat =etat + InputedArrayValue[i]
    console.log(etat)
  }
  targetCible.textContent=etat
}

let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

signInBtn.addEventListener('click', ()=>{
  arrayInput.map((item)=>{
    if(item.value== ""){
      item.style.background='pink'
      item.setAttribute('placeholder', 'champ obligatoire')
    }
  })
  if(passwordInput.value== ""){
    passwordInput.style.background='pink'
  }
  if(passwordConfInput.value== ""){
    passwordConfInput.style.background='pink'
  }else
  if(passwordInput.value != passwordConfInput.value){
    passwordConfInput.style.border='2px solid pink'
    passwordConfInput.value = ''
    passwordConfInput.placeholder = 'mot de passe érroné'
  }
  if(emailInput.value== ""){
    emailInput.style.background='pink'
    emailInput.setAttribute('placeholder', 'champ obligatoire')
  }else
  if(!(emailInput.value.match(mailFormat))){
    console.log('ok5')
    // alert('ceci n\'est pas un e-mail')
    emailInput.style.border='2px solid pink'
    emailInput.value = ''
    emailInput.setAttribute('placeholder', 'ceci n\'est pas un e-mail')
  }

  
})

arrayInput[0].addEventListener('keydown', (event)=>{
  // console.log('ok')
  let key = event.key
  console.log(key)
  if(key=="Backspace"){
    backSpace(arrays[0])
    DatasOnScreen(arrays[0], arrayItem[0])
  }else
  if ((/^[a-zA-Z]$/.test(key)) || key== ' '){
    fulling(key, valueMatriculeArray)
    DatasOnScreen(arrays[0], arrayItem[0])
  }
})

arrayInput[1].addEventListener('keydown', (event)=>{
  // console.log('ok')
  let key = event.key
  console.log(key)
  if(key=="Backspace"){
    backSpace(arrays[1])
    DatasOnScreen(arrays[1], arrayItem[1])
  }else
  if ((/^[a-zA-Z]$/.test(key)) || key== ' '){
    fulling(key, arrays[1])
    DatasOnScreen(arrays[1], arrayItem[1])
  }
})

arrayInput[2].addEventListener('keydown', (event)=>{
  // console.log('ok')
  let key = event.key
  console.log(key)
  if(key=="Backspace"){
    backSpace(arrays[2])
    DatasOnScreen(arrays[2], arrayItem[2])
  }else
  if ((/^[a-zA-Z]$/.test(key)) || key== ' '){
    fulling(key, arrays[2])
    DatasOnScreen(arrays[2], arrayItem[2])
  }
})

arrayInput1.map((item, index)=>{
  item.addEventListener('click', ()=>{
    arrayItem1[index].textContent=item.value
  })
})