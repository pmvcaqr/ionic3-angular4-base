import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';

import 'rxjs/add/operator/toPromise';

let loginURL = SERVER_URL + 'MobOps/springRestClient/sendTokenRequest/';

@Injectable()
export class AuthService {
  constructor(private http : Http) {
    console.log('Hello PushNotificationService Provider');
  }

  login() {
    return this
      .http
      .put(loginURL, null)
      .map(res => res.json())
      .toPromise();
  }
}