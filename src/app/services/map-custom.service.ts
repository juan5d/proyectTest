
import { environment } from '../../environments/environment.prod';
import { EventEmitter, Injectable, Output } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as ejemplo from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
@Injectable({
  providedIn: 'root'
})
export class MapCustomService {
  cbAddress: EventEmitter<any> = new EventEmitter<any>();
  mapbox = (mapboxgl as typeof mapboxgl);
  map !: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat =  3.06508799999999;
  lng = -73.129056;
  zoom = 4;
  wayPoints: Array<any> = [];
  markerDriver: any = null;
  constructor() {
    this.mapbox.accessToken = environment.mapPK;
   }

  buldMap(): Promise<any>{
    return new Promise((resolve, reject) =>{
      try {
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: this.zoom,
          center: [this.lng, this.lat]
        });
       
        const geocoder = new ejemplo({
          accessToken: mapboxgl.accessToken
        });

        geocoder.on('result', ($event)=>{
          const {result} = $event;
          this.cbAddress.emit(result);
        })


        resolve({
          map: this.map,
          geocoder
          
        });
        
    }
    catch (e) {
      reject(e);
    }
    });
  }
  
}
 