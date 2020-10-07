class Book {
    constructor(title , auhtor , isbn) {
        this.title = title;
        this.auhtor = auhtor;
        this.isbn = isbn;
    }
}

class UI {
    
    // Add book to list
    addBookToList(book) {
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
    showAlert(message , className) {
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
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    
    // Remove book
        removeBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}

// Local storage class
class Storage {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {

        const books = Storage.getBooks();

        books.forEach(function(book){
            // Instantiate UI
            const ui = new UI();

            // Add to list from LS
            ui.addBookToList(book);

        });
    }

    static addBook(book) {
        const books = Storage.getBooks();

        books.push(book);

        localStorage.setItem('books' , JSON.stringify(books));
    }

    static deleteBook(isbn) {
        const books = Storage.getBooks();

        books.forEach(function(book ,index){
            if(book.isbn === isbn) {
                books.splice(index ,1);
            }
            localStorage.setItem('books' , JSON.stringify(books));
        });
    }
}

// DOM content loader
document.addEventListener('DOMContentLoaded' , Storage.displayBooks);

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

        // Add to LS
        Storage.addBook(book);
        
        // Show alert
        ui.showAlert('Book Added' , 'success');

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

    // Remove from LS
    Storage.deleteBook(e.target.parentElement.previousElementSibling.textContent);
    
    // Show alert
    ui.showAlert('Book Removed' , 'success');

    e.preventDefault();

});
