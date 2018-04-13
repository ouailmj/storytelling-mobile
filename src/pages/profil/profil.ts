import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserData } from '../../providers/types/userData';

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

   user: UserData = {
    username: "string",
    password: "string",
    email: "string",
    fullName: "string",
    phoneNumber: "string",
    plainPassword: "string",
    timezoneId: "string",
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {

    this.storage.get('user').then(user=>{

      console.log(user)
      this.user.email=user.email;
      this.user.fullName=user.fullName;
      this.user.phoneNumber=user.phoneMumber;
      this.user.timezoneId=user.phoneMumber;
      this.user.username=user.username;

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}