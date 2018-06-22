import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PaymentData} from "../../providers/types/eventData";
import {InviteFriendsPage} from "../invite-friends/invite-friends";

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  payment: PaymentData ={
    cardNumber: '',
    experationDateMonth: '',
    experationDateYear: '',
    cvv: '',
    price: '',
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  onSubmit(){
    console.log(this.payment)

      this.navCtrl.push(InviteFriendsPage);
  }

}
