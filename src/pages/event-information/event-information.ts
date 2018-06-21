import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {eventInformationData} from "../../providers/types/eventData";
import {Category} from "../../models/category";
import {HttpHeaders} from "@angular/common/http";
import {ApiProvider} from "../../providers/api/api";
import {Storage} from "@ionic/storage";

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
    eventInformation: eventInformationData = {
        description: "",
        title: "",
        place: "",
        startsAt:  new Date(),
        endsAt:  new  Date(),
        idCat: 0
    };
    categories: Category [] = [];
//    today
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, private storage: Storage,) {
      this.storage.get('token').then(tok=>{

          let headers = new HttpHeaders();

          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set('Authorization', 'Bearer ' + tok);
          this.apiProvider.get('/api/categories',{headers: headers}).then(dataCategories=>{
              this.categories = dataCategories['hydra:member'];
          }).catch(error=>{})
      }).catch(error=>{})
     // this.today = new Date().toISOString();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventInformationPage');
  }

    onSubmit(){
        console.log('data' ,  this.eventInformation);
        console.log("submit")
            console.log("valide")
          //  console.log(this.eventInformation)


    }
}
