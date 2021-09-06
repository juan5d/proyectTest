import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../components/components.module';
import { HomeComponent } from './../pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, DataComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
HomeComponent,
DataComponent
  ]
})
export class PagesModule { }
