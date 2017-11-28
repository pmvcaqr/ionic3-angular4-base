import {ValidatorProvider} from './../../providers/validator/validator';
import {Component} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ActionSheetController, NavController, NavParams, ToastController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';

@Component({selector: 'page-property-detail', templateUrl: 'property-detail.html'})
export class PropertyDetailPage {
  property : any;
  data = {
    startTime: new Date()
  }

  selectedLanguage : any;
  languages = ['English', 'French', 'Germany'];

  validations_form : FormGroup;
  validation_messages = {
    'username': [
      {
        type: 'required',
        message: 'Username is required.'
      }, {
        type: 'minlength',
        message: 'Username must be at least 5 characters long.'
      }, {
        type: 'maxlength',
        message: 'Username cannot be more than 25 characters long.'
      }, {
        type: 'pattern',
        message: 'Your username must contain only numbers and letters.'
      }, {
        type: 'validUsername',
        message: 'Your username has already been taken.'
      }
    ],
    'email': [
      {
        type: 'required',
        message: 'Email is required.'
      }, {
        type: 'invalidEmail',
        message: 'Enter a valid email.'
      }
    ],
    'datetime': [

    ]
  }

  constructor(public actionSheetCtrl : ActionSheetController, public navCtrl : NavController, public navParams : NavParams, public propertyService : PropertyService, public toastCtrl : ToastController, public formBuilder : FormBuilder) {
    this.property = this.navParams.data;
    propertyService
      .findById(this.property.id)
      .then(property => this.property = property);
  }

  ionViewWillLoad() {
    this.validations_form = this
      .formBuilder
      .group({
        username: new FormControl('', Validators.compose([
          Validators.maxLength(25),
          Validators.minLength(5),
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
          Validators.required
        ])),
        datetime: new FormControl(new Date().toISOString(), Validators.required), // init control with today value
        email: new FormControl('', [Validators.required], [ValidatorProvider.validateEmail])  // async validator must be placed at 3rd argument
      });
  }

  logError() {
    console.log(this.validations_form.get('email').errors);
  }
}
