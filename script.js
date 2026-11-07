// Add New+ button functionality
const translucentOverlay = document.querySelector('.translucent-overlay');
const formContainer = document.querySelector('.form-container');
const addNewBtn = document.getElementById('addBook');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const bookForm = document.getElementById('bookForm');
const bookTitleInput = document.getElementById('bookTitle');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readCheckbox = document.getElementById('readCheckbox');

let editingBookId = null;

function showBookForm() {
    formContainer.classList.remove('hidden');
    translucentOverlay.classList.remove('hidden');
}

function resetBookForm() {
    bookForm.reset();
    editingBookId = null;
    formTitle.textContent = 'Add a New Book';
    submitBtn.textContent = 'Submit';
}

addNewBtn.addEventListener('click', () => {
    resetBookForm();
    showBookForm();
});

//SUBMIT NEW BOOK FUNCTIONALITY

const STORAGE_KEY = 'bookLib.library';

//Book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    //generate a unique bookId
    this.bookId = `${title.replace(/\s+/g, "_")}-${author.replace(/\s+/g, "_")}-${pages}-${Date.now()}`;
}

//Load saved books from localStorage
function loadLibrary() {
    try {
        const savedLibrary = localStorage.getItem(STORAGE_KEY);
        if (!savedLibrary) return [];

        const parsedLibrary = JSON.parse(savedLibrary);
        if (!Array.isArray(parsedLibrary)) return [];

        return parsedLibrary.map((book) => {
            const restoredBook = new Book(book.title, book.author, book.pages, book.read);
            restoredBook.bookId = book.bookId;
            return restoredBook;
        });
    }
    catch (error) {
        console.error('Could not load library from localStorage:', error);
        return [];
    }
}

//Persist myLibrary to localStorage
function saveLibrary() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(myLibrary));
    }
    catch (error) {
        console.error('Could not save library to localStorage:', error);
    }
}

const myLibrary = loadLibrary(); //Array for my library

//Books added the first time the library is opened
const SEED_BOOKS = [
    { title: 'Computer Science: An Interdisciplinary Approach', author: 'Robert Sedgewick', pages: 1168, read: false },
    { title: 'An Introduction to Computing Systems', author: 'Yale N. Patt', pages: 772, read: false },
    { title: 'Concrete Mathematics', author: 'Donald E. Knuth', pages: 657, read: false },
    { title: '1984', author: 'George Orwell', pages: 328, read: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', pages: 671, read: false },
];

//Seed the library only when no saved library exists yet
function seedLibraryIfEmpty() {
    try {
        if (localStorage.getItem(STORAGE_KEY) !== null) return;

        SEED_BOOKS.forEach((book) => {
            myLibrary.push(new Book(book.title, book.author, book.pages, book.read));
        });
        saveLibrary();
    }
    catch (error) {
        console.error('Could not seed library:', error);
    }
}

seedLibraryIfEmpty();

//Add book to library function
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    saveLibrary();
    return newBook;
}

const cardContainer = document.querySelector('.container');

//Functionality for delete confirmation popup
const popup = document.querySelector('.popup-content');
const cancelDelBtn = document.getElementById('cancelDelete');
const confirmDelBtn = document.getElementById('confirmDelete');
let pendingDelete = null;

function openDeleteConfirmation(onConfirm) {
    pendingDelete = onConfirm;
    translucentOverlay.classList.remove('hidden');
    popup.classList.remove('hidden');
}

function closeDeleteConfirmation() {
    pendingDelete = null;
    translucentOverlay.classList.add('hidden');
    popup.classList.add('hidden');
}

cancelDelBtn.addEventListener('click', closeDeleteConfirmation);

confirmDelBtn.addEventListener('click', () => {
    if (pendingDelete) pendingDelete();
    closeDeleteConfirmation();
});

//Generate a card for a book and wire up its controls
function createBookCard(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = book.bookId;

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = book.title;

    const author = document.createElement('div');
    author.classList.add('author');
    author.textContent = `Author :${book.author}`;

    const pages = document.createElement('div');
    pages.classList.add('pages');
    pages.textContent = `Total Pages : ${book.pages}`;

    const readToggle = document.createElement('button');
    readToggle.classList.add('read', 'tool-tip');
    readToggle.dataset.tooltip = 'Read Book Toggle';
    if (book.read) {
        readToggle.classList.add('toggled');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete', 'tool-tip');
    deleteBtn.dataset.tooltip = 'Delete-Book';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit', 'tool-tip');
    editBtn.dataset.tooltip = 'Edit Book';

    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pen');
    editBtn.appendChild(editIcon);

    //Functionality for readToggle button
    readToggle.addEventListener('click', () => {
        book.read = !book.read;
        readToggle.classList.toggle('toggled');
        saveLibrary();
    });

    //Functionality for edit book button
    editBtn.addEventListener('click', () => {
        editingBookId = book.bookId;
        bookTitleInput.value = book.title;
        authorInput.value = book.author;
        pagesInput.value = book.pages;
        readCheckbox.checked = book.read;
        formTitle.textContent = 'Edit Book';
        submitBtn.textContent = 'Save Changes';
        showBookForm();
    });

    //Functionality for delete book button
    deleteBtn.addEventListener('click', () => {
        openDeleteConfirmation(() => {
            const index = myLibrary.findIndex(item => item.bookId === book.bookId);
            if (index !== -1) {
                myLibrary.splice(index, 1);
            }
            card.remove();
            saveLibrary();
        });
    });

    const actions = document.createElement('div');
    actions.classList.add('card-actions');
    actions.append(readToggle, editBtn, deleteBtn);

    card.append(title, author, pages, actions);
    return card;
}

//Functionality for form submit action
bookForm.addEventListener('submit', (event) => {
    event.preventDefault() //prevents page refresh

    const title = bookTitleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readCheckbox.checked;

    if (editingBookId) {
        //Update the existing book and refresh its card in place
        const book = myLibrary.find(item => item.bookId === editingBookId);
        if (book) {
            book.title = title;
            book.author = author;
            book.pages = pages;
            book.read = read;

            const card = document.getElementById(book.bookId);
            if (card) {
                card.querySelector('.title').textContent = book.title;
                card.querySelector('.author').textContent = `Author :${book.author}`;
                card.querySelector('.pages').textContent = `Total Pages : ${book.pages}`;
                card.querySelector('.read').classList.toggle('toggled', book.read);
            }
            saveLibrary();
        }
    }
    else {
        //Add new book object to myLibrary array and persist it
        const newlyGeneratedBook = addBookToLibrary(title, author, pages, read);

        //Generate New Card for the newly added book and append it
        cardContainer.appendChild(createBookCard(newlyGeneratedBook));
    }

    //Reset and hide form after submission
    resetBookForm();
    formContainer.classList.add('hidden');
    translucentOverlay.classList.add('hidden');
});

//Render any books previously saved in localStorage
myLibrary.forEach((book) => {
    cardContainer.appendChild(createBookCard(book));
});

//Form Cacel Button
const cancelFormBtn = document.querySelector('.cancel-btn');
cancelFormBtn.addEventListener('click', () => {
     //Reset and hide form
     resetBookForm();
     formContainer.classList.add('hidden');
     translucentOverlay.classList.add('hidden');
})
