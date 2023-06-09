import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product: Book) {
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
