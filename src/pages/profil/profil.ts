import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserData } from '../../providers/types/userData';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {WelcomePage} from '../welcome/welcome'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,private toastCtrl: ToastController,private storage: Storage,public formBuilder: FormBuilder,private authService:AuthProvider) {



    this.authForm = formBuilder.group({
      
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'),  Validators.maxLength(30)])],
      fullName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.maxLength(30)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(30)])],
      timezoneId: ['', Validators.compose([Validators.required,Validators.maxLength(30)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    
    });

    this.storage.get('user').then(user=>{

      console.log(user)
      this.user.email=user.email;
      this.user.fullName=user.fullName;
      this.user.phoneNumber=user.phoneNumber;
      this.user.timezoneId=user.timezoneId;
      this.user.username=user.username;

    }).catch(err=>{
      console.log(err)
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



}
