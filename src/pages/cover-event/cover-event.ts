import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PaymentPage} from "../payment/payment";
import {EventProvider} from "../../providers/event/event";
import {InviteFriendsPage} from "../invite-friends/invite-friends";
import {EventChallengePage} from "../event-challenge/event-challenge";
import {Storage} from "@ionic/storage";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventProvider: EventProvider, private storage: Storage,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoverEventPage');
  }


  onSubmit(){
      this.storage.get('currentEvent').then(event=> {
          this.eventProvider.isFreePlan(event.eventPurchase).then(res => {
              if (res) {
                  this.navCtrl.push(InviteFriendsPage)
              } else {

                  this.eventProvider.isTotalPayed().then(res =>{
                      if(res.isPayed){
                          this.navCtrl.push(InviteFriendsPage);

                      }else{
                          this.navCtrl.push(PaymentPage);

                      }
                  }).catch(err=>{ console.log(err)})
              }
              console.log(res)

          }).catch(error => {
              console.log(error)
          })
      }).catch(err=>{ console.log(err)})


  }

}
