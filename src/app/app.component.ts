import { Observable } from 'rxjs/Observable';
import {Component, ViewChild} from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
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

  constructor(public platform : Platform, public statusBar : StatusBar, public splashScreen : SplashScreen, private translate : TranslateService, private storage : Storage, private toastCtrl: ToastController) {
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
        // listen for network status
        this.networkConnectionHandler();

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

  private networkConnectionHandler() {
    var offline = Observable.fromEvent(document, "offline");
    var online = Observable.fromEvent(document, "online");

    offline.subscribe(() => {
      this.toastMessage(false);
    });

    online.subscribe(() => {
      this.toastMessage(true);
    });
  }

  private toastMessage(value) {
    let _message = value
      ? this
        .translate
        .instant('COMMON.NETWORK_GO_ONLINE_MESSAGE')
      : this
        .translate
        .instant('COMMON.NETWORK_GO_OFFLINE_MESSAGE');

    let toast = this
      .toastCtrl
      .create({message: _message, duration: 1500, position: 'top'});

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
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
