import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PATHS } from 'src/app/shared/paths';
import { map } from 'rxjs/operators';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAllBooks():Observable<any>{
    return this.http.get(PATHS.books);
  }

  getBook(id: number): Observable<Books | undefined> {
    return this.getAllBooks()
      .pipe(
        map((books: Books[]) => books.find(p => p.id === id))
      );
  }
}
