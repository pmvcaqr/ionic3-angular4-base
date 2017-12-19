import {Component} from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterPopupComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({selector: 'filter-popup', templateUrl: 'filter-popup.html'})
export class FilterPopupComponent {

  text : string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello FilterPopupComponent Component');
    this.text = 'Hello World';
  }

  deleteItem() {}

  selectOption(option) {
    this.viewCtrl.dismiss(option);
  }
}
