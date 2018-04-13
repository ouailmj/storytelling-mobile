import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserData } from '../../providers/types/userData';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfilPage } from '../profil/profil';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading: any;
  loginData:UserData = {
    username: "",
    password: "",
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

  /*logout(){
    const root = this.app.goRootnav();
    root.popToRoot();
  }*/

  goSignUpPage(){
    this.navCtrl.push(RegisterPage);
  }


  doLogin(value : any) {

    // this.navCtrl.push(RegisterPage);

   

  if(this.authForm.valid) {

    this.showLoader();

    this.authService.login(this.loginData).then((result) => {

            this.storage.set('token', result.token);

        
           this.authService.getUserProfil().then(res=>{
               this.loading.dismiss();
               this.navCtrl.push(ProfilPage);
          })

    }
    ).catch(err=>{

      this.loading.dismiss();
      this.presentToast("incorrect username or password !");
    });


    // this.showLoader();
    //   this.authService.login(this.loginData)
    //   .then((result) => {
        
    //     result.json().then((data)=>{

    //       this.loading.dismiss();

    //           if(data.token){

    //             console.log(data.token);

    //           }else{

    //            
    //             console.log("is null");

    //           }



    //           this.storage.get('token').then((val) => {
    //             console.log('Your token is', val);
    //           });

    //     });
        
        // console.log(this.data)
        // localStorage.setItem('token', this.data.access_token);
        // this.navCtrl.setRoot(TabsPage);

      // }, (err) => {
     
      //   this.loading.dismiss();
     
      //   console.log(err);
     
      // });

    
    }
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  signup(){
    this.navCtrl.push(RegisterPage);
  }

  connect(){

    // this.navCtrl.push(ProfilPage);
    
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
