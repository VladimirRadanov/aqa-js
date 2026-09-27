import Book from './Book.js';

export default class EBook extends Book {
    
    constructor(title, author, year, fileType) {
        super(title, author, year);
        this.fileType = fileType;
    }

    get fileType() {
        return this._fileType;
    }

    set fileType(value) {
        if (typeof value !== 'string' || value.trim() === '' || value.length > 4) {
            throw new Error('Invalid file type. Please provide a non-empty string with the length of up to 4 characters.');
        }
        this._fileType = value;
    }

    printInfo() {
        super.printInfo();
        console.log(`File Type: ${this.fileType}`);
    }

    static createEBookByBookWithFileType(book, fileType) {
        if (!(book instanceof Book)) {
            throw new Error('Invalid book. Please provide an instance of the Book class.');
        }
        return new EBook(book.title, book.author, book.year, fileType);
    }
}