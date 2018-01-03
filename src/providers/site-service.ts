import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Storage} from '@ionic/storage';

import {SERVER_URL} from './config';

let getSiteURL = SERVER_URL + 'MobOps/chantier/search?libelle=&pageNumber=1&order=ASC&access_token=';

@Injectable()
export class SiteService {
  constructor(private http : Http, private storage: Storage) {
    console.log('Hello PushNotificationService Provider');
  }

  getList() {
    var userToken = '';
    var url = '';

    this
      .storage
      .get('userToken')
      .then((value) => {
        userToken = value;
      });

    return this
      .http
      .put(getSiteURL, null)
      .map(res => res.json())
      .toPromise();
  }
}