import { CartsComponent } from './carts/carts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  declarations: [CartsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    CartsComponent,
  ]
})
export class ComponentsModule { }
