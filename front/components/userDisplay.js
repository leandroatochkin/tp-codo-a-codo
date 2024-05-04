import { getLoggedIn,getUserId, getUserRole } from "../assets/userAuth.js";
import { userdb, userInfo } from "../assets/lookUp.js";
import { createInput, appendMultipleChildrens } from "../assets/helperFunctions.js";

export const userDisplay = async () =>{
    
    const userID = getUserId()

    const getCurrentUser = async () => {
        try{
            const response = await fetch(`${userdb}/${userID}`);
            if (!response.ok) { 
                throw new Error('Failed to fetch user');
              }
              const data = await response.json(); 
              return data
        } catch(e){
            console.log('Error fetching user:', e);
        }
       
        
    }

    const currentUser = await getCurrentUser()


const displayDiv = document.querySelector('#display-div')

const userInfoContainer = document.createElement('div')
userInfoContainer.setAttribute('id', 'user-info-container')

const title = document.createElement('h2')
title.setAttribute('id',  'user-profile-title')
title.textContent = `Hola ${currentUser.username}!, este es tu espacio personal.`

const emailInfo = document.createElement('p')
emailInfo.classList.add('info-text')
emailInfo.textContent = `Tu correo actual es: ${currentUser.email}`

const addressInfo = document.createElement('p')
addressInfo.classList.add('info-text')
addressInfo.textContent = `Tu correo actual es: ${currentUser.email}`

const modifyInfo = document.createElement('button')
modifyInfo.setAttribute('id', 'modify-info-btn')
modifyInfo.textContent = 'actualizar'

appendMultipleChildrens(userInfoContainer, [
    title,
    emailInfo,
    addressInfo,
    modifyInfo
])

displayDiv.appendChild(userInfoContainer)

}


