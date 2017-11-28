import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {AboutPage} from '../pages/about/about';

export interface MenuItem {
  title : string;
  component : any;
  icon : string;
}

@Component({templateUrl: 'app.html'})
export class MyApp {
  @ViewChild(Nav)nav : Nav;

  rootPage : any = WelcomePage;

  internalMenuItems : Array < MenuItem >;
  accountMenuItems : Array < MenuItem >;

  constructor(public platform : Platform, public statusBar : StatusBar, public splashScreen : SplashScreen) {
    this.initializeApp();

    this.internalMenuItems = [
      {
        title: 'Lists',
        component: PropertyListPage,
        icon: 'md-list'
      }
    ];

    this.accountMenuItems = [
      {
        title: 'Login',
        component: LoginPage,
        icon: 'md-log-in'
      }, {
        title: 'Logout',
        component: AboutPage,
        icon: 'md-log-out'
      }
    ];

  }

  initializeApp() {
    this
      .platform
      .ready()
      .then(() => {
        // config native components
        this
          .statusBar
          .styleLightContent();
        this
          .splashScreen
          .hide();
      });
  }

  openPage(page) {
    this
      .nav
      .setRoot(page.component);
  }
}
