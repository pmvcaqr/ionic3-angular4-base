import { Component, ApplicationRef } from '@angular/core';
import {Platform, ToastController} from 'ionic-angular';
import {Network} from '@ionic-native/network';

import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';

/**
 * Generated class for the MasonryItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({selector: 'connection-status-indicator', templateUrl: 'connection-status-indicator.html'})
export class ConnectionStatusIndicatorComponent {
  isOnline: boolean;
  isOnlineObservable: Subject<boolean> = new Subject<boolean>();
  message: string;

  constructor(private network : Network, public platform : Platform, private appRef : ApplicationRef, private toastCtrl : ToastController) {
    console.log('Hello ConnectionStatusIndicatorComponent Component');
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first
    // call to ngOnChanges. Add 'implements OnInit' to the class.
    var offline = Observable.fromEvent(document, "offline");
    var online = Observable.fromEvent(document, "online");

    offline.subscribe(() => {
      this.isOnlineObservable.next(false);
      this
        .appRef
        .tick();
    });

    online.subscribe(() => {
      this.isOnlineObservable.next(true);
      this
        .appRef
        .tick();
    });

    this.isOnlineObservable.subscribe((value) => {
      this.isOnline = value;
      this.message = value ? 'You are online' : 'You are offline';
    });

    this.isOnlineObservable.next(this.network.type != 'none');
  }

  popupMessage() {
    let toast = this
      .toastCtrl
      .create({message: this.message, duration: 1500, position: 'top'});

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
