import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventsPage} from "../events/events";

/**
 * Generated class for the FinishCreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finish-create-event',
  templateUrl: 'finish-create-event.html',
})
export class FinishCreateEventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishCreateEventPage');
  }
    listEvent(){
    this.navCtrl.push(EventsPage);
    }
}
