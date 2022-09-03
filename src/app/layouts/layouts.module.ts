import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
