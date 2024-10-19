// Task 1 Create a Book Class
class Book {
    constructor(title, author, ISBN){
        this.title= title;
        this.author= author;
        this.ISBN= ISBN;
        this._isAvailable = true;
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }
    get isAvailable() {
        return this._isAvailable;
    }
    set isAvailable(status){
        this._isAvailable = status;
    }
}

// Task 2 Create a Section Class

class Section {
    constructor(name){
        this.name = name
        this.books =[];
    }
    addBook(book){
        this.books.push(book);
    }
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }
    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.getDetails()}, Available: ${book.isAvailable}`);
             
        });
    }
// Task 5 Handle Books Borrowing and Returning

 calculateTotalBooksAvailable() {
    return this.getAvailableBooks();
 }
}

    // Task 3 Create a Patron Class

    class Patron {
        constructor(name) {
            this.name = name;
            this.borrowedBooks =[];
        }
        borrowedBook(book) {
            if (book.isAvailable){
                book.isAvailable = false;
                this.borrowedBooks.push(book);
                console.log(`${this.name} borrowed "${book.title}"`);
            } else{
                console.log(`"${book.title}" Not Available`);
                
            }
        }
        returnBook(book) {
            const index = this.borrowedBooks.indexOf(book);
            if(index > -1){
                book.isAvailable = true;
                this.borrowedBooks.splice(index, 1);
                console.log(`${this.name} returned "${book.title}"`);
            }else {
                console.log(`${this.name} have not borrowed "${book.title}"`);
            }
        }
    }

// Task 4 Create a VIPPatron class that inherits from patron

class VIPPatron extends Patron{
    constructor(name, priority) {
        super(name);
        this.priority = priority;
    }
    borrowedBook(book) {
        if (book.isAvailable) {
            book.isAvailable= false;
            this.borrowedBooks.push(book);
            console.log(`VIP ${this.name} borrowed "${book.title}"`);
       } else {
        console.log(`"${book.title}" not available for VIP.`);
        
       }
    }
}

// Task 6 Create and Manage Sections and Patrons

// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Create patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book (has priority)
vipPatron.borrowBook(book1);

// Return the book
regularPatron.returnBook(book1);

// List books and availability
fiction.listBooks();

// Calculate total available books in each section

console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);