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
import {QRPage} from '../pages/qr/qr';
import {LocalizePage} from '../pages/localize/localize';

export interface MenuItem {
  title : string;
  component : any;
  icon : string;
}

@Component({templateUrl: 'app.html'})
export class MyApp {
  @ViewChild(Nav)nav : Nav;

  rootPage : any = LoginPage;
  activePage : any;

  internalMenuItems : Array < MenuItem >;
  functionMenuItems : Array < MenuItem >;
  otherMenuItems : Array < MenuItem >;
  accountMenuItems : Array < MenuItem >;

  constructor(public platform : Platform, public statusBar : StatusBar, public splashScreen : SplashScreen, private translate : TranslateService, private storage : Storage) {
    this.initializeApp();

    this.internalMenuItems = [
      {
        title: 'COMMON.MENU_SITES',
        component: ListPage,
        icon: 'md-list'
      }
    ];

    this.functionMenuItems = [
      {
        title: this.translate.instant('COMMON.MENU_SCANNER'),
        component: QRPage,
        icon: 'md-qr-scanner'
      }, {
        title: this.translate.instant('COMMON.MENU_LOCATION'),
        component: LocalizePage,
        icon: 'md-globe'
      }
    ];

    this.otherMenuItems = [
      {
        title:  this.translate.instant('COMMON.MENU_SETTINGS'),
        component: SettingsPage,
        icon: 'md-settings'
      }, {
        title:  this.translate.instant('COMMON.MENU_ABOUT'),
        component: AboutPage,
        icon: 'md-information-circle'
      }
    ];

    this.accountMenuItems = [
      {
        title:  this.translate.instant('COMMON.MENU_LOGOUT'),
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

        this.prepareMenuItem();

        this.activePage = this.internalMenuItems[0];
      });
  }

  private prepareMenuItem() {
    this.translate.get('COMMON.MENU_SITES').subscribe(value => {
      this.internalMenuItems[0].title = value;
    });
  }

  getActiveMenu(menuItem) {
    return menuItem == this.activePage;
  }

  openPage(page) {
    this.activePage = page;
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
