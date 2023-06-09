import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../model/Book';
import { data } from 'jquery';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
public propertyId: number;
property = new Book();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
    ) {}

    ngOnInit() {
    this.route.params.subscribe(
      (params)=>{
        this.propertyId = +params['id'];
        this.bookService.getProperty(this.propertyId).subscribe(
          (data:Book) => {
            this.property = data;
          }, error => this.router.navigate(['/'])
        )
      }
    )
    // this.propertyId = +this.route.snapshot.params['id'];
    // this.route.data.subscribe(
    //   (data: Book) => {
    //     this.property = data['prp'];
    //   }
    // );
  }



}

