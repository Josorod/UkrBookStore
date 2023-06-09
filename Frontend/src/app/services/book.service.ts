import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookInterface } from 'src/app/model/book-interface';
import { IbaseBook } from '../model/IbaseBook';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http: HttpClient) { }

getProperty(id: number){

  return this.getAllProperties().pipe(
    map(propertiesArray =>{
      return propertiesArray.find(p=> p.Id === id);
    })
  )

}

getAllProperties(): Observable<Book[]> {
  return this.http.get('data/properties.json').pipe(
    map(data => {
    const propertiesArray: Array<Book> = [];
    const localBook = JSON.parse(localStorage.getItem('newBook'));

    if (localBook) {
      for (const id in localBook) {
          propertiesArray.push(localBook[id]);
      }
    }
    for (const id in data) {
      if (data.hasOwnProperty(id)) {
        propertiesArray.push(data[id]);
      }
    }
    return propertiesArray;
    })
  );
  return this.http.get<Book[]>('data/properties.json');
}

addProperty(book: Book) {
  let newBook = [book];


  if (localStorage.getItem('newBook')) {
    newBook = [book,
                ...JSON.parse(localStorage.getItem('newBook')!)];
  }

  localStorage.setItem('newBook', JSON.stringify(newBook));
}

newBookID() {
    if (localStorage.getItem('BID')) {
      localStorage.setItem('BID', String(+localStorage.getItem('BID')! + 1));
      return +localStorage.getItem('BID')!;
    } else {
      localStorage.setItem('BID', '101');
      return 101;
    }

  }
}
