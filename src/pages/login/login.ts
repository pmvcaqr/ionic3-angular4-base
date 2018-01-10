import {User} from './../../models/user';
import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';

import {NavController, MenuController, LoadingController} from 'ionic-angular';

import {ListPage} from '../list/list';
import {PushNotificationService} from './../../providers/push-notification';
import {AuthService} from '../../providers/auth-service';

@Component({selector: 'page-login', templateUrl: 'login.html'})
export class LoginPage {
  user : User = new User();
  message : string = '';
  isShowPassword = false;

  constructor(public navCtrl : NavController, private menuCtrl : MenuController, private loadingCtrl : LoadingController, private pushService : PushNotificationService, private authService : AuthService, private storage : Storage) {}

  ionViewDidEnter() {
    this
      .menuCtrl
      .enable(false);
  }

  private validateLoginInfo() : boolean {
    if(!this.user.username || !this.user.password) {
      this.message = 'Please provide suitable data';
      return false;
    } else {
      this.message = '';
      return true;
    }
  }

  // TODO: real Login service with API and usertoken for Push Notification
  login() {
    if (this.validateLoginInfo()) {
      let loading = this
        .loadingCtrl
        .create({content: 'Please wait...'});

      // loading.present(); this   .authService   .login()   .then((rs : any) => {
      // this       .storage       .set('userToken', rs.access_token);     this
      // .navCtrl       .setRoot(ListPage);     this       .menuCtrl
      // .enable(true);     this       .pushService       .init();
      // loading.dismiss();   })   .catch(err => {     this       .storage
      // .set('userToken', 0);     this       .navCtrl       .setRoot(ListPage);
      // this       .menuCtrl       .enable(true);     // this     //   .pushService
      //   //   .init();     loading.dismiss();   })

      this
        .navCtrl
        .setRoot(ListPage);
      this
        .menuCtrl
        .enable(true);

    }
  }
}
