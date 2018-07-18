import { Component } from '@angular/core';
import {NavController, LoadingController, ToastController, MenuController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserData } from '../../providers/types/userData';
import { RegisterPage } from '../register/register';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsPage } from '../events/events';
import {PasswordRequestPage} from "../password-request/password-request";
import {ShowEventPage} from "../show-event/show-event";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading: any;
  loginData:UserData = {
    username:'user_test',
    password:"f%/R4Uk#](wUvM'V",
  };
  errorAuthentication=false;
  data: any;
  authForm: FormGroup;


  constructor(public navCtrl: NavController,
     public loadingCtrl: LoadingController,
     private toastCtrl: ToastController,
     private authService:AuthProvider,
     public formBuilder: FormBuilder,
     private menu :MenuController
  ) {

    this.menu.enable(false,'menu-right');
    this.menu.enable(false,'menu-left');

    this.navCtrl = navCtrl;

    this.authForm = formBuilder.group({

        username: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])],

      });

  }

  /*logout(){
    const root = this.app.goRootnav();
    root.popToRoot();
  }*/

  goSignUpPage(){
    this.navCtrl.push(RegisterPage);
  }


  doLogin(value : any) {

        if(this.authForm.valid) {

          this.showLoader();
          this.authService.login(this.loginData).then((result) => {

             console.log(result.token);

             this.loading.dismiss();

             this.getUserInfo();

          }
          ).catch(err=>{
             console.log(err);
            this.loading.dismiss();
            console.log(err)
            this.presentToast("incorrect username or password !!");
          });

          }


  }

  getUserInfo(){

    this.authService.getUserProfil().then(res=>{
      this.navCtrl.push(EventsPage);
    })

  }

    forgotPassword(){
        this.navCtrl.push(PasswordRequestPage);
    }

  showLoader(){
    this.loading = this.loadingCtrl.create({content: 'Authenticating...'});
    this.loading.present();
  }

  signup(){
    this.navCtrl.push(RegisterPage);
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
