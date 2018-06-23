import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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
    challenges  = [] ;
    challengeEvent: ChallengeData = {
        "description": ''
    };

    loading : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController, private storage: Storage, public apiProvider: ApiProvider, private eventProvider: EventProvider) {
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
      this.challenges.push(this.challengeEvent.description)
  }

    removeChallenge(index) {

        this.challenges.splice(index, 1)
    }

    send(){

        this.showLoader()
      console.log(this.challengeEvent)

        this.storage.get('currentEvent').then(event=>{

            this.eventProvider.addEventChallenge(this.challenges, event.id).then(res =>{

                this.loading.dismiss();
                console.log(res)
                this.navCtrl.push(CoverEventPage)
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
