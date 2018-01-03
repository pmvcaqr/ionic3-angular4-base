import {Injectable} from '@angular/core';
import {Push, PushObject, PushOptions} from '@ionic-native/push';

const options : PushOptions = {
  android: {}
}

@Injectable()
export class PushNotificationService {

  pushObject : PushObject;

  constructor(public push : Push) {
    console.log('Hello PushNotificationService Provider');
  }

  init() {
    this
      .push
      .hasPermission()
      .then((res) => {
        if (res.isEnabled) {
          console.log('Has permission');

          this.pushObject = this
            .push
            .init(options);

          this
            .pushObject
            .on('notification')
            .subscribe((notification : any) => {
              console.log('Receive notification: ', notification);
            });

          this
            .pushObject
            .on('registration')
            .subscribe((registration : any) => {
              console.log('Push registered');
            });

          this
            .pushObject
            .on('error')
            .subscribe((error : any) => {
              console.log('Error notification: ', error);
            });
        } else {
          console.log('Has no permission');
        }
      });
  }
}