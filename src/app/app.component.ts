import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';

import {ListPage} from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import {AboutPage} from '../pages/about/about';
import {SettingsPage} from '../pages/settings/settings';
import { QRPage } from '../pages/qr/qr';

export interface MenuItem {
  title : string;
  component : any;
  icon : string;
}

@Component({templateUrl: 'app.html'})
export class MyApp {
  @ViewChild(Nav)nav : Nav;

  rootPage : any = LoginPage;

  internalMenuItems : Array < MenuItem >;
  functionMenuItems : Array < MenuItem >;
  otherMenuItems : Array < MenuItem >;
  accountMenuItems : Array < MenuItem >;

  constructor(public platform : Platform, public statusBar : StatusBar, public splashScreen : SplashScreen, private translate : TranslateService, private storage : Storage) {
    this.initializeApp();

    this.internalMenuItems = [
      {
        title: 'Chantiers',
        component: ListPage,
        icon: 'md-list'
      }
    ];

    this.functionMenuItems = [
      {
        title: 'Scanner QR',
        component: QRPage,
        icon: 'md-qr-scanner'
      }, {
        title: 'Localizer',
        component: AboutPage,
        icon: 'md-globe'
      }
    ];

    this.otherMenuItems = [
      {
        title: 'Settings',
        component: SettingsPage,
        icon: 'md-settings'
      }, {
        title: 'About',
        component: AboutPage,
        icon: 'md-information-circle'
      }
    ];

    this.accountMenuItems = [
      {
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
        // set app language
        this
          .translate
          .setDefaultLang('en');

        this
          .storage
          .get('settings')
          .then((value) => {
            if (value) {
              let lang = 'en';
              if (value == 'English') {
                lang = 'en';
              } else {
                lang = 'fr';
              }
              this
                .translate
                .use(lang);
            }
          });

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

  logout() {
    this
      .nav
      .setRoot(LoginPage);

    this
      .translate
      .get('MENU_HEADER_FUNCTION')
      .subscribe(value => {
        // value is our translated string
        console.log(value);
      })
  }
}
