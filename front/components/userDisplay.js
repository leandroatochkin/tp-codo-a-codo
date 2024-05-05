import { getLoggedIn,getUserId, getUserRole } from "../assets/userAuth.js";
import { userdb, userInfo, ordersdb } from "../assets/lookUp.js";
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
addressInfo.textContent = `Tu dirección actual es: ${currentUser.address}`

const modifyInfo = document.createElement('button')
modifyInfo.setAttribute('id', 'modify-info-btn')
modifyInfo.textContent = 'actualizar'

const ordersContainer = document.createElement('div')

appendMultipleChildrens(userInfoContainer, [
    title,
    emailInfo,
    addressInfo,
    modifyInfo,
    ordersContainer
])




const getCurrentUserOrders = async () => {
        try{
            const response = await fetch(`${ordersdb}/${userID}`);
    
            if (!response.ok) { 
                throw new Error('Failed to fetch orders');
            }
            const data = await response.json(); 
            console.log(data )
            return data
        } catch(e){
            console.log('Error fetching user:', e);
        }
    }



const userOrders = await getCurrentUserOrders()

userOrders.forEach(order => {
    const orderLine = document.createElement('div')
    orderLine.classList.add("order-line")
    orderLine.textContent = `${order.order_date.toLocaleString()}: ID: ${order.order_id} Producto: ${order.title} Cantidad: ${order.quantity}`
    ordersContainer.appendChild(orderLine)
})



displayDiv.appendChild(userInfoContainer)

}


