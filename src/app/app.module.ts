import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';
import { BooksByGenreComponent } from './pages/books/books-by-genre/books-by-genre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { SlajderComponent } from './pages/home/slajder/slajder.component';
import { CutTextPipe } from './shared/pipes/cut-text.pipe';


const routes: Routes = [
  {
    path: "",
    redirectTo: "pocetna",
    pathMatch: "full"
  },
  {
    path: "pocetna",
    component: HomeComponent,
  },
  {
    path: "knjige",
    component: BooksComponent,
  },
  {
    path: 'knjiga/:id',
    component: BookDetailsComponent
  },
  {
    path: 'genre/:genre',
    component: BooksByGenreComponent,
    pathMatch: "full"
  },
  {
    path: "rezervacije",
    component: ReservationComponent,
  },
  {
    path: "kontakt",
    component: ContactComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    BooksComponent,
    BookDetailsComponent,
    BooksByGenreComponent,
    ReservationComponent,
    SlajderComponent,
    CutTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

