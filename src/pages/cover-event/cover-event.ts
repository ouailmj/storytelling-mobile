import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, LoadingController, NavController, NavParams, Platform} from 'ionic-angular';
import {PaymentPage} from "../payment/payment";
import {EventProvider} from "../../providers/event/event";
import {InviteFriendsPage} from "../invite-friends/invite-friends";
import {EventChallengePage} from "../event-challenge/event-challenge";
import {Storage} from "@ionic/storage";
import {CameraProvider} from "../../providers/util/camera.provider";
import {EventRoutes} from "../../providers/event/event.routes";

/**
 * Generated class for the CoverEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cover-event',
  templateUrl: 'cover-event.html',
})
export class CoverEventPage {
    pictureOne :any = null ;
    pictureThree :any = null;
    pictureTwo :any = null ;
    videoCover :any = null ;
    videoYoutubeCover :any = null ;
    coverType :string = 'image' ;
    loading: any;
  constructor(
      public navCtrl: NavController,
      public loadingCtrl: LoadingController,
      public navParams: NavParams,
      public cameraProvider: CameraProvider,
      public platform: Platform,
      public actionsheetCtrl: ActionSheetController,
      private eventProvider: EventProvider,
      private storage: Storage,
      )
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoverEventPage');
  }


  onSubmit(){
      this.showLoader()
      this.storage.get('currentEvent').then(event=> {
          this.uploadImage(event.id).then(()=>{

              this.eventProvider.isFreePlan(event.eventPurchase).then(res => {
                  this.loading.dismiss();
                  if (res) {
                      this.navCtrl.push(InviteFriendsPage)
                  } else {
                      this.eventProvider.isTotalPayed().then(res =>{

                          if(res.isPayed){
                              this.navCtrl.push(InviteFriendsPage);

                          }else{
                              this.navCtrl.push(PaymentPage);

                          }
                      }).catch(err=>{
                          console.log(err)
                      })
                  }
                  console.log(res)
              }).catch(error => {
                  console.log(error)
              })
          })
      }).catch(err=>{ console.log(err)})
  }

  showLoader(){
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });

        this.loading.present();
    }


  changePicture(pictureData) {

        const actionsheet = this.actionsheetCtrl.create({
            title: 'upload picture',
            buttons: [
                {
                    text: 'camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: () => {
                        this.takePicture(pictureData);
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: () => {
                        this.getPicture(pictureData);
                    }
                },
                {
                    text: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    role: 'destructive',
                    handler: () => {
                        console.log('the user has cancelled the interaction.');
                    }
                }
            ]
        });

        return actionsheet.present();

    }

  takePicture(pictureData) {
        const loading = this.loadingCtrl.create();

        loading.present();
        return this.cameraProvider.getPictureFromCamera(false).then(picture => {
            if (picture) {
                switch (pictureData) {
                    case 'pictureOne':
                        this.pictureOne=picture;
                        break;
                    case 'pictureThree':
                        this.pictureThree=picture;
                        break;
                    case 'pictureTwo':
                        this.pictureTwo=picture;
                        break;
                    default:
                        break;

                }
            }
            loading.dismiss();
        }, error => {
            alert(error);
        });
    }

  getPicture(pictureData) {
        const loading = this.loadingCtrl.create();

        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary(false).then(picture => {
            if (picture) {
                switch (pictureData) {
                    case 'pictureOne':
                        this.pictureOne=picture;
                        break;
                    case 'pictureThree':
                        this.pictureThree = picture;
                        break;
                    case 'pictureTwo':
                        this.pictureTwo = picture;
                        break;
                    default:
                        break;

                }
            }
            loading.dismiss();
        }, error => {
            alert(error);
        });
    }


  uploadImage(id){
      let arrayPict =  new Array(this.pictureOne, this.pictureTwo, this.pictureThree)
      let step = null;
      return new Promise((resolve, reject) => {

          Object.keys(arrayPict).forEach((key)=>{
              switch (key){
                  case '0':
                      step = 'firstImageCover'
                      break
                  case '1':
                      step = 'secondImageCover'
                      break
                  case '2':
                      step = 'thirdImageCover'
                      break
                  default:
                      step = 'firstImageCover'
              }

              console.log('arrayPict[key]', arrayPict[key])
              if(arrayPict[key] != null ){
                  console.log('arrayPict[key] is not null')
                  this.eventProvider.uploadFile(arrayPict[key], 'imageFile', EventRoutes.apiUploadCoverEvent + id + '/'+step, false).then((res)=>{
                      console.log(res , 'image '+key+'is uploaded')
                      if(step === 'thirdImageCover'){
                          resolve(res)
                      }
                  }).catch((err)=>{
                      console.log(err)
                      reject(err)
                  });
              }else{resolve('ok')}
          })


      })



    }

}
