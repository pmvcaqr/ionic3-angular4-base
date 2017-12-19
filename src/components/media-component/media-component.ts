import {Component, Output, EventEmitter} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({selector: 'media-component', templateUrl: 'media-component.html'})

export class MediaComponent {
  @Output() imgData: EventEmitter<string> = new EventEmitter<string>();

  private options : CameraOptions = {
    quality: 60,
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
        this.imgData.emit(base64Image);
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
        let base64Image: string = 'data:image/jpeg;base64,' + imageData;
        this.imgData.emit(base64Image);
      }, (err) => {
        // Handle error
      });
  }

}