import {Component} from '@angular/core';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner';

import { QRComponent } from '../../components/qr-component/qr-component';

@Component({selector: 'page-qr', templateUrl: 'qr.html'})
export class QRPage {
  scanResult: string = '';
  constructor(private qrScanner : QRScanner) {}

  ionViewDidEnter() {}

  onScanned(data: string) {
    this.scanResult = data;
    alert(data);
  }
}