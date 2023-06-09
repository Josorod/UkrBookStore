import { Book } from "./Book";

export class CartItem {
  Id: number;
  Book_Name: string;
  Author_Name: string;
  Quantity: number;
  Price: number;

  constructor(id: number, product: Book, qty = 1) {
    this.Id = id;
    this.Book_Name = product.Book_Name;
    this.Author_Name = product.Author_Name;
    this.Price = product.Price;
    this.Quantity = qty;
  }
}
