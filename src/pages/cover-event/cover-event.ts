import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PaymentPage} from "../payment/payment";
import {EventProvider} from "../../providers/event/event";

/**
 * Generated class for the CoverEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cover-event',
  templateUrl: 'cover-event.html',
})
export class CoverEventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventProvider: EventProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoverEventPage');
  }


  onSubmit(){
      this.eventProvider.isTotalPayed().then(res =>{
        console.log('moooooooooooooooook',res);
        this.navCtrl.push(PaymentPage);
      }).catch(err=>{ console.log(err)})


  }

}
