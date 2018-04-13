import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserRegister } from '../../providers/types/userData';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HomePage} from "../home/home";
import {MailCheckPage} from "../mail-check/mail-check"
import { WelcomePage } from '../welcome/welcome';

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
  regData:UserRegister = { username:'', password:'',email:''};
  authForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,private toastCtrl: ToastController,private authService:AuthProvider,public formBuilder: FormBuilder) {
    this.navCtrl = navCtrl;
 
    this.authForm = formBuilder.group({
      
        username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
        email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(30)])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        confirmPassword: ['', Validators.compose([Validators.required])]
      
      },{validator: this.matchingPasswords('password', 'confirmPassword')});

    
  }
   matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
  
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  login(){
    this.navCtrl.push(HomePage);
  }

  signup(){
    this.navCtrl.push(MailCheckPage);
  }

  onSubmit(value: any): void { 
    if(this.authForm.valid) {
        window.localStorage.setItem('username', value.username);
        window.localStorage.setItem('password', value.password);

        this.regData.username = value.username;
        this.regData.password = value.password;
        this.regData.email = value.email;
        
        this.doSignup();

        // this.nav.push(HomePage);
    }
}   

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  doSignup() {


    this.showLoader();

    this.authService.register(this.regData).then((result) => {

      this.loading.dismiss();
      // this.navCtrl.pop();

      console.log(result);
    }, (err) => {

      this.loading.dismiss();
      this.presentToast("err");

    });

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
