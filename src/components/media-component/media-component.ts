import {Component} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({selector: 'media-component', templateUrl: 'media-component.html'})

export class MediaComponent {
  private options : CameraOptions = {
    quality: 80,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera : Camera) {}

  openCamera() {
    this.options.sourceType = this.camera.PictureSourceType.CAMERA;
    this
      .camera
      .getPicture(this.options)
      .then((imageData) => {
        // imageData is either a base64 encoded string or a file URI If it's base64:
        let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
  }

  openGallery() {
    this.options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;

    this
      .camera
      .getPicture(this.options)
      .then((imageData) => {
        // imageData is either a base64 encoded string or a file URI If it's base64:
        let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
  }

}