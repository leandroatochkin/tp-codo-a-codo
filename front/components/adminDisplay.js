import { userInfo, displayBooks } from "../assets/lookUp.js";

export const adminDisplay = () => {
    const displayDiv = document.querySelector('#display-div')

    /*------------TABLE CONTAINER-----------*/

    const tableContainer = document.createElement('div');
    tableContainer.setAttribute("id", "table-container");

    const booksTable = document.createElement('table'); // Renamed to booksTable
    booksTable.classList.add('book-table');

    // Create table header row
    const booksHeaderRow = document.createElement('tr');
    const booksHeaders = ['ID', 'Title', 'Author', 'Cover', 'Price', 'Category', 'Quantity']; // Adjust as per your book data structure
    booksHeaders.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        booksHeaderRow.appendChild(th);
    });
    booksTable.appendChild(booksHeaderRow);

    // Create table rows for each book
    displayBooks.forEach(book => {
        const row = document.createElement('tr');
        const bookData = [book.id, book.title, book.author, book.cover, book.price, book.category, book.quantity]; // Adjust as per your book data structure
        bookData.forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            cell.classList.add('table-cell')
            row.appendChild(cell);
        });
        booksTable.appendChild(row);
    });

    

    /*----------------ADD BOOK FORM-----------------*/

    const addBookForm = document.createElement('form')
    addBookForm.classList.add('book-form-hidden');
    addBookForm.setAttribute('method', 'post')

    const titleInput = document.createElement('input')
    titleInput.classList.add('add-book-form-input')
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Título del libro")

    const authorInput = document.createElement('input')
    authorInput.classList.add('add-book-form-input')
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("placeholder", "Autor")

    const coverInput = document.createElement('input')
    coverInput.classList.add('add-book-form-input')
    coverInput.setAttribute("type", "text");
    coverInput.setAttribute("name", "cover");
    coverInput.setAttribute("placeholder", "Ruta a la imagen")

    const priceInput = document.createElement('input')
    priceInput.classList.add('add-book-form-input')
    priceInput.setAttribute("type", "text");
    priceInput.setAttribute("name", "price");
    priceInput.setAttribute("placeholder", "Precio")

    const categoryInput = document.createElement('input')
    categoryInput.classList.add('add-book-form-input')
    categoryInput.setAttribute("type", "text");
    categoryInput.setAttribute("name", "category");
    categoryInput.setAttribute("placeholder", "Categoría")

    const quantityInput = document.createElement('input')
    quantityInput.classList.add('add-book-form-input')
    quantityInput.setAttribute("type", "text");
    quantityInput.setAttribute("name", "quantity");
    quantityInput.setAttribute("placeholder", "Cantidad")

    const formButtonSubmit = document.createElement("input");
    formButtonSubmit.setAttribute("type", "submit");
    formButtonSubmit.setAttribute("value", "añadir");

    addBookForm.appendChild(titleInput)
    addBookForm.appendChild(authorInput)
    addBookForm.appendChild(coverInput)
    addBookForm.appendChild(priceInput)
    addBookForm.appendChild(categoryInput)
    addBookForm.appendChild(quantityInput)
    addBookForm.appendChild(formButtonSubmit)

    /*-----------BUTTON----------------*/

    const addBookButton = document.createElement('button')
    addBookButton.textContent = 'AGREGAR NUEVO LIBRO'

    addBookButton.onclick=()=>{
        addBookForm.classList.toggle('book-form-show')
    }

    // Append table to displayDiv
    displayDiv.appendChild(tableContainer)
    tableContainer.appendChild(booksTable);
    displayDiv.appendChild(addBookButton)
    displayDiv.appendChild(addBookForm)

    
};
