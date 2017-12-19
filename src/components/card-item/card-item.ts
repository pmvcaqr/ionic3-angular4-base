import {Component, Input} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

import {DetailPage} from '../../pages/detail/detail';
import {PropertyService} from '../../providers/property-service-mock';

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

  constructor(public navCtrl : NavController, private alertCtrl: AlertController, private propertyService: PropertyService) {
    console.log('Hello CardItemComponent Component');
    this.text = 'Hello World';
  }

  openDetail(property : any) {
    this
      .navCtrl
      .push(DetailPage, property);
  }

  deleteItem() {
    let confirm = this
      .alertCtrl
      .create({
        title: 'Confirmation?',
        message: 'Are you sure to remove this item?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              console.log('Disagree clicked');
            }
          }, {
            text: 'Sure',
            handler: () => {
              console.log('Agree clicked');
              this
                .propertyService
                .removeItem(this.item.id);
            }
          }
        ]
      });
    confirm.present();
  }

}
