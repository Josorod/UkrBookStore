import { Component, OnInit, Input} from '@angular/core';
import { BookInterface } from '../model/book-interface';
import { MessengerService } from '../services/messenger.service';
import { CartServiceService } from '../services/cart-service.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book_info_card',
  templateUrl: './book_info_card.component.html',
  styleUrls: ['./book_info_card.component.css']
})
export class Book_info_cardComponent{
  @Input() property : BookInterface;

  @Input() productItem: Book;


  constructor(
    private msg: MessengerService,
    private cartService: CartServiceService,

  ) { }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }
}
