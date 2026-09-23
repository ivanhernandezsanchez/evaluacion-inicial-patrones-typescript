interface BookExporter {
  export(bookTitle: string): string;
}

class PdfBookExporter implements BookExporter {
  public export(bookTitle: string): string {
    return `Archivo PDF creado para el libro: ${bookTitle}`;
  }
}

class CsvBookExporter implements BookExporter {
  public export(bookTitle: string): string {
    return `Archivo CSV creado para el libro: ${bookTitle}`;
  }
}

class MarkdownBookExporter implements BookExporter {
  public export(bookTitle: string): string {
    return `Archivo Markdown creado para el libro: ${bookTitle}`;
  }
}

type ExportFormat = "pdf" | "csv" | "markdown";

class BookExporterFactory {
  public static create(format: ExportFormat): BookExporter {
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

