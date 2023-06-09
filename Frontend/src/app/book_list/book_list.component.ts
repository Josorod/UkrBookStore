import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BookInterface } from '../model/book-interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book_list',
  templateUrl: './book_list.component.html',
  styleUrls: ['./book_list.component.css']
})
export class Book_listComponent implements OnInit {

  properties: BookInterface[];
  Book_Name = '';
  SearchBook = '';
  SortbyParam = '';
  SortDirection = 'asc';

  constructor(private http:HttpClient,  private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllProperties().subscribe(
      data => {
      this.properties = data;
      console.log(data);
    }, error => {
      console.log('httperror:');
      console.log(error);
    }
  );
  }

  onBookNameFilter() {
    this.SearchBook = this.Book_Name;
  }

  onBookNameFilterClear() {
    this.SearchBook = '';
    this.Book_Name = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
