import { homeDisplay } from "./homeDisplay.js";
import { userInfo } from "./lookUp.js";
import { createInput, appendMultipleChildrens } from "./helperFunctions.js";
import { addUser } from "./addUser.js";


const users = userInfo




export const createAccountDisplay = () =>{

    const body = document.querySelector("body");

const loginModal = document.createElement("div");
loginModal.setAttribute("id", "login-modal-bg");

body.appendChild(loginModal);

const loginForm = document.createElement("form");
loginForm.setAttribute("method", "post");
loginForm.setAttribute("id", "create-account-form");

loginModal.appendChild(loginForm);

const closeButtonContainer = document.createElement("div");
closeButtonContainer.setAttribute('id', 'create-account-form-close-button-container')

const createAccountTitle = document.createElement('h2')
createAccountTitle.textContent = 'Crear cuenta'

const closeButton = document.createElement("button");
closeButton.setAttribute("id", "create-acc-form-close-button");
closeButton.innerHTML =  '<span class="material-symbols-outlined">cancel</span>';

closeButton.addEventListener('click', ()=>{
    loginModal.remove()
    homeDisplay()
})

closeButtonContainer.append(createAccountTitle, closeButton)

/*-----------------INPUTS-------------------*/

const emailInput = createInput('email', 'email', 'Ingrese su correo electrónico...', true)

const emailLabel = document.createElement("div");
emailLabel.textContent = "e-mail";

const  passwordInput = createInput('password','password', 'Contraseña: ', true)

const passwordLabel = document.createElement("div");
passwordLabel.textContent = "contraseña (Al menos 8 caracteres, una mayúscula y un número.)";

const repeatPasswordInput = createInput('password', 'repeat-password', 'Repita su contraseña...', true)

const userNameInput = createInput('text', 'username', 'Ingrese su nombre de usuario...', true)

const usernameLabel = document.createElement("div");
usernameLabel.textContent = "nombre de usuario";

const addressInput = createInput('text', 'address', 'Ingrese su dirección...', true)

const addressLabel = document.createElement("div");
addressLabel.textContent = "Dirección para envíos";

const createAccButtonContainer = document.createElement('div')
createAccButtonContainer.style.display = 'flex'
createAccButtonContainer.style.justifyContent = 'center'
createAccButtonContainer.classList.add('create-account-button-container')

const createAccButton = document.createElement("button");
createAccButton.setAttribute("type", "submit");
createAccButton.setAttribute("value", "crear");
createAccButton.setAttribute("id", "create-account-button-form");
createAccButton.innerHTML = '<span class="material-symbols-outlined">person_add</span> Crear cuenta'

createAccButtonContainer.append(createAccButton)

appendMultipleChildrens(loginForm, [
  closeButtonContainer,
  usernameLabel,
  userNameInput,
  emailLabel,
  emailInput,
  passwordLabel,
  passwordInput,
  repeatPasswordInput,
  addressLabel,
  addressInput,
  createAccButtonContainer
])

/*-----------------API FUNCTIONS-------------------*/

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  

  const formData = new FormData(loginForm);

  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");
  const address = formData.get("address");
  const role = 'user'

  


  const userExists = users.some(user => user.username === username)
  const emailExists = users.some(user => user.email === email)


  const isPasswordOk = () =>{
    const regex = /^(?=.*[A-Z])(?=.*\d).+/
    if (passwordInput.value.length < 8){
      window.alert('La contraseña debe tener al menos 8 caracteres.')
    } else {
      if (passwordInput.value != repeatPasswordInput.value){
        window.alert('Las contraseñas no coinciden.')
      } else {
        if (regex.test(password) && passwordInput.value == repeatPasswordInput.value) {
          return true
        } else if(!regex.test(password)){
          window.alert('Su contraseña debe tener al menos una mayúscula y al menos un número.')
        } 
      }
    }
 
    return false  
}

  const isUsernameOk = () => {
    const regex = /^[a-zA-Z0-9]+$/
    if(userNameInput.value.length < 6){
      window.alert('El nombre de usuario debe contener  al menos 6 caracteres.');
    } else {
      if (regex.test(username)){
        return true;
      } else {
        window.alert('El nombre de usuario solo puede contener letras y números.')
      }
    }
    return false 
  }


if(userExists){
    userNameInput.classList.add('input-error')
    window.alert('Nombre de usuario no disponible')
}
if(emailExists){
  emailInput.classList.add('input-error')
  window.alert('Ya existe una cuenta con este email')
}
if(!userExists && !emailExists && isPasswordOk() && isUsernameOk()){
addUser(username, email, password, address, role)
}
  
  
  
});
}