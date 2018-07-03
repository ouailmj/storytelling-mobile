import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {  UserRegister } from '../../providers/types/userData';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HomePage} from "../home/home";
import {MailCheckPage} from "../mail-check/mail-check"

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  loading: any;
  regData:UserRegister = { username:"", plainPassword:"",email:""};
  authForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,private toastCtrl: ToastController,private authService:AuthProvider,public formBuilder: FormBuilder) {
    this.navCtrl = navCtrl;
 
    this.authForm = formBuilder.group({
      
        username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(30)])],
        email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(30)])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      
      });

    
  }
 

  login(){
    this.navCtrl.push(HomePage);
  }

  signup(){
    this.navCtrl.push(MailCheckPage);
  }

  onSubmit(): void {
    console.log("submit")

    let messageError="";
    if(this.authForm.valid) {

      console.log("valid")
     
        this.showLoader();

        this.authService.register(this.regData).then((result) => {
    
          this.loading.dismiss();
          // this.navCtrl.pop();
          this.navCtrl.push(MailCheckPage);

          console.log(result);
        }, (err) => {
    

          err.map((val,key) =>{
            if(key===0)
            messageError =`${val.propertyPath} : ${val.message}`;
           
          })
          
          this.loading.dismiss();
          this.presentToast(messageError);
    
        });

        // this.nav.push(HomePage);
    }else{
      this.presentToast("invalid data");

    }
}   

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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
