"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BookCatalogDao {
    books = [];
    listAll() {
        return [...this.books];
    }
    findById(id) {
        return this.books.find((book) => book.id === id);
    }
    add(book) {
        this.books.push(book);
    }
    update(updatedBook) {
        const bookIndex = this.books.findIndex((book) => book.id === updatedBook.id);
        if (bookIndex === -1) {
            return false;
        }
        this.books[bookIndex] = updatedBook;
        return true;
    }
    remove(id) {
        const bookIndex = this.books.findIndex((book) => book.id === id);
        if (bookIndex === -1) {
            return false;
        }
        this.books.splice(bookIndex, 1);
        return true;
    }
}
const catalogDao = new BookCatalogDao();
catalogDao.add({
    id: 10,
    title: "El mapa de las mareas",
    author: "Nora Vidal",
    available: true,
});
catalogDao.add({
    id: 20,
    title: "La ultima estacion",
    author: "Mario Soler",
    available: false,
});
catalogDao.add({
    id: 30,
    title: "Codigo bajo la lluvia",
    author: "Irene Campos",
    available: true,
});
console.log("Catalogo completo:");
console.log(catalogDao.listAll());
console.log("Libro con id 20:");
console.log(catalogDao.findById(20));
const wasUpdated = catalogDao.update({
    id: 20,
    title: "La ultima estacion",
    author: "Mario Soler",
    available: true,
});
console.log("¿Se actualizo el libro?");
console.log(wasUpdated);
const wasRemoved = catalogDao.remove(30);
console.log("¿Se elimino el libro?");
console.log(wasRemoved);
console.log("Catalogo final:");
console.log(catalogDao.listAll());
//# sourceMappingURL=index.js.map