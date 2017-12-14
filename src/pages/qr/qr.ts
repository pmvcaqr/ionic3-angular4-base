import {Component} from '@angular/core';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner';

@Component({selector: 'page-qr', templateUrl: 'qr.html'})
export class QRPage {
  scanResult: string = '';
  constructor(private qrScanner : QRScanner) {}

  ionViewDidEnter() {}

  startScan() {
    // Optionally request the permission early
    this
      .qrScanner
      .prepare()
      .then((status : QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted start scanning
          let scanSub = this
            .qrScanner
            .scan()
            .subscribe((text : string) => {
              console.log('Scanned something', text);
              
              alert(text);             
              // this.scanResult = text;
              this
                .qrScanner
                .hide(); // hide camera preview
              scanSub.unsubscribe(); // stop scanning

              // show the app body
              window.document.querySelector('ion-app').classList.remove('transparent-body');
            });

          // show camera preview
          this
            .qrScanner
            .show();
            
            // the camera is hidden below the app body
            window.document.querySelector('ion-app').classList.add('transparent-body');

          // wait for user to scan something, then the observable callback will be called

        } else if (status.denied) {
          // camera permission was permanently denied you must use
          // QRScanner.openSettings() method to guide the user to the settings page then
          // they can grant the permission from there
          this.qrScanner.openSettings();
        } else {
          // permission was denied, but not permanently. You can ask for permission again
          // at a later time.
        }
      })
      .catch((e : any) => console.log('Error is', e));
  }
}