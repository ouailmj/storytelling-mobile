import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserData } from '../../providers/types/userData';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CameraProvider } from '../../providers/util/camera.provider';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  loading: any;
   user: UserData = {
    username: "string",
    password: "",
    email: "string",
    fullName: "string",
    phoneNumber: "string",
    timezoneId: "string",
  };
  authForm: FormGroup;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
      public loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
      private storage: Storage,
      public formBuilder: FormBuilder,
      private authService:AuthProvider,
      public cameraProvider: CameraProvider,
      public platform: Platform,
      public actionsheetCtrl: ActionSheetController,
      public eventProvider : EventProvider

    ) {



    this.authForm = formBuilder.group({
      
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'),  Validators.maxLength(30)])],
      fullName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.maxLength(30)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(30)])],
      timezoneId: ['', Validators.compose([Validators.required,Validators.maxLength(30)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    
    });

    this.storage.get('user').then(user=>{

      if(user===null){
         // return    this.navCtrl.push(WelcomePage).then(page=>{

          //   console.log(page)
          // }).catch(err=>{
          //   console.log(err)
          // })
      }
      this.user.email=user.email;
      this.user.fullName=user.fullName;
      this.user.phoneNumber=user.phoneNumber;
      this.user.timezoneId=user.timezoneId;
      this.user.username=user.username;

    }).catch(err=>{
      // this.navCtrl.push(WelcomePage)
    })
  }

  // matchingPasswords(passwordKey: string) {
  //   console.log('matchingPasswords==========<<>>')
  //   return (group: FormGroup): {[key: string]: any} => {
  //     let password = group.controls[passwordKey];

  
  //     if (password.value !== '12345678') {
  //       console.log('matchingPasswords==========<<>>')

  //       return {
  //         mismatchedPasswords: true
  //       };
  //     }
  //   }
  // }

  // console.log(passwordKey);

  //     this.authService.login({username:'test',password:"123456"}).then((result) => {

  //           this.storage.set('token', result.token);

  //           console.log(result.token)
  //           return {
  //             mismatchedPasswords: false
  //           };
        
  //       }
  //       ).catch(err=>{
  //         return {
  //           mismatchedPasswords: true
  //         };
  //       });
  
  //       return {
  //         mismatchedPasswords: false
  //       };


  onSubmit(value){

    console.log("submit")
      if(this.authForm.valid){
        console.log("valide")

        this.authService.updateUser(this.user).then(res=>{

          console.log(res)
        }).catch(err=>{
          this.presentToast("Password incorrect !!")

        });

      }
  }


  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

 

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
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


  uploadImag(){
   
  
    this.eventProvider.uploadFile(this.chosenPicture);


  }



}
