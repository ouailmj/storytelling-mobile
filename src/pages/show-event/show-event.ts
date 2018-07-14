import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ActionSheetController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { CameraProvider } from '../../providers/util/camera.provider';
import { FileUploadResult } from '@ionic-native/file-transfer';
import {EventsPage} from "../events/events";
import {ScreenOrientation} from "@ionic-native/screen-orientation";

/**
 * Generated class for the ShowEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-event',
  templateUrl: 'show-event.html',
})
export class ShowEventPage {


  slides = [
    {
      image: "https://static1.squarespace.com/static/55c37beae4b0336075603f86/55c3cd80e4b01531b3208f2e/5603032be4b008bd0ad4e6fb/1486126957019/?format=1500w",
    },
    {
      image: "http://placehold.it/300/a8f",
    },
    {
      image: "http://placehold.it/300/fe8",
    }
  ];


  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;
  id_event:string;
  following = false;
  event :any={
    "id": '',
    "CreatedBy": {
        "firstName": "",
        "lastName": "",
        "fullName": "",
        "avatar": {
            "@id": "",
            "@type": "",
            "uploadedBy": "",
            "id": "",
            "downloadLink": "",
            "file": "",
            "expiresAt": "",
            "hasBeenDownloaded": "",
            "uploadedAt": "",
            "createdBy": "",
            "src": "",
            "type": "",
            "trashedAt": ""
        },
        "email": ""
    },
    "title": "",
    "startsAt": "",
    "endsAt": "",
    "place": "",
    "description": "",
    "videoGallery": [],
    "imagesGallery": [],
    "loadedMedias":''
  };
  posts = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
     public cameraProvider: CameraProvider,
     public platform: Platform,
     public actionsheetCtrl: ActionSheetController,
     public loadingCtrl: LoadingController,
     public eventProvider : EventProvider,
     public params: NavParams,
    public screenOrientation: ScreenOrientation
  ){

    platform.registerBackButtonAction(() => {
      this.navCtrl.push(EventsPage);
    },1);

  }

  ionViewDidLoad() {
    console.log('Hello ProfileFour Page');
    console.log(this.params.get('id_event'));
     this.id_event = this.params.get('id_event');

     console.log('id event ===< ',this.id_event);

    this.eventProvider.getEvent('/api/show-event/'+this.id_event).then(data=>{

      // let img = data['hydra:member'][0].imagesGallery[0].downloadLink === undefined ? '' : data['hydra:member'][0].imagesGallery[0].downloadLink;

      this.event = data['hydra:member'][0];
      this.event.CreatedBy.avatar.downloadLink =  this.event.CreatedBy.avatar.downloadLink == null ? './assets/imgs/avatar/marty-avatar.png' : this.event.CreatedBy.avatar.downloadLink ;


      this.slides[0].image = this.event.imagesGallery.img1 == null ? './assets/imgs/profile_image_1488952985.6978.png' : this.event.imagesGallery.img1 ;
      this.slides[1].image = this.event.imagesGallery.img2 == null ? './assets/imgs/profile_image_1488952985.6978.png' : this.event.imagesGallery.img2 ;
      this.slides[2].image = this.event.imagesGallery.img3 == null ? './assets/imgs/profile_image_1488952985.6978.png' : this.event.imagesGallery.img3 ;



      console.log('======>',data['hydra:member'][0].loadedMedias);



      this.posts =  data['hydra:member'][0].loadedMedias;


      console.log(this.event.imagesGallery.img1)
    })



    // this.lockPortrait()

  }

  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera(false).then(picture => {
      if (picture) {
        this.chosenPicture = picture;
        this.UploadImg();
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }



  UploadImg(){

    this.eventProvider.uploadFile(this.chosenPicture,'imageUpload',`/api/event/upload-media/${this.id_event}`,true).then((data : FileUploadResult)=>{

      let coData = JSON.parse(data.response)["hydra:member"][0];
      // console.log(coData)
      console.log(JSON.stringify(coData.imgUp.downloadLink))
      console.log(JSON.stringify(this.posts))

      this.posts.push({
        postImageUrl: coData.imgUp.downloadLink,
        date: coData.imgUp.uploadedAt,
        avatar: coData.user.avatar,
        userName: coData.user.FullName,
      })


    })

  }

//---------------------------------



  // lockPortrait() {
  //   alert('Orientation locked to portrait.');
  //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  // }
  //
  // unlock() {
  //   alert('Orientation unlocked');
  //   this.screenOrientation.unlock();
  // }
  //
  // getCurrentOrientation() {
  //   alert('Current Orientation is ' + this.screenOrientation.type);
  // }


//---------------------------------

}

