import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  @Input() img:any;
  @Input() ruta:any;
  @Input() titulo:any;
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  