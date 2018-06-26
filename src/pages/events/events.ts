import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { ShowEventPage } from '../show-event/show-event';
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events :any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public eventProvider : EventProvider) {

    eventProvider.getEvents().then( data =>{
      this.events = data;
    });

  
  }

  eventDetails(id){
    
    this.navCtrl.setRoot(ShowEventPage,{id_event:id});

  }


}