import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

//task1
console.log("\nBooks created:");
book1.printInfo();
book2.printInfo();

//task2
console.log("\nEBook created:");
const ebook1 = new EBook("Digital Fortress", "Dan Brown", 1998, "PDF");
ebook1.printInfo();

//task3
book1.title = "New Title by setter";
console.log(`\nUpdated Book title: ${book1.title}`);

ebook1.fileType = "EPUB";
ebook1.title = "New EBook Title by setter";
console.log(`\nUpdated EBook title: ${ebook1.title}, Updated File Type: ${ebook1.fileType}`);
console.log(ebook1);

try {
    const invalidBook = new Book("", "Author", 2020);
} catch (error) {
    console.error(`Error creating book: ${error.message}`);
}

try {
    const invalidEBook = new EBook("Invalid EBook", "Author", 2020, "");
} catch (error) {
    console.error(`Error creating ebook: ${error.message}`);
}

//task4
const books = [
    new Book("Book 1", "Author 1", 2000),
    new Book("Book 2", "Author 2", 1995),
    new Book("Book 3", "Author 3", 2010),
    new EBook("EBook 1", "Author 4", 1990, "PDF")
];

const oldestBook = Book.getOldestBook(books);
console.log(`\nThe oldest book is: ${oldestBook.title} by ${oldestBook.author}, published in ${oldestBook.year}`);

//task5
const ebookFromBook = EBook.createEBookByBookWithFileType(book1, "MOBI");
console.log("\nEBook created from Book:");
ebookFromBook.printInfo();