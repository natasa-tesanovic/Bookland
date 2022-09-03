import { Component, OnInit } from '@angular/core';
import { BooksService } from './../../shared/services/books.service';
import { Books } from './../../shared/models/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private service : BooksService) { }

 
  public books: Books[];
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.service.getAllBooks().subscribe(data => {
      this.books = data;
    })
  }

}
