interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

class BookCatalogDao {
  private books: Book[] = [];

  public listAll(): Book[] {
    return [...this.books];
  }

  public findById(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  public add(book: Book): void {
    this.books.push(book);
  }

  public update(updatedBook: Book): boolean {
    const bookIndex = this.books.findIndex(
      (book) => book.id === updatedBook.id
    );

    if (bookIndex === -1) {
      return false;
    }

    this.books[bookIndex] = updatedBook;
    return true;
  }

  public remove(id: number): boolean {
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

