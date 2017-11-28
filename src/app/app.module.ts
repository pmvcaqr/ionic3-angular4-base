import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SharedModule } from './shared.module'

import {WelcomePage} from '../pages/welcome/welcome';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';

import {PropertyService} from "../providers/property-service-mock";
import {BrokerService} from "../providers/broker-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ValidatorProvider } from '../providers/validator/validator';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    BrokerListPage,
    BrokerDetailPage
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    BrokerListPage,
    BrokerDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PropertyService,
    BrokerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, ValidatorProvider
  ]
})
export class AppModule {}
