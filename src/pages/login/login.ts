import { User } from './../../models/user';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
  user: User =  new User();
  message: string = '';
  isShowPassword = false;

  constructor(public navCtrl: NavController) {

  }

  private validateLoginInfo(): boolean {
    if (!this.user.username || !this.user.password) {
      this.message = 'Please provide suitable data';
      return false;
    } else {
      this.message = '';
      return true;
    }
  }

  login() {
    if (this.validateLoginInfo()) {
      this.navCtrl.setRoot(ListPage);
      // this.navCtrl.push(WelcomePage, {}, {animate: false});
    }
  }
}
