import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {PaymentData} from "../../providers/types/eventData";
import {InviteFriendsPage} from "../invite-friends/invite-friends";
import {EventProvider} from "../../providers/event/event";
import {Storage} from "@ionic/storage";
import {EventInformationPage} from "../event-information/event-information";
import {EventsPage} from "../events/events";

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
      numberCard: null,
      monthExpire: null,
      yearExpire: null,
      cvv: null,
      price: null,
  }
    loading : any ;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, private storage: Storage, public eventProvider: EventProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  onSubmit(){
      this.showLoader()
    console.log(this.payment)

      this.storage.get('currentEvent').then(event=>{

          this.eventProvider.addPaymentForEvent(this.payment, event.id).then(res =>{
              this.loading.dismiss();

              console.log("addPaymentForEvent", res)
              this.navCtrl.push(InviteFriendsPage)
          }).catch(error =>{
              this.loading.dismiss();

              console.log(error)
          })

      }).catch(err=>{
          this.navCtrl.push(EventsPage)
      })
  }

    showLoader(){
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });

        this.loading.present();
    }
}
