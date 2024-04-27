import { displayBooks, booksdb } from "../assets/lookUp.js";
import  { createInput } from "../assets/helperFunctions.js";



export const adminDisplay = () => {
    const displayDiv = document.querySelector('#display-div');
    

    /*------------TABLE CONTAINER-----------*/
    const tableContainer = document.createElement('div');
    tableContainer.setAttribute("id", "table-container");

    const booksTable = document.createElement('table');
    booksTable.classList.add('book-table');

    // Function to render the books table with provided book data
    function renderBooksTable(booksData) {
        // Clear existing table content
        booksTable.innerHTML = '';

       
        const booksHeaderRow = document.createElement('tr');
        const booksHeaders = ['ID', 'Title', 'Author', 'Cover', 'Price', 'Category', 'Quantity']; 
        booksHeaders.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            booksHeaderRow.appendChild(th);
        });
        booksTable.appendChild(booksHeaderRow);

        // Create table rows for each book
        booksData.forEach(book => {
            const row = document.createElement('tr');
            const bookData = [book.id, book.title, book.author, book.cover, book.price, book.category, book.quantity]; // Adjust as per your book data structure
            bookData.forEach(cellData => {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                cell.classList.add('table-cell');
                row.appendChild(cell);
                
            });
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.onclick = (e) => {
                const confirmation = window.prompt('Esta acción no se puede deshacer. Escriba - ok - para continuar.')
                if(confirmation === 'ok'){
                    deleteBook(book.id)
                } 
            }
            const updateBtn = document.createElement('button');
            updateBtn.textContent = 'Modificar'
            row.appendChild(deleteBtn);
            row.appendChild(updateBtn);
            booksTable.appendChild(row);
        });
    }

    // Render initial table with displayBooks
    renderBooksTable(displayBooks);

    /*----------------ADD BOOK FORM-----------------*/
    const addBookForm = document.createElement('form');
    addBookForm.classList.add('book-form-hidden');
    addBookForm.setAttribute('method', 'post');
    

    /*----------------INPUTS-------------*/

    

    const titleInput = createInput('text', 'title',  'Titulo')
    const authorInput = createInput('text', 'author',  'Autor')
    const coverInput = createInput('text', 'cover',  'Ruta de la imagen')
    const priceInput = createInput('text', 'price',  'Precio')
    const categoryInput = createInput('text', 'category',  'Categoria')
    const quantityInput = createInput('text', 'quantity',  'Cantidad en Stock')
    

    const formButtonSubmit = document.createElement("input");
    formButtonSubmit.setAttribute("type", "submit");
    formButtonSubmit.setAttribute("value", "añadir");

    addBookForm.appendChild(titleInput);
    addBookForm.appendChild(authorInput);
    addBookForm.appendChild(coverInput);
    addBookForm.appendChild(priceInput);
    addBookForm.appendChild(categoryInput);
    addBookForm.appendChild(quantityInput);
    addBookForm.appendChild(formButtonSubmit);

    /*-----------BUTTON----------------*/
    const addBookButton = document.createElement('button');
    addBookButton.textContent = 'AGREGAR NUEVO LIBRO';

    addBookButton.onclick = () => {
        addBookForm.classList.toggle('book-form-show');
    };

    displayDiv.appendChild(tableContainer);
    tableContainer.appendChild(booksTable);
    displayDiv.appendChild(addBookButton);
    displayDiv.appendChild(addBookForm);

    /*-----------------FUNCTIONS-------------------*/
    addBookForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(addBookForm);
        const title = formData.get('title');
        const author = formData.get('author');
        const cover = formData.get('cover');
        const price = formData.get('price');
        const category = formData.get('category');
        const quantity = formData.get('quantity');

        // Function to push a new book to the database
        function addBook(title, author, cover, price, category, quantity) {
            const bookData = {
                title: title,
                author: author,
                cover: cover,
                price: price,
                category: category,
                quantity: quantity
            };

            fetch(booksdb, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
                body: JSON.stringify(bookData) // Convert the data to JSON format
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add book');
                }
                return response.json(); // Parse the response JSON
            })
            .then(data => {
                console.log('Book added successfully:', data);
                // After successfully adding a book, fetch updated book data
                fetchBooksData();
            })
            .catch(error => {
                console.error('Error adding book:', error.message);
                // Handle error if needed
            });
        }

        // Call function to add book
        addBook(title, author, cover, price, category, quantity);
    });

    // Function to fetch updated book data and refresh the table
    async function fetchBooksData() {
        try {
            const response = await fetch(booksdb); 
            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }
            const updatedBooksData = await response.json();
            // Render updated table with new book data
            renderBooksTable(updatedBooksData);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    async function deleteBook(bookId) {
        try {
            const response = await fetch(`${booksdb}/${bookId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete book');
            }
            console.log('Book deleted successfully');
            // After successfully deleting the book, fetch updated book data and refresh the table
            fetchBooksData();
        } catch (error) {
            console.error('Error deleting book:', error);
            // Handle error if needed
        }
    }
};
    