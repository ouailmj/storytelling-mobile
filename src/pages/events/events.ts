import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import {ChoosePlanPage} from "../choose-plan/choose-plan";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
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

  /**
  * redirect to current step
  * @param currentStep
  */
  switchToCurrentStep(currentStep){
        //TODO: push to specific page
        switch(currentStep){
            case 'choose-plan': {
                this.navCtrl.push(ChoosePlanPage);
                break;
            }
            case 'event-information': {
                //statements;
                console.log('event-information1')
                this.navCtrl.push(ChoosePlanPage);
                break;
            }
            case 'event-challenge': {
                //statements;
                console.log('event-challenge')
                break;
            }
            case 'event-cover': {
                //statements;
                console.log('event-cover')
                break;
            }
            case 'payment': {
                //statements;
                console.log('payment')
                break;
            }
            case 'invite-friends': {
                //statements;
                console.log('invite-friends')
                break;
            }
            case 'finish': {
                //statements;
                console.log('finish')
                break;
            }
            default: {
                //statements;
                break;
            }
        }
    }

}
