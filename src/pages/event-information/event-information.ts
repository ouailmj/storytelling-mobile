import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EventInformationData} from "../../providers/types/eventData";
import {Category} from "../../models/category";
import {HttpHeaders} from "@angular/common/http";
import {ApiProvider} from "../../providers/api/api";
import {Storage} from "@ionic/storage";
import {EventProvider} from "../../providers/event/event";
import {EventsPage} from "../events/events";
import {EventChallengePage} from "../event-challenge/event-challenge";
import {CoverEventPage} from "../cover-event/cover-event";

/**
 * Generated class for the EventInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-information',
  templateUrl: 'event-information.html',
})
export class EventInformationPage {

    public loginForm: any;
    eventInformation: EventInformationData = {
        "description": "sdz",
        "endsAt":  new Date().toString(),
        "idCat":2,
        "place": "hto",
        "startsAt": new Date().toString(),
        "title": " sqdzdzd"
    };
    categories: Category [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, private storage: Storage, private eventProvider: EventProvider) {
      this.storage.get('token').then(tok=>{

          let headers = new HttpHeaders();

          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set('Authorization', 'Bearer ' + tok);
          this.apiProvider.get('/api/categories',{headers: headers}).then(dataCategories=>{
              this.categories = dataCategories['hydra:member'];
          }).catch(error=>{})
      }).catch(error=>{})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventInformationPage');
  }

    onSubmit(){

        this.storage.get('currentEvent').then(event=>{

            this.eventProvider.addEventInformation(this.eventInformation, event.id).then(res =>{

                this.eventProvider.isFreePlan(event.eventPurchase).then(res =>{
                    if(res){
                        this.navCtrl.push(CoverEventPage)
                    }else{

                        this.navCtrl.push(EventChallengePage)
                    }
                    console.log(res)

                }).catch(error =>{
                    console.log(error)
                })

            }).catch(error =>{
                console.log(error)
            })

        }).catch(err=>{
            this.navCtrl.push(EventsPage)
        })


    }
}
