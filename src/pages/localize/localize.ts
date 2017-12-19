import {Component, ViewChild} from '@angular/core';
import { MapComponent } from '../../components/map-component/map-component';

@Component({selector: 'page-localize', templateUrl: 'localize.html'})
export class LocalizePage {
  @ViewChild('mapComponent') mapComp: MapComponent;
  constructor() {}

  ionViewDidEnter() {
    this.mapComp.renderMap();
  }
}