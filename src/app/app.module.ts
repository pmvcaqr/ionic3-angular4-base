import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule  } from '@ionic/storage';

import { MyApp } from './app.component';
import { SharedModule } from './shared.module';

import {WelcomePage} from '../pages/welcome/welcome';
import {ListPage} from '../pages/list/list';
import {DetailPage} from '../pages/detail/detail';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';
import { SettingsPage } from './../pages/settings/settings';
import { QRPage } from '../pages/qr/qr';
import { LocalizePage } from '../pages/localize/localize';

import {PropertyService} from "../providers/property-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import {
  GoogleMaps
 } from '@ionic-native/google-maps';
import { QRScanner } from '@ionic-native/qr-scanner';
import { Camera } from '@ionic-native/camera';
import { Push } from '@ionic-native/push';

import { ValidatorProvider } from '../providers/validator/validator';
import { GoogleMapsLoader } from '../providers/gmap-loader-service';
import { PushNotificationService } from './../providers/push-notification';
import { AuthService } from '../providers/auth-service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    WelcomePage,
    AboutPage,
    ListPage,
    DetailPage,
    SettingsPage,
    QRPage,
    LocalizePage
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    WelcomePage,
    AboutPage,
    ListPage,
    DetailPage,
    SettingsPage,
    QRPage,
    LocalizePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    GoogleMaps,
    QRScanner,
    Camera,
    Push,

    AuthService,
    PropertyService,
    ValidatorProvider,
    GoogleMapsLoader,
    PushNotificationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}