import {homeDisplay} from './homeDisplay.js'
import { createAccountDisplay } from './createAccount.js';
import { setLoggedIn } from './userAuth.js';
import { userInfo } from './lookUp.js';
import { createInput, appendMultipleChildrens } from './helperFunctions.js';
import { login } from './lookUp.js';

const users = userInfo

export const logInDisplay = () => {

    const body = document.querySelector('body');
    const loginModal = document.createElement("div");
    loginModal.setAttribute("id", "login-modal-bg");
    
    body.appendChild(loginModal);
    
    const loginForm = document.createElement("form");
    loginForm.setAttribute("method", "post");
    loginForm.setAttribute("id", "login-form");
    
    loginModal.appendChild(loginForm);

    const closeButtonContainer = document.createElement( 'div' );
    closeButtonContainer.setAttribute('id', 'close-button-container')
    
    const logInTitle = document.createElement('h2')
    logInTitle.textContent = 'Log In'
    logInTitle.setAttribute('id', 'log-in-title')

    const closeButton = document.createElement('button')
    closeButton.setAttribute('id', 'form-close-button')
    closeButton.innerHTML = '<span class="material-symbols-outlined">cancel</span>'

    closeButton.addEventListener('click', ()=>{
      loginModal.remove()
      homeDisplay()
    })

    closeButtonContainer.append(logInTitle, closeButton)
    /*-----------------INPUTS-------------------*/

    const emailLabel = document.createElement('div')
    emailLabel.setAttribute('id', 'email-label')
    emailLabel.textContent = 'ingrese su correo electronico'

    const passwordLabel = document.createElement('div')
    passwordLabel.setAttribute('id', 'password-label')
    passwordLabel.textContent = 'ingrese su contraseña'


    const emailInput = createInput('email', 'email', 'Email...')
    emailInput.classList.add('input-correct')

    const passwordInput = createInput('password', 'password', 'Contraseña')
    passwordInput.classList.add('input-correct')

    const logInButtonsContainer = document.createElement('div')
    logInButtonsContainer.setAttribute('id', 'log-in-buttons-container')
    
    const loginButton = document.createElement("button");
    loginButton.setAttribute("id", "login-button");
    loginButton.setAttribute("type", "submit");
    loginButton.setAttribute("value", "login");
    loginButton.innerHTML = '<span class="material-symbols-outlined">login</span> Acceder';
    
    const createAccountButton = document.createElement("button");
    createAccountButton.setAttribute("id","create-account-button");
    createAccountButton.innerHTML = '<span class="material-symbols-outlined">person_add</span> Crear cuenta';

    logInButtonsContainer.append(loginButton, createAccountButton)

    createAccountButton.addEventListener('click', ()=>{
      loginModal.remove()
      createAccountDisplay()
    })
    
    appendMultipleChildrens(loginForm, 
      [
        closeButtonContainer, 
        emailLabel, 
        emailInput, 
        passwordLabel, 
        passwordInput, 
        logInButtonsContainer
      ])

    /*-----------------API FUNCTIONS-------------------*/

    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const formData = new FormData(loginForm);
      const email = formData.get("email");
      const password = formData.get("password");
      
      try {
          const response = await fetch(login, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });
  
          const result = await response.json();
  
          if (response.ok) {
              const { token, user } = result;

              // Save the token in localStorage or sessionStorage
              localStorage.setItem('token', token);
              
              // Set the user as logged in
              setLoggedIn(true, user.role, user.user_id);
              
              loginModal.remove();
              homeDisplay();
          } else {
              console.log('Authentication failed:', result.message);
              window.alert('El usuario o contraseña son incorrectos');
          }
      } catch (error) {
          console.error('Error:', error);
          window.alert('Error al iniciar sesión. Inténtalo de nuevo más tarde.');
      }
  });
    
    // loginForm.addEventListener("submit", async (event) => {
    //   event.preventDefault();
    
    //   const formData = new FormData(loginForm);
    
    //   const email = formData.get("email");
    //   const password = formData.get("password");
    
  
    
    //   const user = users.find(user => user.email === email);
    
    //   if (user) {
    //     if (user.password === password){
         
   
    //       setLoggedIn(true, user.role, user.user_id)
          
    //       loginModal.remove()
    //       homeDisplay()
    //     } else {
    //       console.log('failed')
    //     }
    //   } else {
    //     console.log('user not found ')
    //     emailInput.classList.toggle('input-error')
        
    //     passwordInput.classList.toggle('input-error')
    //     window.alert('El usuario o contraseña son  incorrectos')
    //   }
    // });
    
    }