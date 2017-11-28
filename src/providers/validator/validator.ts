import {FormControl} from '@angular/forms';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the ValidatorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ValidatorProvider {

  constructor() {
    console.log('Hello ValidatorProvider Provider');
  }

  static validateEmail(control : FormControl) {
    return new Promise(resolve => {
      let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailPattern.test(control.value)) {
        resolve({invalidEmail: true});
      }

      resolve(null);
    })
  }

}
