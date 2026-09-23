"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PdfBookExporter {
    export(bookTitle) {
        return `Archivo PDF creado para el libro: ${bookTitle}`;
    }
}
class CsvBookExporter {
    export(bookTitle) {
        return `Archivo CSV creado para el libro: ${bookTitle}`;
    }
}
class MarkdownBookExporter {
    export(bookTitle) {
        return `Archivo Markdown creado para el libro: ${bookTitle}`;
    }
}
class BookExporterFactory {
    static create(format) {
        switch (format) {
            case "pdf":
                return new PdfBookExporter();
            case "csv":
                return new CsvBookExporter();
            case "markdown":
                return new MarkdownBookExporter();
            default:
                throw new Error(`Formato no disponible: ${format}`);
        }
    }
}
const bookTitle = "El mapa de las mareas";
const pdfExporter = BookExporterFactory.create("pdf");
console.log(pdfExporter.export(bookTitle));
const csvExporter = BookExporterFactory.create("csv");
console.log(csvExporter.export(bookTitle));
const markdownExporter = BookExporterFactory.create("markdown");
console.log(markdownExporter.export(bookTitle));
//# sourceMappingURL=index.js.map