import {Component, Input} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

import {DetailPage} from '../../pages/detail/detail';
import {PropertyService} from '../../providers/property-service-mock';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(public navCtrl : NavController, private alertCtrl: AlertController, private propertyService: PropertyService, private translate: TranslateService) {
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
        title: this.translate.instant('COMMON.CONFIRMATION_TITLE'),
        message: this.translate.instant('COMMON.DELETE_SITE_MESSAGE'),
        buttons: [
          {
            text: this.translate.instant('COMMON.CANCEL'),
            handler: () => {
              console.log('Disagree clicked');
            }
          }, {
            text: this.translate.instant('COMMON.SURE'),
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
