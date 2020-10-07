// Book Constructor
function Book(title , author , isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');

    // Create Element
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

// Show alert
UI.prototype.showAlert = function(message , className) {
    // Create Element
    const div = document.createElement('div');
    // Add Class
    div.className = `alert ${className}`;
    // Set message 
    div.appendChild(document.createTextNode(message));
    // select parent 
    const parent = document.querySelector('.container');
    // Before element
    const form = document.getElementById('book-form');

    parent.insertBefore(div , form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    } , 3000);
}

// Clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}   

// Remove book
UI.prototype.removeBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

function Storage() {
    this.getBooks = function() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    this.addBook = function(book) {
        const books = new Storage().getBooks();
        books.push(book);
        localStorage.setItem('books' , JSON.stringify(books));   
        console.log(books);
    }
    this.displayBooks = function() {
        const books = new Storage().getBooks();

        books.forEach(function(book){
            const ui = new UI();
            ui.addBookToList(book);
        });
    }
    this.deleteBook = function(isbn) {
        const books = new Storage().getBooks();
        books.forEach(function(book , index){
            if(book.isbn === isbn) {
                books.splice(index , 1);
            }
            localStorage.setItem('books' , JSON.stringify(books));
        });
    }
}


document.addEventListener('DOMContentloaded' , new Storage().displayBooks());



// Event Listener for add book
document.getElementById('book-form').addEventListener('submit' , function(e){
    
    // Form Values 
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Instantiate Book        
    const book = new Book(title , author , isbn);
    
    // Instantiate UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === '') { 
        ui.showAlert('Plaese fill in all fields' , 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);
        
        // Show alert
        ui.showAlert('Book Added' , 'success');

        const addToLs = new Storage();
        addToLs.addBook(book);

        // CLear fields
        ui.clearFields();
    }
    e.preventDefault();
});

// Event listener for delete book
document.getElementById('book-list').addEventListener('click' , function(e) {

    // Instantiate UI
    const ui = new UI();

    // Remove Book
    ui.removeBook(e.target);

    new Storage().deleteBook(e.target.parentElement.previousElementSibling.textContent);

    // Show alert
    ui.showAlert('Book Removed' , 'success');

    e.preventDefault();

});

