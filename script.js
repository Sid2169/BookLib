// Add New+ button functionality
const translucentOverlay = document.querySelector('.translucent-overlay');
const form = document.querySelector('.form-container');
const addNewBtn = document.getElementById('addBook');

addNewBtn.addEventListener('click', () => {
    form.classList.remove('hidden');
    translucentOverlay.classList.remove('hidden');
});