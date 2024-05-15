import { AfterViewInit, Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';

import { environment } from './.././../environments/environment';


@Component({
  selector: 'app-leaf-let',
  templateUrl: './leaf-let.component.html',
  styleUrls: ['./leaf-let.component.css']
})
export class LeafLetComponent implements AfterViewInit{
 map: any;

  constructor() {
    
  }

 


  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {
    this.map = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: 'mapbox/streets-v11',
      accessToken: environment.mapbox.accessToken
  }).addTo(this.map);

    this.getCurrentPosition()
    .subscribe((position: any) => {
      this.map.flyTo([position.latitude, position.longitude], 13);

      const icon = L.icon({
        iconUrl: 'assets/images/marker-icon.png',
        shadowUrl: 'assets/images/marker-shadow.png',
        popupAnchor: [13, 0],
      });

      const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Angular Leaflet');
      marker.addTo(this.map);
    });
  }

  //Second map
  radiusMts = 5500;
    bounds = L.latLng(44.6730555555556, 6.9225).toBounds(this.radiusMts); 

    latlngs:any = [[18.739046, 80.505755], [15.892787, 77.236081]];

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);



    var rectOptions = {color: 'Red', weight: 1}
  var rectangle = L.rectangle(this.latlngs, rectOptions);
    
  rectangle.addTo(this.map);
   
   // L.rectangle(this.bounds).addTo(this.map);

     L.rectangle([[4.6730555555556, -34.9225],[45.10418, -106.62987]], {color: "red", weight: 8,fillColor:"blue"}).addTo(this.map);
    // L.circle([35.10418, -106.62987], -1111546.72,).addTo(this.map);
    //L.polygon([[[35.10418, -106.62987],[35.19738, -106.875],[35.07946, -106.80634]],[[35.11654, -106.58318],[35.13142, -106.48876],[35.07384, -106.52412]]],{color: 'red',weight:8}).addTo(this.map).bindPopup("We are the same layer");

  
  }

  //add rectangle

 

  public ngAfterViewInit(): void {
   // this.loadMap();
   this.initMap();
  }

  

}
