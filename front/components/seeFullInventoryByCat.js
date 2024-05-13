import { cartArray, favBooks } from "../assets/arrays.js";
import { homeDisplay } from "./homeDisplay.js";
import { getLoggedIn, getUserId } from "../assets/userAuth.js";
import { appendMultipleChildrens, addFavoriteBook } from "../assets/helperFunctions.js";

export const seeFullInventoryByCat = (category, books) =>{
    const displayDiv = document.querySelector('#display-div')
    const fetchCatInventory = (category, books) => {

      const user_id = getUserId()
    
      const log = getLoggedIn()
  
      // const spacer = document.createElement('div')
       const catInventoryContainer = document.createElement('div')
      // spacer.setAttribute('id', 'cat-spacer')
      const backButtonContainer = document.createElement('div')
      backButtonContainer.setAttribute('id', 'cat-back-button-container')
  
      const backButton =  document.createElement('button')
      backButton.setAttribute('id', 'cat-back-button')
      backButton.textContent = 'volver'
  
      backButton.onclick = () =>{
        displayDiv.innerHTML = ''
        homeDisplay();
      } 
  
      backButtonContainer.appendChild(backButton)
  
  
  
      catInventoryContainer.setAttribute('id','cat-inventory-container')
      
      appendMultipleChildrens(displayDiv,[catInventoryContainer, backButtonContainer])
  
      const filteredBooks = books.filter(book => book.category === category);
      filteredBooks.forEach(book=>{
        console.log(book)
        const inventoryItemRow = document.createElement('div')
        inventoryItemRow.classList.add('inventory-item-row')
        inventoryItemRow.setAttribute('id', `${book.title}` )
  
        const inventoryItemContainer = document.createElement('div')
        inventoryItemContainer.classList.add('inventory-item-container')
  
  
        const inventoryItemImage = document.createElement('img')
        inventoryItemImage.setAttribute('src', `${book.cover}`)
        inventoryItemImage.setAttribute('alt', `${book.title}`)
        inventoryItemImage.setAttribute('class', 'inventory-item-image')
        
  
      
  
        const inventoryItemTitleAuthorContainer = document.createElement('div')
        inventoryItemTitleAuthorContainer.classList.add('inventory-item-title-author-container')
  
        const inventoryItemTitle = document.createElement('h3')
        inventoryItemTitle.textContent= book.title
  
        const inventoryItemAuthor = document.createElement('h3')
        inventoryItemAuthor.textContent= book.author

        appendMultipleChildrens(inventoryItemTitleAuthorContainer, [inventoryItemTitle, inventoryItemAuthor]) 
  
        const inventoryItemQuantityPriceContainer = document.createElement('div')
        inventoryItemQuantityPriceContainer.classList.add('inventory-item-quantity-price-container')
  
        const inventoryItemQuantity = document.createElement('h3')
        inventoryItemQuantity.textContent= 'Unidades en stock: ' + book.quantity
  
        const inventoryItemPrice = document.createElement('h3')
        inventoryItemPrice.textContent = 'Precio unitario: ' + '$'+book.price

        appendMultipleChildrens(inventoryItemQuantityPriceContainer, [inventoryItemQuantity, inventoryItemPrice])
  
        const inventoryItemButtonsContainer = document.createElement('div')
        inventoryItemButtonsContainer.classList.add('inventory-item-buttons-container')
  
        const addToCartButton = document.createElement('button')
        addToCartButton.classList.add('add-to-cart-button')
        addToCartButton.textContent = 'Comprar'
        addToCartButton.onclick = () => {
          const currentQuantity = parseInt(quantityInput.value)
          const bookWithQuantity = {...book, currentQuantity}
          cartArray.push(bookWithQuantity);
        }

        const quantityInput = document.createElement('input')
        quantityInput.setAttribute('type', 'number')
        quantityInput.setAttribute('min', '1')
        quantityInput.setAttribute('max', `${book.quantity}`)
        quantityInput.classList.add('quantity-input')
        
        const addToFavsButton = document.createElement('button')
        addToFavsButton.classList.add('add-to-favs-button')
        addToFavsButton.textContent = 'Favoritos'
        addToFavsButton.onclick = () => {
          if(log){
            addFavoriteBook(user_id, book.book_id)
          } else {
            window.alert('Debe estar loggeado para realizar esta acción')
          }
        }

        appendMultipleChildrens(inventoryItemButtonsContainer, [addToCartButton, quantityInput, addToFavsButton])

        const infoDivs = document.createElement('div')
        infoDivs.classList.add('item-row-info-div')

        appendMultipleChildrens(infoDivs,[
          inventoryItemTitleAuthorContainer,
          inventoryItemQuantityPriceContainer,
          inventoryItemButtonsContainer
        ])

        appendMultipleChildrens(inventoryItemContainer, [
          inventoryItemImage,
          infoDivs
        ])
  
        inventoryItemRow.appendChild(inventoryItemContainer)
  
        catInventoryContainer.appendChild(inventoryItemRow)
      })
    }
    try{
      fetchCatInventory(category,books)
    } catch(e){
      console.log('there was an error fetching inventory', e)
    }
  }