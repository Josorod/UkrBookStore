import { Component, OnInit } from '@angular/core';
import { BookInterface } from 'src/app/model/book-interface';
import { IbaseBook } from '../model/IbaseBook';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertyfyService } from '../services/alertyfy.service';
import { BookService } from '../services/book.service';
import { event } from 'jquery';
import { Book } from '../model/Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;
  bookGenreRadio:'';
  //book: BookInterface;
  newBookSubmit:boolean;
  book = new Book();


  constructor(private fb: FormBuilder, private bookService: BookService, private alertyfy: AlertyfyService) {}

  ngOnInit() {
    this.createAddBookForm();
  }

  createAddBookForm() {
    this.addBookForm = this.fb.group({
      author: new FormControl(null, Validators.required),
      bookName: new FormControl(null, [Validators.required]),
      // genre: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required])
    });
  }

  get author() {
    return this.addBookForm.get('author') as FormControl;
  }

  get bookName() {
    return this.addBookForm.get('bookName') as FormControl;
  }
  // get genre() {
  //   return this.addBookForm.get('genre') as FormControl;
  // }
  get description() {
    return this.addBookForm.get('description') as FormControl;
  }
  get quantity() {
    return this.addBookForm.get('quantity') as FormControl;
  }
  get price() {
    return this.addBookForm.get('price') as FormControl;
  }

  mapBookData(): void {
    this.book.Id = this.bookService.newBookID();
    this.book.Author_Name = this.author.value;
    this.book.Book_Name = this.bookName.value;
    this.book.Genre = this.bookGenreRadio;
    this.book.Description = this.description.value;
    this.book.Price = this.price.value;
    this.book.Quantity = this.quantity.value;


  }

  onSubmit(){
    console.log(this.addBookForm);
    this.newBookSubmit = true;
    if(this.addBookForm.valid){
      this.mapBookData();
      this.bookService.addProperty(this.book);
      this.alertyfy.success('Congrats, your book listed successfully on our website');
      console.log(this.addBookForm);

    } else {
      this.alertyfy.error('Please review the form and provide all valid entries');
    }
  }

}

