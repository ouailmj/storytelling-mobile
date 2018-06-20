import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChoosePlanPage} from "../choose-plan/choose-plan";
import { EventProvider } from '../../providers/event/event';
import {ApiProvider} from "../../providers/api/api";
import {_switch} from "rxjs/operator/switch";
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventManager: EventProvider, public apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  createEvent(){

      this.eventManager.newEvent().then((result) => {
          this.navCtrl.push(ChoosePlanPage);
      }).catch(err=>{
       this.eventManager.getEvent(err['error']['appEventURI']).then(rep =>{
switch(rep.currentStep){
    case 'choose-plan': {
        //statements;
        break;
    }
    case 'event-information': {
        //statements;
        break;
    }
    case 'event-challenge': {
        //statements;
        break;
    }
    case 'event-cover': {
        //statements;
        break;
    }
    case 'payment': {
        //statements;
        break;
    }
    case 'invite-friends': {
        //statements;
        break;
    }
    case 'finish': {
        //statements;
        break;
    }
    default: {
        //statements;
        break;
    }
}
       }).catch(error => {

       })
      });

  }

}
