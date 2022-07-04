import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-books-by-genre',
  templateUrl: './books-by-genre.component.html',
  styleUrls: ['./books-by-genre.component.css']
})
export class BooksByGenreComponent implements OnInit {

  
  constructor(
    private service: BooksService, 
    private http: HttpClient, 
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe((params : Params) => {
      this.genre = this.route.snapshot.params["genre"]
    })
  }

  genre:any;
  books:any;
  genres: any[]=[];
  count=0;

  ngOnInit() {
    this.service.getAllBooks().subscribe(
      Response => {
        this.books = Response;
        for(let i=0; i<this.books.length; i++){
          if(this.books[i].zanr.toLowerCase() == this.genre){
            this.genres[this.count] = this.books[i]
            this.count++;
          }
        }
      }
    )
  }

}
