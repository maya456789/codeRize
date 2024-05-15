import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {
  tileLayer,
  latLng,
  FeatureGroup,
  featureGroup,
  DrawEvents,
} from 'leaflet';


@Component({
  selector: 'app-leaf-let-draw',
  templateUrl: './leaf-let-draw.component.html',
  styleUrls: ['./leaf-let-draw.component.css']
})
export class LeafLetDrawComponent {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909),
  };
  drawnItems: FeatureGroup = featureGroup();

  drawOptions = {
    edit: {
      featureGroup: this.drawnItems,
    },
  };

  public onDrawCreated(e: any) {
    this.drawnItems.addLayer((e as DrawEvents.Created).layer);
  }

}
