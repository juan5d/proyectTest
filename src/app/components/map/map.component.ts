import { MapCustomService } from '../../services/map-custom.service';
import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  coordenadas:any;
  @ViewChild('asGeoCoder') asGeoCoder !: ElementRef;
  constructor(private MapCustomService: MapCustomService, private render2: Renderer2) { }

  ngOnInit(): void {
    this.MapCustomService.buldMap().then(({geocoder, map})=>{
      this.render2.appendChild(this.asGeoCoder.nativeElement, geocoder.onAdd(map))
      console.log(geocoder);
    }).catch((err)=>{
      console.log("Error");
    })
    this.MapCustomService.cbAddress.subscribe((getPoint) => {this.coordenadas=getPoint.center});
  }

  

}
