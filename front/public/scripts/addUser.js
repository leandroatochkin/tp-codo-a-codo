import { userdb } from "./lookUp.js";
 
const userDataBase = userdb

export function addUser(username, email, password, address, role) {
    // Define the data to be sent in the request body
    const userData = {
      username: username,
      email: email,
      password: password,
      address: address,
      role: role
    };

  
  
    fetch(userDataBase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify(userData) // Convert the data to JSON format
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      return response.json(); // Parse the response JSON
    })
    .then(data => {
      console.log('User added successfully:', data);
    })
    .catch(error => {
      console.error('Error adding user:', error.message);
    });
  }