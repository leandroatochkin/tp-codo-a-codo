const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/books');
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

const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
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

let displayBooks = await displayBooksData()
let userInfo = await  displayUsersData()
const userdb = 'http://localhost:3000/users'
const booksdb = 'http://localhost:3000/books'
const ordersdb = 'http://localhost:3000/orders'

export {displayBooks, userInfo, userdb, booksdb, ordersdb}