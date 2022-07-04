import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';
import { Books } from './../../../shared/models/books';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  
})
export class BookDetailsComponent implements OnInit {

  errorMessage = '';
  book: Books | undefined;

  constructor(private route: ActivatedRoute,
              private service: BooksService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getBook(id);
    }
  }

  getBook(id: number): void {
    this.service.getBook(id).subscribe({
      next: book => this.book = book,
      error: err => this.errorMessage = err
    });
  }
}
