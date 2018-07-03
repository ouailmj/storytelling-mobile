import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
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
        "description": "",
        "endsAt":  new Date().toString(),
        "idCat":2,
        "place": "",
        "startsAt": new Date().toString(),
        "title": ""
    };
    categories: Category [] = [];
    loading : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController, public apiProvider: ApiProvider, private storage: Storage, private eventProvider: EventProvider,  private toastCtrl: ToastController) {
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

      this.showLoader();
      console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhh',parseInt(this.eventInformation.idCat.toString()))
        this.eventInformation.idCat = parseInt(this.eventInformation.idCat.toString())
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhh',this.eventInformation)
        this.storage.get('currentEvent').then(event=>{

            this.eventProvider.addEventInformation(this.eventInformation, event.id).then(res =>{

                this.eventProvider.isFreePlan(event.eventPurchase).then(res =>{
                    this.loading.dismiss();
                    if(res){
                        this.navCtrl.push(CoverEventPage)
                    }else{

                        this.navCtrl.push(EventChallengePage)
                    }
                    console.log(res)

                }).catch(error =>{
                    this.loading.dismiss();
                    console.log(error)
                })

            }).catch(error =>{
                this.loading.dismiss();
                this.presentToast(error['error']['hydra:description'])
            })

        }).catch(err=>{
            this.loading.dismiss();
            this.navCtrl.push(EventsPage)
        })
    }


    showLoader(){
        this.loading = this.loadingCtrl.create({
            content: 'Loding...'
        });

        this.loading.present();
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
}
