import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {EventsPage} from "../events/events";
import {Plan} from "../../models/plan";
import {Storage} from "@ionic/storage";
import {ApiProvider} from "../../providers/api/api";
import {HttpHeaders} from "@angular/common/http";
import {ChoosePlanData} from "../../providers/types/eventData";
import {EventProvider} from "../../providers/event/event";
import {EventInformationPage} from "../event-information/event-information";

/**
 * Generated class for the ChoosePlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-plan',
  templateUrl: 'choose-plan.html',
})
export class ChoosePlanPage {

  plans : Plan[] = [] ;
  planChoice = "" ;
    loading : any ;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, private storage: Storage, public apiProvider: ApiProvider, public eventProvider: EventProvider) {
      this.storage.get('token').then(tok=>{

          let headers = new HttpHeaders();

          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set('Authorization', 'Bearer ' + tok);
          this.apiProvider.get('/api/plans',{headers: headers}).then(dataPlans=>{
              this.plans = dataPlans['hydra:member'];
          }).catch(error=>{})
      }).catch(error=>{})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosePlanPage');
  }

  cancelAction(){
        this.navCtrl.push(EventsPage);
  }

  onSubmit(){
<<<<<<< HEAD


=======
      this.showLoader()
>>>>>>> aa56bbdd9bb195f29f79ffb84d5c29cd320b6ef9
      let choosePlanData: ChoosePlanData = {
          planKey: this.planChoice,
      };

      console.log("attrqssqq", choosePlanData);
      this.storage.get('currentEvent').then(event=>{

          console.log("finish",event);
          console.log("ddd",event.id);
      this.eventProvider.addChoosePlan(choosePlanData, event.id).then(res =>{
          this.loading.dismiss();
          console.log(res)
          this.navCtrl.push(EventInformationPage)
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
