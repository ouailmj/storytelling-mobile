import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import {  LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EventProvider } from '../../providers/event/event';
// import { Camera, CameraOptions } from '@ionic-native/camera';
/**import { updateImgs } from 'ionic-angular/components/content/content';

 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

 
  imageURI:any;
  imageFileName:any;

  constructor(public navCtrl: NavController,
    private camera: Camera,
    public eventProvider: EventProvider) {}

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      
    });
  }

  uploadFile() {
    // this.imageURI
    this.eventProvider.uploadFile(this.imageURI)
    
  }


 

}
