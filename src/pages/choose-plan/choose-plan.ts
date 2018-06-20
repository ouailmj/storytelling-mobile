import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventsPage} from "../events/events";
import {Plan} from "../../models/plan";
import {Storage} from "@ionic/storage";
import {ApiProvider} from "../../providers/api/api";
import {HttpHeaders} from "@angular/common/http";

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public apiProvider: ApiProvider) {
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

  slides = [
    {
      title: "Plan name",
      description: "The <b>Plan name</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/welcome.png",
    },
    {
      title: "Plan name",
      description: "<b>Plan name</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/welcome.png",
    },
    {
      title: "Plan name",
      description: "The <b>Plan name</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/welcome.png",
    }
  ];



  cancelAction(){
        this.navCtrl.push(EventsPage);
  }

    onSubmit(){

        console.log("submit")

            console.log("valide")

            console.log("attr", this.planChoice)
         /*this.authService.updateUser(this.user).then(res=>{

                console.log(res)
            }).catch(err=>{
                this.presentToast("Password incorrect !!")

            });
*/

    }

}
