import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
 usuarios: any;
 id: any;
 name:any;
 lasname:any;
 url:any;
 email:any;
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(result => {
      console.log(result.data[0].first_name)
      this.usuarios=result.data;
    });
   }

  ngOnInit(): void {
  }

save(): void{


  const data = {id: this.id, email:  this.email, first_name: this.name, last_name:  this.lasname,avatar:  this.url}
this.dataService.postData(data).subscribe(user =>{
  console.log("guardado")
  this.usuarios.push(data);
})
}

update(): void{
  const data = {id: this.id, email:  "juan@otro.com", first_name: "Juan", last_name:  "Soto",avatar:  ""}
this.dataService.putData(data).subscribe(user =>{
  const index= user ?  this.usuarios.findIndex((c: { id: number | undefined; }) => c.id == user.id):-1;
  if(index >-1){
    this.usuarios[index]=user;
  }
})
}

deleteData(): void{
  const data = {id: this.id}
this.dataService.deleteData(data.id).subscribe(user =>{
  console.log("eliminado");
  this.usuarios = this.usuarios.filter((c: { id: string; })=> c.id!=data.id)
})
}
}
