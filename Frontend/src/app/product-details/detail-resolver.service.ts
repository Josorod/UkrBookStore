import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Book } from '../model/Book';
import { Observable, catchError, of } from 'rxjs';
import { BookService } from '../services/book.service';

@Injectable({
  providedIn: 'root'
})
export class DetailResolverService implements Resolve<Book> {

constructor(private bookService: BookService,private router: Router) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Book>|Book {
    const propId = route.params['id'];
    return this.bookService.getProperty(+propId).pipe(
      catchError(error => {
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }
}
