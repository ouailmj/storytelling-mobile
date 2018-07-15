import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { ShowEventPage } from '../show-event/show-event';
import { Storage } from '@ionic/storage';
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
    loading: any;

    constructor(
         public navCtrl: NavController,
         public navParams: NavParams,
         public eventProvider : EventProvider,
         public storage : Storage,
         public loadingCtrl: LoadingController) {
            this.showLoader();

        console.log("list events");
        eventProvider.getEvents().then( data =>{
          console.log("in pqge event ",data);
         this.events = data.length > 0 ? data : [] ;

         this.loading.dismiss();
//
        });


    }

    eventDetails(id){
      console.log("id event =====================> ",id);
      this.storage.set('lastEventId',id);
        this.navCtrl.setRoot(ShowEventPage,{id_event:id});
    }

    showLoader(){
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });

        this.loading.present();
      }


}
