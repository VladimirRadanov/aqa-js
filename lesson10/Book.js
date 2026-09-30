export default class Book {
    
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Invalid title. Please provide a non-empty string.');
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Invalid author. Please provide a non-empty string.');
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Invalid year. Please provide a non-negative number.');
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    static getOldestBook(books){
        return books.reduce((oldest, book) => book.year < oldest.year ? book : oldest);
    }
}