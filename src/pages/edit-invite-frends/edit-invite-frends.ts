import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {EventProvider} from "../../providers/event/event";

/**
 * Generated class for the EditInviteFrendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-invite-frends',
  templateUrl: 'edit-invite-frends.html',
})
export class EditInviteFrendsPage {

  public data: string [] =[];
  public email: string = '';
  emails=[];
  id_event:string ;
  loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public event : EventProvider,public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {

    this.id_event= this.navParams.get('id_event');

    this.loadData();

  }

  loadData(){
    this.event.getListInvitionEvent(this.id_event).then(data=>{
      this.data = data;
      this.emails= [];
      this.data.forEach(function(val:any)  {
        this.emails.push(val.email)
      }.bind(this));
      console.log(this.emails);
    });
  }

  addEmail(){

    if(this.emails.indexOf(this.email) === -1 ){


      this.showLoader()
      this.event.addInviteFriends([this.email], this.id_event) .then(res=>{
        this.loading.dismiss();

        this.loadData();


      }).catch(error=>{ this.loading.dismiss(); console.log(error)})

    }
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Loding...'
    });

    this.loading.present();
  }



}
