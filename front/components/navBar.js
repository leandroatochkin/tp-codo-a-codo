import { logInDisplay } from "./logInDisplay.js";
import { shoppingCartDisplay } from "./shoppingCartDisplay.js";
import { categoriesDisplay } from "./categoriesDisplay.js";
import { displayBooks, favoriteItems, searchdb } from "../assets/lookUp.js";
import { wishlistDisplay } from "./wishlistDisplay.js";
import { homeDisplay } from "./homeDisplay.js";
import { adminDisplay } from "./adminDisplay.js";
import { userDisplay } from "./userDisplay.js";
import { cartArray } from "../assets/arrays.js";
import { addFavoriteBook } from "../assets/helperFunctions.js";

const books = displayBooks


const CATEGORIES = ['ficción', 'historia', 'recetas', 'cómics'];
let PAGE_TITLE = 'AUREA';

export const navBar = (logged, role, userID) => {
    const displayDiv = document.querySelector('#display-div');
    const menuCategories = CATEGORIES;
    const navbarContainer = document.querySelector(`#navbar-container`);
    const navbar = document.createElement("nav");
    navbarContainer.appendChild(navbar);
    navbar.setAttribute("id", "navbar");
    navbar.classList.add('hidden');

    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('id', 'page-title');
    navbar.appendChild(titleContainer);

    const title = document.createElement('div');
    title.textContent = PAGE_TITLE;
    title.setAttribute('id', 'primary-title');
    titleContainer.appendChild(title);

    title.onclick = () => {
        displayDiv.innerHTML = '';
        homeDisplay();
    };

    const toggleMenuButton = document.createElement("button");

    const searchBar = document.createElement('input');
    searchBar.setAttribute('id', 'navbar-input');
    searchBar.setAttribute('type', 'text');
    searchBar.setAttribute('placeholder', 'buscar libros...');

    const searchDropDown = document.createElement('div');
    searchDropDown.setAttribute('id', 'search-dropdown');
    searchDropDown.classList.add('search-dropdown-hidden');
    navbar.appendChild(searchDropDown);

    const createSearchItemModal = async (book) => {
        const body = document.querySelector('body');

        const modal = document.createElement('div');
        modal.classList.add('modal-background');

        const modalCenter = document.createElement('div');
        modalCenter.classList.add('modal-center');
        modalCenter.style.backgroundImage = `url(${book.cover})`
        modalCenter.style.backgroundSize = 'cover';
        modal.appendChild(modalCenter);

        const closeButton = document.createElement('button');
        closeButton.innerHTML = '<span class="material-symbols-outlined">cancel</span>';
        closeButton.onclick = () => modal.remove();

        

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = book.title;

        const modalAuthor = document.createElement('h3');
        modalAuthor.textContent = book.author;

        const modalPrice = document.createElement('h3');
        modalPrice.textContent = `$${book.price}`;

        const modalButtonsContainer = document.createElement('div');
        modalButtonsContainer.classList.add('modal-buttons-container');

        const modalAddToCart = document.createElement('button');
        modalAddToCart.textContent = 'Comprar';
        modalAddToCart.onclick = () => {
          modalAddToCart.innerHTML = '<span class="material-symbols-outlined">check_circle</span>'
          cartArray.push(book)
          modalAddToCart.disabled = 'true'
        };

        const modalAddToFavs = document.createElement('button');
        modalAddToFavs.textContent = 'Favorito';
        modalAddToFavs.onclick = () => {
          modalAddToFavs.innerHTML = '<span class="material-symbols-outlined">favorite</span>'
          addFavoriteBook(userID, book.book_id)
          modalAddToFavs.style.color = 'crimson'
          modalAddToFavs.disabled = 'true'
        };
        

        modalButtonsContainer.append(modalAddToCart, modalAddToFavs);
        modalCenter.append(
          closeButton, 
          modalTitle, 
          modalAuthor, 
          modalPrice, 
          modalButtonsContainer);

        body.prepend(modal);
    };

    searchBar.addEventListener('input', function() {
        const query = searchBar.value;

        if (query.trim() === '') {
            searchDropDown.classList.remove('search-dropdown-show');
            searchDropDown.innerHTML = '';
            return;
        }

        fetch(`${searchdb}?q=${query}`)
            .then(response => response.json())
            .then(data => {
                // Clear previous search results
                searchDropDown.innerHTML = '';

                if (data.length > 0) {
                    searchDropDown.classList.add('search-dropdown-show');
                } else {
                    searchDropDown.classList.remove('search-dropdown-show');
                }

                data.forEach(book => {
                    const searchRow = document.createElement('div');
                    searchRow.classList.add('search-row');

                    searchRow.onclick = () => createSearchItemModal(book);

                    const coverColumn = document.createElement('div');
                    coverColumn.classList.add('search-cover-column');

                    const searchCover = document.createElement('img');
                    searchCover.style.height = '50px';
                    searchCover.style.width = '40px';
                    searchCover.src = book.cover;
                    coverColumn.append(searchCover);

                    const titleColumn = document.createElement('div');
                    titleColumn.classList.add('search-title-column');
                    titleColumn.textContent = book.title.length > 15 ? book.title.slice(0, 15) + '...' : book.title;

                    const authorColumn = document.createElement('div');
                    authorColumn.classList.add('search-author-column');
                    authorColumn.textContent = book.author;

                    const categoryColumn = document.createElement('div');
                    categoryColumn.classList.add('search-category-column');
                    categoryColumn.textContent = book.category;
                    categoryColumn.style.marginLeft = '10px'
                    categoryColumn.style.fontWeight = 'bold'


                    searchRow.append(coverColumn, titleColumn, authorColumn, categoryColumn);
                    searchDropDown.append(searchRow);
                });
            })
            .catch(error => console.error('Error:', error));
    });

    titleContainer.appendChild(searchBar);
    titleContainer.appendChild(toggleMenuButton);

    toggleMenuButton.setAttribute('id', 'toggle-menu-button');
    toggleMenuButton.innerHTML = '<span class="material-symbols-outlined">menu</span>';

    toggleMenuButton.onclick = () => {
        navbar.classList.toggle('show');
    };

    const categoriesBtn = document.createElement("div");
    categoriesBtn.classList.add('navbar-button');
    categoriesBtn.setAttribute('id', 'navbar-categories');
    categoriesBtn.textContent = 'Categorías';
    categoriesBtn.classList.add('closed');

    const wishlist = document.createElement("div");
    wishlist.classList.add('navbar-button');
    wishlist.setAttribute('id', 'navbar-wishlist');
    wishlist.innerHTML = '<span>Deseos</span>' + '<span class="material-symbols-outlined">favorite</span>';

    const shoppingCart = document.createElement("div");
    shoppingCart.classList.add('navbar-button');
    shoppingCart.setAttribute('id', 'navbar-shoppingcart');
    shoppingCart.innerHTML = '<span class="material-symbols-outlined">shopping_cart</span>';

    const logIn = document.createElement("div");
    logIn.classList.add('navbar-button');
    logIn.setAttribute('id', 'navbar-login');
    logIn.innerHTML = '<span class="material-symbols-outlined">account_circle</span>';

    const admin = document.createElement("div");
    admin.classList.add('navbar-button');
    admin.setAttribute('id', 'navbar-admin');
    admin.innerHTML = '<span class="material-symbols-outlined">shield_person</span>';

    navbar.appendChild(categoriesBtn);
    navbar.appendChild(wishlist);
    navbar.appendChild(shoppingCart);
    navbar.appendChild(logIn);
    if (role === 'admin') {
        navbar.appendChild(admin);
        logIn.remove();
    }

    const deployMenu = document.createElement('div');
    deployMenu.setAttribute('id', 'deploy-menu');
    deployMenu.className = 'hidden-menu';
    categoriesBtn.appendChild(deployMenu);

    categoriesBtn.addEventListener('click', (e) => {
        deployMenu.classList.toggle('show');
        deployMenu.classList.toggle('open');
        e.stopPropagation();
    });

    deployMenu.addEventListener('mouseleave', () => {
        deployMenu.classList.remove('show');
    });

    document.addEventListener('click', () => {
        deployMenu.classList.remove('show');
    });

    menuCategories.forEach(element => {
        const menuLink = document.createElement('a');
        menuLink.textContent = element + '>';
        deployMenu.appendChild(menuLink);
        menuLink.addEventListener('click', () => {
            handleMenuLinkClick(element);
            navbar.classList.remove('show');
        });
    });

    function handleMenuLinkClick(str) {
        displayDiv.innerHTML = '';
        PAGE_TITLE = str;
        categoriesDisplay(str, books);
    }

    wishlist.addEventListener('click', () => {
        if (logged) {
            displayDiv.innerHTML = '';
            wishlistDisplay(logged, role, userID);
            navbar.classList.remove('show');
        } else {
            window.alert('Debe estar loggeado para realizar esta acción');
        }
    });

    shoppingCart.addEventListener('click', () => {
        displayDiv.innerHTML = '';
        shoppingCartDisplay(userID);
        navbar.classList.remove('show');
    });

    logIn.addEventListener('click', () => {
        if (logged) {
            displayDiv.innerHTML = '';
            userDisplay();
            navbar.classList.remove('show');
        } else {
            displayDiv.innerHTML = '';
            logInDisplay();
            navbar.classList.remove('show');
        }
    });

    admin.addEventListener('click', () => {
        displayDiv.innerHTML = '';
        adminDisplay();
        navbar.classList.remove('show');
    });
}
