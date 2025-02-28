// Add New+ button functionality
const translucentOverlay = document.querySelector('.translucent-overlay');
const formContainer = document.querySelector('.form-container');
const addNewBtn = document.getElementById('addBook');

addNewBtn.addEventListener('click', () => {
    formContainer.classList.remove('hidden');
    translucentOverlay.classList.remove('hidden');
});

//SUBMIT NEW BOOK FUNCTIONALITY

const myLibrary = []; //Array for my library

//Book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    //generate a unique bookId
    this.bookId = `${title.replace(/\s+/g, "_")}-${author.replace(/\s+/g, "_")}-${pages}-${Date.now()}`;
}

//Add book to library function
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const cardContainer = document.querySelector('.container');

//Functionality for cancel delete button of delete confirmation popup
const popup = document.querySelector('.popup-content');
const cancelDelBtn = document.getElementById('cancelDelete');
cancelDelBtn.addEventListener('click', () => {
    translucentOverlay.classList.add('hidden');
    popup.classList.add('hidden');
})

//Functionality for form submit action
const bookForm = document.getElementById('bookForm');

bookForm.addEventListener('submit', (event) => {
    event.preventDefault() //prevents page refresh

    //Propertiy values for generaing new book object 
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('readCheckbox').checked;

    addBookToLibrary(title, author, pages, read);//Add new book object to myLibrary array
    const newlyGeneratedBook = myLibrary[myLibrary.length - 1];

    //Generate New Card for the newly added book in myLibrary
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    const newCardId = newlyGeneratedBook.bookId;
    newCard.id = newCardId;
    newCard.innerHTML =
        `   <div class="title">${title}</div>
            <div class="author">Author :${author}</div>
            <div class="pages">Total Pages : ${pages}</div>
            <button class="read tool-tip" data-tooltip="Read Book Toggle"></button>
            <button class="delete tool-tip" data-tooltip="Delete-Book"></button>`

    cardContainer.appendChild(newCard);//Appending the new card to card container

    //Functionality for readToggle button
    const readToggle = newCard.querySelector('.read');
    if (newlyGeneratedBook.read) {
        readToggle.classList.add('toggled');
    }

    readToggle.addEventListener('click', () => {
        if (!newlyGeneratedBook.read) {
            newlyGeneratedBook.read = true;
            readToggle.classList.add('toggled');
        }
        else {
            newlyGeneratedBook.read = false;
            readToggle.classList.remove('toggled');
        }
    });

    //Functionality for delete book button
    const deleteBtn = newCard.querySelector(`.delete`);
    deleteBtn.addEventListener('click', () => {
        let index = myLibrary.findIndex(book => book.bookId === newCardId);
        //Show delete confirmation popup
        translucentOverlay.classList.remove('hidden');
        popup.classList.remove('hidden');
        //Confirm delete button functionality
        const cnfrmDelBtn = document.getElementById('confirmDelete');
        cnfrmDelBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            newCard.remove();
            translucentOverlay.classList.add('hidden');
            popup.classList.add('hidden');
        });
    });

    //Reset and hide form after submission
    bookForm.reset();
    formContainer.classList.add('hidden');
    translucentOverlay.classList.add('hidden');
});

//SAMPEL BOOK CONTROLS

//Sample Book Read Toggle
const sampleBook = document.getElementById('sampleBook');
const sampleBookReadToggle = sampleBook.querySelector('.read');
sampleBookReadToggle.addEventListener('click', () => {
    if (!sampleBookReadToggle.classList.contains('toggled')) {
        sampleBookReadToggle.classList.add('toggled');
    }
    else {
        sampleBookReadToggle.classList.remove('toggled');
    }
})
//Sample Book Delete button
const sampleBookDel = sampleBook.querySelector('.delete');
sampleBookDel.addEventListener('click', () => {
    //Show delete confirmation popup
    translucentOverlay.classList.remove('hidden');
    popup.classList.remove('hidden');
    //Confirm delete button functionality
    const cnfrmDelBtn = document.getElementById('confirmDelete');
    cnfrmDelBtn.addEventListener('click', () => {
        sampleBook.remove();
        translucentOverlay.classList.add('hidden');
        popup.classList.add('hidden');
    });
});