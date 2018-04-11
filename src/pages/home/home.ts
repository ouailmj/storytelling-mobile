import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
// import { ApiProvider } from "../api/api";
// import { AuthRoutes } from "../../providers/auth.routes";
// import { UserData } from "../types/userData";
// import { Storage } from "@ionic/storage";
import { AuthProvider } from '../../providers/auth/auth';
import { UserData } from '../../providers/types/userData';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading: any;
  loginData:UserData = {
    username: "test",
    password: "123456",
  };
  errorAuthentication=false;
  data: any;
  authForm: FormGroup;


  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,private toastCtrl: ToastController,private authService:AuthProvider,private storage: Storage,public formBuilder: FormBuilder) {
 
    this.navCtrl = navCtrl;
 
    this.authForm = formBuilder.group({
      
        username: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])],
      
      });

  }



  goSignUpPage(){
    this.navCtrl.push(RegisterPage);
  }


  doLogin(value : any) {

    // this.navCtrl.push(RegisterPage);
    

  if(this.authForm.valid) {

    this.showLoader();
      this.authService.login(this.loginData)
      .then((result) => {
        this.loading.dismiss();
        
        result.json().then((data)=>{
             

              if(data.token){

                console.log(data.token);

              }else{

                console.log("is null");

              }


              this.storage.set('token', data.token);

              this.storage.get('token').then((val) => {
                console.log('Your token is', val);
              });

        });
        
        // console.log(this.data)
        // localStorage.setItem('token', this.data.access_token);
        // this.navCtrl.setRoot(TabsPage);

      }, (err) => {
     
        this.loading.dismiss();
     
        console.log(err);
     
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
