import {Component, ViewChild, ElementRef} from '@angular/core';
import {Config, NavController, PopoverController} from 'ionic-angular';
// import {GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions} from
// '@ionic-native/google-maps';

import {PropertyService} from '../../providers/property-service-mock';
import {DetailPage} from '../detail/detail';
import {FilterPopupComponent} from '../../components/filter-popup/filter-popup';
import { MediaComponent } from '../../components/media-component/media-component';

declare var google;

@Component({selector: 'page-list', templateUrl: 'list.html'})
export class ListPage {
  @ViewChild('map')mapElement : ElementRef;
  map : any;

  properties : Array < any > = [
    {
      lat: 10.802979,
      long: 106.639977
    }
  ];
  posts : Array < any >;
  searchKey : string = "";
  listMode : string = "cardList";
  viewMode : string = 'chantiers';

  constructor(public navCtrl : NavController, public service : PropertyService, public config : Config, private popoverCtrl : PopoverController) {
    this.findAll();
  }

  ionViewDidLoad() {
    this.initMap();
  }

  openPropertyDetail(property : any) {
    this
      .navCtrl
      .push(DetailPage, property);
  }

  onInput(event) {
    this
      .service
      .findByName(this.searchKey)
      .then(data => {
        this.properties = data;
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  onCancel(event) {
    this.findAll();
  }

  findAll() {
    this
      .service
      .findAll()
      .then(data => this.properties = data)
      .catch(error => alert(error));

    this.posts = [
      {
        description: 'Description',
        image: 'assets/img/pict1.jpg'
      }, {
        description: '',
        image: 'assets/img/pict9.jpg'
      }, {
        description: 'Description',
        image: 'assets/img/pict4.jpg'
      }, {
        description: 'Description',
        image: 'assets/img/pict2.jpg'
      }, {
        description: '',
        image: 'assets/img/pict7.jpg'
      }, {
        description: '',
        image: 'assets/img/pict8.jpg'
      }, {
        description: 'Description',
        image: 'assets/img/pict3.jpg'
      }, {
        description: 'Description',
        image: 'assets/img/pict10.jpg'
      }, {
        description: 'Description',
        image: 'assets/img/pict9.jpg'
      }, {
        description: 'Description',
        image: 'assets/img/pict1.jpg'
      }, {
        description: 'Description',
        image: 'assets/img/pict1.jpg'
      }
    ];
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this
      .service
      .findAll()
      .then(data => {
        this.properties = data;
        refresher.complete()
      })
      .catch(error => {
        alert(error);
        refresher.complete()
      });
  }

  showFilter(event) {
    let popover = this
      .popoverCtrl
      .create(FilterPopupComponent);

    popover.present({ev: event});
  }

  initMap() {
    // let mapOptions : GoogleMapOptions = {   camera: {     target: {       lat:
    // 43.0741904,       lng: -89.3809802     },     zoom: 18,     tilt: 30   } };
    // this.map = GoogleMaps.create(this.mapElement.nativeElement, mapOptions); this
    // .map .one(GoogleMapsEvent.MAP_READY) .then(() => {   console.log('GMap is
    // ready!');   this     .map     .addMarker({       title: 'Ionic',       icon:
    // 'blue',       animation: 'DROP',       position: {         lat: 43.0741904,
    //     lng: -89.3809802       }     })     .then(marker => {       marker
    // .on(GoogleMapsEvent.MARKER_CLICK)         .subscribe(() => {
    // alert('clicked');         });     }); })

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