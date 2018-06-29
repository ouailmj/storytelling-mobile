import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ActionSheetController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { CameraProvider } from '../../providers/util/camera.provider';

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
 
  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;
  events = [];

  following = false;

  event = {
    coverImage: '',
    description:'',
  } 


  user = {
    name: 'Paula Bolliger',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 456,
    following: 1052,
    posts: 35
  };

  posts = [
    {
      postImageUrl: 'assets/img/background/background-2.jpg',
      date: 'November 5, 2016',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
     public cameraProvider: CameraProvider,
     public platform: Platform,
     public actionsheetCtrl: ActionSheetController,
     public loadingCtrl: LoadingController,
     public eventProvider : EventProvider,
     public params: NavParams

  ) { 


  }

  ionViewDidLoad() {
    console.log('Hello ProfileFour Page');
    console.log(this.params.get('id_event'))
    let id_event = this.params.get('id_event');

    this.eventProvider.getEvent('/api/show-event/'+id_event).then(data=>{
     
      let img = data['hydra:member'][0].imagesGallery[0].downloadLink === undefined ? '' : data['hydra:member'][0].imagesGallery[0].downloadLink;
      this.event.coverImage = img;
      this.event.description = data['hydra:member'][0].description;

    })

  }

  changePicture() {

    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
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

  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  UploadImg(){
   
    // let postData = new FormData();
    // postData.append('avatar',this.chosenPicture);
    
    // //this.eventProvider.upImg(postData);

    this.posts.push( {
      postImageUrl: this.chosenPicture,
      date: 'June 28, 2016',
      likes: 46,
      comments: 66,
      timestamp: '4mo ago'
    })

    console.log("10101010101010101")
    

  }
  


}
