import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, style, state } from '@angular/animations';
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";

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
  animations: [
    trigger('myvisibilty', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      }))
    ])
  ]
})
export class WelcomePage {
  visibleState = 'visible';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toggleVisibile(){
    this.visibleState = (this.visibleState == 'visible' ) ? 'invisible' : 'visible';
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
