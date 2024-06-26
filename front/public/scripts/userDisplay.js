import { getUserId, setLoggedIn } from "./userAuth.js";
import { userdb, ordersdb, orderItemsDb} from "./lookUp.js";
import {  appendMultipleChildrens, initLoadingAnimation,closeLoadingAnimation } from "./helperFunctions.js";
import { homeDisplay } from "./homeDisplay.js";



export const userDisplay = async () =>{
    initLoadingAnimation()
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
    
const editButton = document.createElement('button')
editButton.innerHTML = '<span class="material-symbols-outlined">border_color</span>'
editButton.classList.add('edit-button')

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






const logOut = document.createElement('button')
logOut.setAttribute('class', 'logout-btn')
logOut.textContent = 'Cerrar sesión'
logOut.onclick = () => {
    setLoggedIn(false, null, null)
    homeDisplay()
}

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('profile-buttons-container')

appendMultipleChildrens(buttonsContainer, [
    logOut
])

const userOrdersTitle = document. createElement('h3')
userOrdersTitle.textContent = 'Compras realizadas'
const ordersContainer = document.createElement('div')
ordersContainer.setAttribute('id','orders-container')

const userUpperSection = document.createElement('div')
userUpperSection.classList.add('user-upper-section')

const userInfo = document.createElement('div')

appendMultipleChildrens(userInfo, [
    title,
    emailInfo,
    addressInfo

])



const animationContainer = document.createElement('div')
animationContainer.classList.add('animatiorn-container')

const animation = document.createElement('img')
animation.setAttribute('style', 'background-image: url(front/assets/animations/girl-reading.gif)')
animation.classList.add('profile-animation')

animationContainer.appendChild(animation)

const anotherContainer = document.createElement('div')  
anotherContainer.classList.add('profile-another-container')
appendMultipleChildrens(anotherContainer,[
    userInfo,
    buttonsContainer,
    userOrdersTitle
])

appendMultipleChildrens(userUpperSection, [
    anotherContainer,
    animationContainer
])


appendMultipleChildrens(userInfoContainer, [
    userUpperSection,
    ordersContainer
])




const getCurrentUserOrders = async () => {
        try{
            const response = await fetch(`${orderItemsDb}/${userID}`);
    
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
    const orderDate = document.createElement('p')
    orderDate.textContent = `${order.order_date.slice(0,10)}`
    orderDate.classList.add('order-column-narrow')
    const orderId = document.createElement('p')
    orderId.textContent = `ID: ${order.order_id}`
    orderId.classList.add('order-column-narrow')
    const orderProduct = document.createElement('p')
    orderProduct.textContent = `Producto: ${order.title}`
    orderProduct.classList.add('order-column-wide')
    const orderQuantity = document.createElement('p')
    orderQuantity.textContent = `Cantidad: ${order.quantity} unidades.`
    orderQuantity.classList.add('order-column-wide')
    appendMultipleChildrens(orderLine, [
        orderDate,
        orderId,
        orderProduct,
        orderQuantity
    ])
    // orderLine.textContent = `${order.order_date.slice(0,10)} => ID: ${order.order_id} Producto: ${order.title} Cantidad: ${order.quantity}`
    ordersContainer.appendChild(orderLine)
})



displayDiv.appendChild(userInfoContainer)
closeLoadingAnimation()
}


