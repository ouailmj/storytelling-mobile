import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the PasswordRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-request',
  templateUrl: 'password-request.html',
})
export class PasswordRequestPage {
  loading: any;
  authForm: FormGroup;
  user = {
    "email": "",
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,private authService:AuthProvider,public loadingCtrl: LoadingController,private toastCtrl: ToastController) {


    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(30)])],
    });

  }

 


  onSubmit(value){

     if(this.authForm.valid){
      this.showLoader();
      this.authService.resetPassword(this.user).then(res=>{

        console.log(res)
        this.loading.dismiss();
      }).catch(error=>{

          console.log(error)

      })


    }else{
      console.log(this.authForm.controls)
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
