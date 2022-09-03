import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/shared/services/books.service';
import { Reservation } from '../../shared/models/reservation';
import { Books } from './../../shared/models/books';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  form!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService
   ) { 
    
   }

  public books: any[] = [
    // {
    //   id: 0,
    //   naslov: "Izaberite knjigu:"
    // },
    {
      id: 1,
      naslov: "Smisao života jednog psa"
    },
    {
      id: 2,
      naslov: "Muke bogataša"
    },
    {
      id: 3,
      naslov: "Koloseum"
    },
    {
      id: 4,
      naslov: "Ognjena kapija"
    },
    {
      id: 5,
      naslov: "Avgust"
    },
    {
      id: 6,
      naslov: "Šala"
    },
    {
      id: 7,
      naslov: "Una"
    },
    {
      id: 8,
      naslov: "Igraj igraj igraj"
    },
    {
      id: 9,
      naslov: "Kafka na obali mora"
    },
    {
      id: 10,
      naslov: "Norveška šuma"
    },
    {
      id: 11,
      naslov: "Dina"
    },
    {
      id: 12,
      naslov: "Dina 2: Mesija Dine"
    },
    {
      id: 13,
      naslov: "Dina 3: Deca Dine"
    },
    {
      id: 14,
      naslov: "Dina 4: Božanski car Dine"
    },
    {
      id: 15,
      naslov: "Tačka pucanja"
    },
    {
      id: 16,
      naslov: "Pogrešna porodica"
    },
    {
      id: 17,
      naslov: "Problem tri tela"
    },
    {
      id: 18,
      naslov: "Mračna šuma"
    },
    {
      id: 19,
      naslov: "Plavi ljiljan"
    },
    {
      id: 20,
      naslov: "Ponoćno sunce"
    }
  ]
  // public books: any[];

  ngOnInit(): void {
    // this.getAllBooks();
     this.form = this.fb.group({
      name: this.fb.control("",[Validators.required, Validators.pattern(/^[A-ZŠĐŽČĆ][a-zšđžčć]{1,30}(\s[A-ZŠĐŽČĆ][a-zšđžčć]{1,30})?$/)]),
      email: this.fb.control("",[Validators.required,Validators.email]),
      date: this.fb.control("",[Validators.required]),
      book: this.fb.control("0", [Validators.required, Validators.min(1)]),
    });
  }

  formData(){
    let formValue: Reservation = this.form.getRawValue();

    let dataOfReservation: Reservation = {
      name : formValue.name,
      email : formValue.email,
      date : formValue.date,
      book : formValue.book
    };

    return dataOfReservation;
  }

  onSubmit(){
      
      if(this.form.valid){
        let data = this.formData();
        alert('Rezervacija uspešno izvršena');
        this.ngOnInit();
      }
      else{
        alert("Forma nije validno popunjena! Molimo Vas da proverite šta ste uneli.");
      }
      this.form.reset();
    }

    // getAllBooks(){
    //   this.booksService.getAllBooks().subscribe(data => {
    //     console.log(data)
    //     this.books = data;
    //   })

    //   console.log(this.books)
    // }


}
