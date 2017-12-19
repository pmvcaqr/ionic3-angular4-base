import {Component, ViewChild, ElementRef} from '@angular/core';
import {Config, NavController, PopoverController} from 'ionic-angular';
// import {GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions} from
// '@ionic-native/google-maps';

import {PropertyService} from '../../providers/property-service-mock';
import {DetailPage} from '../detail/detail';
import {FilterPopupComponent} from '../../components/filter-popup/filter-popup';
import {MediaComponent} from '../../components/media-component/media-component';
import {QRComponent} from '../../components/qr-component/qr-component';
import { MapComponent } from '../../components/map-component/map-component';

declare var google;

@Component({selector: 'page-list', templateUrl: 'list.html'})
export class ListPage {
  @ViewChild('mapComponent') mapComp: MapComponent;

  properties : Array < any > = [
    {
      lat: 10.802979,
      long: 106.639977
    }
  ];
  posts : Array < any >;
  imgData : string;
  scanData : string;
  searchKey : string = "";
  isSearchByFilter = false;
  selectedFilter : string;
  listMode : string = "cardList";
  viewMode : string = 'chantiers';

  constructor(public navCtrl : NavController, public service : PropertyService, public config : Config, private popoverCtrl : PopoverController) {
    this.findAll();
  }

  ionViewDidLoad() {
    // this.initMap();
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

    popover.onDidDismiss(data => {
      switch (data) {
        case 1:
          this
            .service
            .findByName('Tolbiac')
            .then(data => {
              this.properties = data;
            })
            .catch(error => alert(JSON.stringify(error)));
          this.isSearchByFilter = true;
          this.selectedFilter = 'Opt 1'
          break;
        case 2:
          this
            .service
            .findByName('Pharmaster')
            .then(data => {
              this.properties = data;
            })
            .catch(error => alert(JSON.stringify(error)));
          this.isSearchByFilter = true;
          this.selectedFilter = 'Opt 2'
          break;
        case 3:
          this
            .service
            .findByName('Chantier')
            .then(data => {
              this.properties = data;
            })
            .catch(error => alert(JSON.stringify(error)));
          this.isSearchByFilter = true;
          this.selectedFilter = 'Opt 3'
          break;
      }
    })

    popover.present({ev: event});
  }

  removeFilter() {
    this.isSearchByFilter = false;
    this.searchKey = '';
    this
      .service
      .findAll()
      .then(data => this.properties = data)
      .catch(error => alert(error));
  }

  initMap() {
    // let mapOptions : GoogleMapOptions = {   camera: {     target: {       lat:
    // 43.0741904,       lng: -89.3809802     },     zoom: 18,     tilt: 30   } };
    // this.map = GoogleMaps.create(this.mapElement.nativeElement, mapOptions); this
    // .map .one(GoogleMapsEvent.MAP_READY) .then(() => {   console.log('GMap is
    // ready!');   this     .map     .addMarker({       title: 'Ionic',       icon:
    // 'blue',       animation: 'DROP',       position: {         lat: 43.0741904,
    // lng: -89.3809802       }     })     .then(marker => {       marker
    // .on(GoogleMapsEvent.MARKER_CLICK)         .subscribe(() => {
    // alert('clicked');         });     }); })

    this.mapComp.renderMap();
  }

  onImageSelected(data : string) : void {
    this.imgData = data;
  }

  onScanned(data : string) {
    this.scanData = data;
    alert(data);
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {

      this
        .service
        .findAll()
        .then(data => {
          this.properties = this
            .properties
            .concat(data);
          console.log('Async operation has ended');
          infiniteScroll.complete();
        })
        .catch(error => alert(error));
    }, 1000)
  }
}