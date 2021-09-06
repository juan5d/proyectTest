import { Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 urlImg1="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1709/tuktukdesign170900070/85693764-red-del-icono-del-icono-del-grupo-del-grupo-de-personas-y-el-trabajo-en-equipo-de-la-ilustraci%C3%B3n-de-.jpg";
urlImg2="https://cdn.icon-icons.com/icons2/632/PNG/512/users_icon-icons.com_57999.png ";
 urlImg3="https://previews.123rf.com/images/lefttime/lefttime1711/lefttime171100019/89092993-lupa-en-busca-de-icono-de-personas-concepto-de-s%C3%ADmbolo-de-b%C3%BAsqueda-de-empleado-caza-de-talentos-sele.jpg";
 ruta1="/map";
ruta2="/table";
 ruta3="/datos";
titulo1="Mapa";
titulo2="Tabla Json";
titulo3="Consumo de Api";


  constructor() { }

  ngOnInit(): void {
  }

}
