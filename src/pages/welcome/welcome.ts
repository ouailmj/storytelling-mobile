import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import {ShowEventPage} from "../show-event/show-event";
import {EventsPage} from "../events/events";
import { Storage } from '@ionic/storage';


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
    this.storage.get('token').then(token =>{
      if(token === null){
        console.log("token is null : ",token);

      }
      else{

        this.storage.get('lastEventId').then(id=>{
          console.log("last event id ",id);

          if(id === null){
            this.navCtrl.push(EventsPage);
          }else{
            this.navCtrl.setRoot(ShowEventPage,{id_event:id}).then();
          }

        });

      }

    }).catch(error=>{
      console.log(error)
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  signup(){
    this.navCtrl.push(RegisterPage);
  }

  login(){
    this.navCtrl.push(HomePage);
  }

}
