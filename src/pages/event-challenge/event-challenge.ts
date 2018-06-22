import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpHeaders} from "@angular/common/http";
import {ApiProvider} from "../../providers/api/api";
import {Storage} from "@ionic/storage";
import {Plan} from "../../models/plan";
import {EventRoutes} from "../../providers/event/event.routes";
import {ChallengeData, EventInformationData} from "../../providers/types/eventData";
import {CoverEventPage} from "../cover-event/cover-event";
import {EventProvider} from "../../providers/event/event";
import {EventInformationPage} from "../event-information/event-information";
import {EventsPage} from "../events/events";

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
        "description": ''
    };
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public apiProvider: ApiProvider, private eventProvider: EventProvider) {
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
        let challenges = [
            this.challengeEvent.description
        ]
        this.storage.get('currentEvent').then(event=>{

            console.log("finish",event);
            console.log("ddd",event.id);
            this.eventProvider.addEventChallenge(challenges, event.id).then(res =>{
                console.log(res)
                this.navCtrl.push(CoverEventPage)
            }).catch(error =>{
                console.log(error)
            })

        }).catch(err=>{
            this.navCtrl.push(EventsPage)
        })


    }

}
