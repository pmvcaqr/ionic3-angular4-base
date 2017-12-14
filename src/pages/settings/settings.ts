import {Component, NgZone} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Storage} from '@ionic/storage';

@Component({selector: 'page-settings', templateUrl: 'settings.html'})
export class SettingsPage {
  // selectedLanguage = {
  //   label: 'English',
  //   value: 'en'
  // };
  // languages = [
  //   {
  //     label: 'English',
  //     value: 'en'
  //   }, {
  //     label: 'French',
  //     value: 'fr'
  //   }, {
  //     label: 'German',
  //     value: 'de'
  //   }
  // ];

  languages: string[] = ['English', 'French', 'German'];
  selectedLanguage: string = 'English';

  constructor(private translate : TranslateService, private storage : Storage, private zone : NgZone) {
    this.getSettings();
  }

  ionViewWillLeave() {
    this.saveSettings();
  }

  private getSettings() {
    // this
    //   .zone
    //   .run(() => {
        
    //   });

      this
      .storage
      .get('settings')
      .then((value) => {
        this.selectedLanguage = value;
      });
  }

  private saveSettings() {
    this
      .storage
      .set('settings', this.selectedLanguage);
  }

  changeLanguage(event) {
    let lang = 'en';
    if (this.selectedLanguage == 'English') {
      lang = 'en';
    } else {
      lang = 'fr';
    }
    this
      .translate
      .use(lang);
  }
}
