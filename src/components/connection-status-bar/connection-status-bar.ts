import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Network} from '@ionic-native/network';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

/**
 * Generated class for the MasonryItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({selector: 'connection-status-bar', templateUrl: 'connection-status-bar.html'})
export class ConnectionStatusBarComponent {
  message: string = 'No connection';

  constructor(private network : Network, public platform : Platform) {
    console.log('Hello ConnectionStatusBarComponent Component');

    var offline = Observable.fromEvent(document, "offline");
    var online = Observable.fromEvent(document, "online");

    offline.subscribe(() => {
        this.message = 'No connection';
    });

    online.subscribe(()=>{
      this.message = 'Connected';
    });
  }
}
