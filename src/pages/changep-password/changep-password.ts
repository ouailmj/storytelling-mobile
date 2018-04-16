import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ChangepPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changep-password',
  templateUrl: 'changep-password.html',
})
export class ChangepPasswordPage {
  authForm: FormGroup;
  user = {
    "oldPassword": "",
    "newPassword": "",
    "repeatedPassword": ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,private authService:AuthProvider) {


    this.authForm = formBuilder.group({
  
      oldPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      repeatedPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    
    },{validator: this.matchingPasswords('newPassword', 'repeatedPassword')});

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepPasswordPage');
  }

  onSubmit(value){

     if(this.authForm.valid){
        
      this.authService.changePpassword(this.user).then(res=>{

        console.log(res)

      }).catch(error=>{
console.log(error)

      })


    }else{
      console.log(this.authForm.controls)
    }

  }

}
