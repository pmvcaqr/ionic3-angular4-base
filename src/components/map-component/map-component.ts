import {Component, ViewChild, ElementRef} from '@angular/core';
import {GoogleMapsLoader} from './../../providers/gmap-loader-service';

declare var google;

@Component({selector: 'map-component', templateUrl: 'map-component.html'})

export class MapComponent {
  @ViewChild('map')mapElement : ElementRef;
  map : any;
  isMapReady = false;

  constructor() {
    GoogleMapsLoader
      .load()
      .then(res => {
        this.isMapReady = true;
        console.log('Map is loaded');
      });
  }

  renderMap() {
    console.log('Render Map');

    setTimeout(() => {
      this.map = new google
        .maps
        .Map(this.mapElement.nativeElement, {
          zoom: 14,
          center: {
            lat: 10.802037,
            lng: 106.639689
          }
        });

      let image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images' +
          '/beachflag.png';
      let centerPoint = new google
        .maps
        .Marker({
          position: new google
            .maps
            .LatLng(10.802037, 106.639689),
          map: this.map,
          title: "Hello World!"
        });
      let point1 = new google
        .maps
        .Marker({
          position: new google
            .maps
            .LatLng(10.801994, 106.633716),
          map: this.map,
          title: "Hello World!",
          icon: image
        });
      let point2 = new google
        .maps
        .Marker({
          position: new google
            .maps
            .LatLng(10.806569, 106.640310),
          map: this.map,
          title: "Hello World!",
          icon: image
        });
      let point3 = new google
        .maps
        .Marker({
          position: new google
            .maps
            .LatLng(10.803074, 106.644752),
          map: this.map,
          title: "Hello World!",
          icon: image
        })
    }, 200);
  }
}