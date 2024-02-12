"use strict";
// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство
// для хранения списка книг, а также методы для добавления книги, удаления книги и получения
// информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books;
    constructor(books) {
        this.#books = books;
     };

    allBooks() {
        return this.#books;
    }
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error("Такая книга уже есть в библиотеке")
        }
        this.#books.push(title);
    }
    removeBook(title) {
        const book = this.#books.indexOf(title);
        if (book === -1) {
            throw new Error("такой книги нет в библиотеке")
        }
        this.#books.splice(book, 1);

    }
    hasBook (title) {
        return this.#books.includes(title);
     }
}
const libraryChildren = new Library(["Букварь", "Азбука", "Колобок", "Математика"]);
console.log(libraryChildren.allBooks());

libraryChildren.addBook("Буратино");
console.log(libraryChildren.allBooks());
// Повторная книга:
// libraryChildren.addBook("Буратино");
// console.log(libraryChildren.allBooks());

libraryChildren.removeBook("Математика");
console.log(libraryChildren.allBooks());
// Книга которой нет в библиотеке:
// libraryChildren.removeBook("Тараканище");
// console.log(libraryChildren.allBooks());

console.log(libraryChildren.hasBook("Математика"));
console.log(libraryChildren.hasBook("Колобок"));