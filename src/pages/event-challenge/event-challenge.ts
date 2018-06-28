import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpHeaders} from "@angular/common/http";
import {ApiProvider} from "../../providers/api/api";
import {Storage} from "@ionic/storage";
import {EventRoutes} from "../../providers/event/event.routes";
import {ChallengeData} from "../../providers/types/eventData";
import {CoverEventPage} from "../cover-event/cover-event";
import {EventProvider} from "../../providers/event/event";
import {EventsPage} from "../events/events";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
        "description": null
    };
    authForm: FormGroup;
    loading : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,  public loadingCtrl: LoadingController, private storage: Storage, public apiProvider: ApiProvider, private eventProvider: EventProvider, private toastCtrl: ToastController) {
      this.storage.get('token').then(tok=>{

          let headers = new HttpHeaders();

          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set('Authorization', 'Bearer ' + tok);
          this.apiProvider.get(EventRoutes.apiPropositionChallenges,{headers: headers}).then(dataPropositions=>{
              this.propositions = dataPropositions['hydra:member'];
          }).catch(error=>{})
      }).catch(error=>{})
      this.authForm = formBuilder.group({

          description: ['', Validators.compose([Validators.required])],

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventChallengePage');
  }

  onSubmit(){
      if(this.authForm.valid) {
          this.challenges.push(this.challengeEvent.description)
      }else{
          if(this.authForm.controls.description.hasError('required')){
              this.presentToast('Sorry, field description is required');
          }
      }
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
            this.loading.dismiss()
            this.navCtrl.push(EventsPage)
        })
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
