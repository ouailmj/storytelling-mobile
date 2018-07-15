import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { Platform, ActionSheetController, LoadingController } from 'ionic-angular';
import { EventProvider } from '../event/event';

@Injectable()
export class CameraProvider {
  choosePicture: any;

  constructor(
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public eventProvider : EventProvider


  ) {
  }

  getPictureFromCamera(allowEdit = true) {
    return this.getImage(this.camera.PictureSourceType.CAMERA, true,    50,  allowEdit,  true);
  }

  getPictureFromPhotoLibrary(allowEdit = true) {
    return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY, true,    50,  allowEdit,  true);
  }

  // This method takes optional parameters to make it more customizable
  getImage(pictureSourceType, crop = false, quality = 1000, allowEdit = true, saveToAlbum = true) {
    // const options = {
    //   quality,
    //   allowEdit,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   targetWidth: 1000,
    //   targetHeight: 1000,
    //   sourceType: pictureSourceType,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   saveToPhotoAlbum: saveToAlbum
    // };
    const options = {
      quality: 50,
      allowEdit,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:pictureSourceType,
      saveToPhotoAlbum: saveToAlbum
    };

    // If set to crop, restricts the image to a square of 600 by 600
    if (crop) {
      options['targetWidth'] = 600;
      options['targetHeight'] = 600;
    }

    return this.camera.getPicture(options).then(imageData => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      return base64Image ;
    }, error => {
      console.log('CAMERA ERROR -> ' + JSON.stringify(error));
    });
  }


 


  takePicture() {
    const loading = this.loadingCtrl.create();
    loading.present();

  

      this.getPictureFromCamera().then(picture => {
        if (picture) {
          this.choosePicture = picture;

          return picture;
        }
        loading.dismiss();
      }, error => {
        alert(error);
      });
    
   
     


  }


  getPicture() {
    const loading = this.loadingCtrl.create();

    loading.present();

    
    
    this.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.choosePicture = picture;
        return picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  
  }



}
