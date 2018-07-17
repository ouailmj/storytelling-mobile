import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  public emails: string [] =[];
  public email: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public event : EventProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditInviteFrendsPage');

    let id = this.navParams.get('id_event');

    this.event.getListInvite(id).then(data=>{
      this.emails = data;
    });
  }



}
