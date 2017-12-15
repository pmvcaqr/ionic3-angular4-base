import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';

import {DetailPage} from '../../pages/detail/detail';

/**
 * Generated class for the CardItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({selector: 'card-item', templateUrl: 'card-item.html'})
export class CardItemComponent {
  @Input()item : any = null;

  text : string;

  constructor(public navCtrl : NavController) {
    console.log('Hello CardItemComponent Component');
    this.text = 'Hello World';
  }

  openDetail(property : any) {
    this
      .navCtrl
      .push(DetailPage, property);
  }

  deleteItem() {}

}
