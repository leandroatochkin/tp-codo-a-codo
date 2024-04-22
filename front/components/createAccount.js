import { homeDisplay } from "./homeDisplay.js";
import { User } from "../assets/userModel.js";
import { users } from "../assets/arrays.js";

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

const closeButton = document.createElement("button");
closeButton.setAttribute("id", "create-acc-form-close-button");
closeButton.textContent = "X";

closeButton.addEventListener('click', ()=>{
    loginModal.remove()
    homeDisplay()
})

closeButtonContainer.appendChild(closeButton)

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("placeholder", "Ingrese su correo electrónico...");
emailInput.setAttribute('required', 'true')

const emailLabel = document.createElement("div");
emailLabel.textContent = "e-mail";

const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("name", "password");
passwordInput.setAttribute("placeholder", "Ingrese su contraseña...");
passwordInput.setAttribute('required', 'true');

const passwordLabel = document.createElement("div");
passwordLabel.textContent = "contraseña";

const repeatPasswordInput = document.createElement("input");
repeatPasswordInput.setAttribute("type", "password");
repeatPasswordInput.setAttribute("name", "repeat-password");
repeatPasswordInput.setAttribute("placeholder", "Repita su contraseña...");
repeatPasswordInput.setAttribute('required', 'true')

const userNameInput = document.createElement("input");
userNameInput.setAttribute("type", "text");
userNameInput.setAttribute("name", "username");
userNameInput.setAttribute("placeholder", "Ingrese su nombre de usuario...");
userNameInput.setAttribute('required', true)

const usernameLabel = document.createElement("div");
usernameLabel.textContent = "Nombre de usuario";

const addressInput = document.createElement("input");
addressInput.setAttribute("type", "text");
addressInput.setAttribute("name", "address");
addressInput.setAttribute("placeholder", "Ingrese su dirección...");

const addressLabel = document.createElement("div");
addressLabel.textContent = "Dirección para envíos";

const createAccButton = document.createElement("input");
createAccButton.setAttribute("type", "submit");
createAccButton.setAttribute("value", "crear");

loginForm.appendChild(closeButtonContainer);
loginForm.appendChild(usernameLabel);
loginForm.appendChild(userNameInput);
loginForm.appendChild(emailLabel);
loginForm.appendChild(emailInput);
loginForm.appendChild(passwordLabel);
loginForm.appendChild(passwordInput);
loginForm.appendChild(repeatPasswordInput);
loginForm.appendChild(addressLabel);
loginForm.appendChild(addressInput);
loginForm.appendChild(createAccButton);

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);

  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");
  const address = formData.get("address");

  console.log(email, password, username, address);

  const userExists = users.some(user => user.email === email || user.username === username);//checks for existing users
if(userExists){
    console.error('user taken')
}
else{
    users.push(new User(username, email, password, address));
}
  
  
  console.log(users)
  //const isValid = validateLoginForm(formData);

  //if (isValid) {
  //    await submitLoginForm(formData);
  //} else {
  //    alert('Please fill in all fields.');
  //}
});
}