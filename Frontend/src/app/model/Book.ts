import { BookInterface } from "./book-interface";

export class Book implements BookInterface {
  Id: number;
  Book_Name: string;
  Author_Name: string;
  Genre: string;
  Description: string;
  Price: number;
  ImageUrl?: string;
  PdfUrl?: string;
  Quantity: number;
}
