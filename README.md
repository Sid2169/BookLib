# Untitled

# My Books — Documentation

A simple web application for managing a personal library of books. Users can add new books, toggle their read status, and delete them from the library.

---

## Live Demo

Visit the **live version** of this project here:

[My Books - Live Site](https://sid2169.github.io/BookLib/)

*(Replace the above link with your actual deployment URL.)*

---

## Table of Contents

1. [Overview](https://www.notion.so/1a87aba3701f80a5a0d0fe9655811a73?pvs=21)
2. [Features](https://www.notion.so/1a87aba3701f80a5a0d0fe9655811a73?pvs=21)
3. [File Structure](https://www.notion.so/1a87aba3701f80a5a0d0fe9655811a73?pvs=21)
4. [Usage Instructions](https://www.notion.so/1a87aba3701f80a5a0d0fe9655811a73?pvs=21)
5. [HTML Explanation](https://www.notion.so/1a87aba3701f80a5a0d0fe9655811a73?pvs=21)
6. [CSS Explanation](https://www.notion.so/1a87aba3701f80a5a0d0fe9655811a73?pvs=21)
7. [JavaScript Explanation](https://www.notion.so/1a87aba3701f80a5a0d0fe9655811a73?pvs=21)
8. [Customization](https://www.notion.so/1a87aba3701f80a5a0d0fe9655811a73?pvs=21)
9. [Potential Enhancements](https://www.notion.so/1a87aba3701f80a5a0d0fe9655811a73?pvs=21)

---

## Overview

**My Books** is a single-page application that lets you:

- Add books with a title, author, page count, and read status.
- Toggle the read status of any book.
- Delete a book from your library with a confirmation popup.
- View a sample book as a quick example of the interface.

The project demonstrates **DOM manipulation**, **event handling**, and **basic data management** using an array.

---

## Features

- **Add New Book**: Opens a form overlay to enter book details.
- **Read Toggle**: Switch-like button indicating whether the book is read.
- **Delete Confirmation**: Popup that asks for confirmation before removing a book.
- **Sample Book**: Pre-existing example to show how the UI behaves.
- **Sticky Header**: Header remains visible while scrolling.
- **Fixed Footer**: Footer with social links (GitHub & LinkedIn) pinned near the bottom.

---

## File Structure

.
├── index.html
├── styles.css
└── script.js

1. **index.html**: Main HTML page, includes header, container for books, form overlay, and footer.
2. **styles.css**: All styling, including layout, colors, animations, and responsive design.
3. **script.js**: JavaScript logic for adding books, toggling read status, and deleting books.

---

## Usage Instructions

1. **Open `index.html` in a browser** (or serve it from a local server).
2. **Click “Add New+”** to open the book form.
3. **Fill in the form** (title, author, pages, and optionally mark as “Read”).
4. **Submit** the form to see a new book card in the library.
5. **Toggle** the read button on any book card to switch its status.
6. **Delete** a book by clicking the trash icon button and confirming the deletion in the popup.

---

## HTML Explanation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>My Books</title>
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="<https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css>">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header Section -->
    <header>
        <h1 id="logo">Library</h1>
        <button id="addBook" class="tool-tip" data-tooltip="Add New Book">Add New+</button>
    </header>

    <!-- Book Cards Container -->
    <div class="container">
        <!-- Sample Book -->
        <div id="sampleBook" class="card">
            <div class="title">Sample Book:)</div>
            <div class="author">Author : Ead Adyreal</div>
            <div class="pages">Total Pages :100001111001</div>
            <button class="read toggled tool-tip" data-tooltip="Read Book Toggle"></button>
            <button class="delete tool-tip" data-tooltip="Delete-Book"></button>
        </div>
    </div>

    <!-- Translucent Overlay for Form & Popups -->
    <div class="translucent-overlay hidden">
        <!-- Form Container -->
        <div class="form-container hidden">
            <h2>Add a New Book</h2>
            <form id="bookForm">
                <div class="form-group">
                    <label for="bookTitle">Book Title:</label>
                    <input type="text" id="bookTitle" name="bookTitle" required>
                </div>
                <div class="form-group">
                    <label for="author">Author:</label>
                    <input type="text" id="author" name="author" required>
                </div>
                <div class="form-group">
                    <label for="pages">Pages:</label>
                    <input type="number" id="pages" name="pages" required>
                </div>
                <div class="form-group">
                    <input type="checkbox" id="readCheckbox" name="readCheckbox">
                    <label for="readCheckbox">Read</label>
                </div>
                <button id="submitBtn" type="submit" class="submit-btn">Submit</button>
                <button type="button" class="cancel-btn">Cancel</button>
            </form>
        </div>

        <!-- Delete Confirmation Popup -->
        <div class="popup-content hidden">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this book?</p>
            <div class="popup-buttons">
                <button id="confirmDelete" class="popup-confirm-btn">Delete</button>
                <button id="cancelDelete" class="popup-cancel-btn">Cancel</button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <p class="footer-text">Connect with me:</p>
            <div class="footer-links">
                <a href="<https://github.com/yourgithub>" target="_blank" class="footer-link github">
                    <i class="fa-brands fa-github"></i> GitHub
                </a>
                <a href="<https://www.linkedin.com/in/yourlinkedin>" target="_blank" class="footer-link linkedin">
                    <i class="fa-brands fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </div>
    </footer>

    <!-- Main Script -->
    <script src="script.js"></script>
</body>
</html>

```

**Key Sections**

- **Header**: Shows the title (“Library”) and “Add New+” button.
- **Container**: Holds all book cards.
- **Form Container**: Pop-up form for adding new books.
- **Popup Content**: Confirmation dialog for deleting a book.
- **Footer**: Social links (GitHub & LinkedIn).

---

## CSS Explanation

```css
/* Basic resets and background colors */
html {
    background-color: #F9F2DF;
}
body {
    background-color: #94D5C9;
    padding: 8px;
    min-height: 100vh;
    border-radius: 4px;
    box-sizing: border-box;
}

/* Header styles */
header {
    background-color: #2B4A44;
    color: #94D5C9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 5%;
    border-radius: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    position: sticky;
    top: 2px;
    z-index: 1;
}
#addBook {
    background-color: #F9F2DF;
    padding: 0.5rem;
    border-radius: 4px;
    font-weight: bolder;
    cursor: pointer;
    box-shadow: 4px 2px 2px rgba(0, 0, 0, 0.2);
}
#addBook:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3);
}
#addBook:active {
    background-color: #E4D07A;
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Container for all book cards */
.container {
    background-color: rgba(41, 93, 140, 0.2);
    margin: 0.8rem;
    padding: 2%;
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

/* Individual book card */
.card {
    background-color: #DBEAEF;
    padding: 0.8rem;
    text-align: center;
    box-shadow: 4px 3px 2px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
}
.title {
    font-size: x-large;
    font-weight: bold;
}
.author {
    font-size: large;
    font-weight: 500;
}

/* Read toggle button */
.read, .delete {
    width: 60px;
    height: 36px;
    background-color: #ccc;
    border-radius: 18px;
    cursor: pointer;
    border: none;
    margin: 1rem;
}
.read::before {
    content: '';
    position: absolute;
    width: 34px;
    height: 34px;
    background-color: white;
    top: 1px;
    left: 1px;
    border-radius: 50%;
}
.read.toggled {
    background-color: #4caf50;
}
.read.toggled::before {
    transform: translate(24px);
}

/* Delete button */
.delete {
   background: url('images/delete.png') no-repeat center;
   background-size: 28px;
}
.delete:hover {
    background-color: rgb(191, 93, 93);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3);
}
.delete:active {
    background-color: red;
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Translucent overlay for form & popups */
.translucent-overlay {
    position: fixed;
    top: 0; bottom: 0; left: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hidden {
    display: none;
}

/* Form container */
.form-container {
    background-color: #94D5C9;
    padding: 2%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    width: 400px;
    margin: 5%;
}
.form-container h2 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}
.form-group {
    margin-bottom: 20px;
}
.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #555;
    font-weight: 600;
}
.form-group input[type="text"],
.form-group input[type="number"] {
    width: calc(100% - 22px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
}
.form-group input[type="text"]:focus,
.form-group input[type="number"]:focus {
    border-color: #2B4A44;
    outline: none;
}
.form-group input[type="checkbox"] {
    margin-right: 10px;
}

/* Submit & Cancel buttons */
.submit-btn {
    width: 100%;
    padding: 12px;
    background-color: #2B4A44;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.submit-btn:hover {
    background-color: #0056b3;
}
.cancel-btn {
    width: 100%;
    padding: 12px;
    background-color: #ddd;
    color: #333;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
}
.cancel-btn:hover {
    background-color: #ccc;
}

/* Delete Confirmation Popup */
.popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 350px;
    text-align: center;
    margin: 5%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.popup-content h2 {
    margin-bottom: 15px;
    color: #333;
}
.popup-content p {
    margin-bottom: 20px;
    color: #555;
}
.popup-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}
.popup-confirm-btn,
.popup-cancel-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}
.popup-confirm-btn {
    background-color: #d9534f; /* Red for confirm */
    color: white;
}
.popup-cancel-btn {
    background-color: #ddd;
    color: #333;
}
.popup-confirm-btn:hover {
    background-color: #c9302c;
}
.popup-cancel-btn:hover {
    background-color: #ccc;
}

/* Footer */
.footer {
    background-color: #2B4A44;
    padding: 20px;
    text-align: center;
    color: #DBEAEF;
    font-family: Arial, sans-serif;
    position: fixed;
    bottom: 8px;
    left: 16px;
    right: 16px;
    box-shadow: 4px -2px 10px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
}
.footer-text {
    font-size: 18px;
    margin-bottom: 10px;
}
.footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
}
.footer-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #94D5C9;
    font-weight: bold;
    font-size: 16px;
    padding: 8px 15px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}
.footer-link i {
    font-size: 20px;
    margin-right: 8px;
    color: #94D5C9;
    transition: color 0.3s ease-in-out;
}
.footer-link:hover {
    background-color: #FDECDD;
    color: #2B4A44;
}
.footer-link:hover i {
    color: #2B4A44;
}
@media (max-width: 600px) {
    .footer-links {
        flex-direction: column;
        gap: 10px;
    }
}

```

**Notable Points**

- **Color Palette**: `#2B4A44`, `#94D5C9`, `#DBEAEF`, `#FDECDD`, `#F9F2DF`.
- **Responsive Grid** for displaying book cards.
- **Overlay** approach to show/hide form and popups with `.hidden`.
- **Switch-like toggle** for the read button.

---

## JavaScript Explanation

```jsx
// =======================
// GLOBAL VARIABLES & SETUP
// =======================
const myLibrary = []; // Stores all Book objects
const translucentOverlay = document.querySelector('.translucent-overlay');
const formContainer = document.querySelector('.form-container');
const cardContainer = document.querySelector('.container');
const popup = document.querySelector('.popup-content');
const bookForm = document.getElementById('bookForm');

// =======================
// BOOK OBJECT CONSTRUCTOR
// =======================
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // Generate a unique ID
    this.bookId = `${title.replace(/\s+/g, "_")}-${author.replace(/\s+/g, "_")}-${pages}-${Date.now()}`;
}

// =======================
// ADD BOOK TO LIBRARY
// =======================
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// =======================
// "ADD NEW+" BUTTON
// =======================
const addNewBtn = document.getElementById('addBook');
addNewBtn.addEventListener('click', () => {
    formContainer.classList.remove('hidden');
    translucentOverlay.classList.remove('hidden');
});

// =======================
// CANCEL DELETE BUTTON
// =======================
const cancelDelBtn = document.getElementById('cancelDelete');
cancelDelBtn.addEventListener('click', () => {
    translucentOverlay.classList.add('hidden');
    popup.classList.add('hidden');
});

// =======================
// FORM SUBMISSION
// =======================
bookForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    // Collect form values
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('readCheckbox').checked;

    // Add new book object to array
    addBookToLibrary(title, author, pages, read);
    const newlyGeneratedBook = myLibrary[myLibrary.length - 1];

    // Create a new card in the DOM
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.id = newlyGeneratedBook.bookId;
    newCard.innerHTML = `
        <div class="title">${title}</div>
        <div class="author">Author :${author}</div>
        <div class="pages">Total Pages : ${pages}</div>
        <button class="read tool-tip" data-tooltip="Read Book Toggle"></button>
        <button class="delete tool-tip" data-tooltip="Delete-Book"></button>
    `;
    cardContainer.appendChild(newCard);

    // Handle read toggle
    const readToggle = newCard.querySelector('.read');
    if (newlyGeneratedBook.read) {
        readToggle.classList.add('toggled');
    }
    readToggle.addEventListener('click', () => {
        newlyGeneratedBook.read = !newlyGeneratedBook.read;
        readToggle.classList.toggle('toggled');
    });

    // Handle delete button
    const deleteBtn = newCard.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        let index = myLibrary.findIndex(book => book.bookId === newlyGeneratedBook.bookId);
        // Show confirmation popup
        translucentOverlay.classList.remove('hidden');
        popup.classList.remove('hidden');
        // Confirm delete
        const cnfrmDelBtn = document.getElementById('confirmDelete');
        cnfrmDelBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            newCard.remove();
            translucentOverlay.classList.add('hidden');
            popup.classList.add('hidden');
        });
    });

    // Reset and hide form
    bookForm.reset();
    formContainer.classList.add('hidden');
    translucentOverlay.classList.add('hidden');
});

// =======================
// SAMPLE BOOK TOGGLE/DELETE
// =======================
const sampleBook = document.getElementById('sampleBook');
const sampleBookReadToggle = sampleBook.querySelector('.read');
sampleBookReadToggle.addEventListener('click', () => {
    sampleBookReadToggle.classList.toggle('toggled');
});
const sampleBookDel = sampleBook.querySelector('.delete');
sampleBookDel.addEventListener('click', () => {
    translucentOverlay.classList.remove('hidden');
    popup.classList.remove('hidden');
    const cnfrmDelBtn = document.getElementById('confirmDelete');
    cnfrmDelBtn.addEventListener('click', () => {
        sampleBook.remove();
        translucentOverlay.classList.add('hidden');
        popup.classList.add('hidden');
    });
});

// =======================
// CANCEL FORM BUTTON
// =======================
const cancelFormBtn = document.querySelector('.cancel-btn');
cancelFormBtn.addEventListener('click', () => {
    bookForm.reset();
    formContainer.classList.add('hidden');
    translucentOverlay.classList.add('hidden');
});

```

### **Key Points**

- **`myLibrary` array** holds all book objects.
- **`Book` constructor** generates a unique `bookId` by combining title, author, pages, and current time.
- **Adding Books**: Submitting the form creates a new book object, pushes it to `myLibrary`, and creates a corresponding card in `.container`.
- **Read Toggle**: The `.read` button toggles the `toggled` class and the `read` property.
- **Delete Confirmation**: Clicking the `.delete` button opens a confirmation popup; if confirmed, the book is removed from both the DOM and the array.
- **Sample Book**: Demonstrates the same toggle/delete logic.

---

## Customization

- **Color Scheme**: Modify colors in `styles.css` under the `:root` or directly in the CSS rules.
- **Font Awesome Icons**: Change the icons by updating class names (e.g., `fa-brands fa-github`).
- **Overlay Behavior**: Adjust how forms and popups appear by changing the `.hidden` class and transitions.
- **Footer Position**: Currently fixed near the bottom. Remove or change the CSS if you want a standard static footer.

---

## Potential Enhancements

1. **Local Storage**: Save `myLibrary` data so the book list persists after page refresh.
2. **Edit Book**: Add a button to edit book details.
3. **Search/Filter**: Implement a search bar to filter books by title or author.
4. **Sort Books**: Sort by title, author, or read status.
5. **Better UI/UX**: Add animations, improve form design, or use a modal library.

---

**Thank you for checking out My Books!** If you have any questions or suggestions, feel free to reach out or contribute to the project.

