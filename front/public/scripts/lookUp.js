import { getLoggedIn, getUserId } from "./userAuth.js";



const userdb = 'https://tp-codo-a-codo.onrender.com/api/users'
const booksdb = 'https://tp-codo-a-codo.onrender.com/api/books'
const ordersdb = 'https://tp-codo-a-codo.onrender.com/api/orders'
const orderItemsDb = 'https://tp-codo-a-codo.onrender.com/api/order_items'
const favoritesdb = 'https://tp-codo-a-codo.onrender.com/api/favorites'
const searchdb = 'https://tp-codo-a-codo.onrender.com/api/search'
const login = 'https://tp-codo-a-codo.onrender.com/api/login'


const fetchData = async () => {
  try {
    const response = await fetch(booksdb);
    if (!response.ok) { 
      throw new Error('Failed to fetch data');
    }
    const data = await response.json(); 
    return data
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

const displayBooksData = async () => {
  try {
    const books = await fetchData(); 
    return books; 
  } catch (error) {
    console.error('Error using fetched data:', error);
  }
};

const fetchFavsData = async () => {
  try {
    const response = await fetch(favoritesdb);
    if (!response.ok) { 
      throw new Error('Failed to fetch favs');
    }
    const data = await response.json(); 
    return data
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

const displayFavsData = async () => {
  try {
    const favs = await fetchFavsData(); 
    return favs; 
  } catch (error) {
    console.error('Error using fetched data:', error);
  }
};

const fetchUsers = async () => {
  try {
    const response = await fetch(userdb);
    if (!response.ok) { 
      throw new Error('Failed to fetch users');
    }
    const users = await response.json(); 
    return users
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

const displayUsersData = async () => {
  try {
    const userData = await fetchUsers(); 
    return userData; 
  } catch (error) {
    console.error('Error using fetched data:', error);  
  }
};



const displayBooks = await displayBooksData()
const userInfo = await  displayUsersData()
const favoriteItems = await displayFavsData()



const userId = getUserId()

const favBooks = []






export {displayBooks, userInfo, userdb, booksdb, ordersdb, favoritesdb, favoriteItems, searchdb, login, orderItemsDb}