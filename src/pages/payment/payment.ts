import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {PaymentData} from "../../providers/types/eventData";
import {InviteFriendsPage} from "../invite-friends/invite-friends";
import {EventProvider} from "../../providers/event/event";
import {Storage} from "@ionic/storage";
import {EventInformationPage} from "../event-information/event-information";
import {EventsPage} from "../events/events";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
    authForm: FormGroup;
    loading : any ;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder,  public navParams: NavParams, private storage: Storage, public eventProvider: EventProvider, private toastCtrl: ToastController) {
      this.authForm = formBuilder.group({

          cardNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
          experationDateMonth: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
          experationDateYear: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
          cvv: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
          price: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  onSubmit(){
      if(this.authForm.valid) {
          this.showLoader()
          console.log(this.payment)

          this.storage.get('currentEvent').then(event => {

              this.eventProvider.addPaymentForEvent(this.payment, event.id).then(res => {
                  this.loading.dismiss();

                  console.log("addPaymentForEvent", res)
                  this.navCtrl.push(InviteFriendsPage)
              }).catch(error => {
                  this.loading.dismiss();

                  console.log(error)
              })

          }).catch(err => {
              this.navCtrl.push(EventsPage)
          })
      }else{

          this.presentToast('Sorry, some fields is required or given string')
      }
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

    showLoader(){
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });

        this.loading.present();
    }
}
