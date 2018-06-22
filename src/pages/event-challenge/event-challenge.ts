import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpHeaders} from "@angular/common/http";
import {ApiProvider} from "../../providers/api/api";
import {Storage} from "@ionic/storage";
import {Plan} from "../../models/plan";
import {EventRoutes} from "../../providers/event/event.routes";
import {ChallengeData, EventInformationData} from "../../providers/types/eventData";
import {CoverEventPage} from "../cover-event/cover-event";

/**
 * Generated class for the EventChallengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-challenge',
  templateUrl: 'event-challenge.html',
})
export class EventChallengePage {
    propositions  = [] ;
    challengeEvent: ChallengeData = {
        "description": "",
        "descriptionPropose": "",
    };
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public apiProvider: ApiProvider) {
      this.storage.get('token').then(tok=>{

          let headers = new HttpHeaders();

          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set('Authorization', 'Bearer ' + tok);
          this.apiProvider.get(EventRoutes.apiPropositionChallenges,{headers: headers}).then(dataPropositions=>{
              this.propositions = dataPropositions['hydra:member'];
          }).catch(error=>{})
      }).catch(error=>{})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventChallengePage');
  }

    onSubmit(){
    console.log(this.challengeEvent)
        this.navCtrl.push(CoverEventPage);

    }

}
