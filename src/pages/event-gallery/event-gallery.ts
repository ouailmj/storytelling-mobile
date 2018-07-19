import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventProvider} from "../../providers/event/event";

/**
 * Generated class for the EventGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-gallery',
  templateUrl: 'event-gallery.html',
})
export class EventGalleryPage {

  event :any={
    "id": '',
    "CreatedBy": {
      "firstName": "",
      "lastName": "",
      "fullName": "",
      "avatar": {
        "@id": "",
        "@type": "",
        "uploadedBy": "",
        "id": "",
        "downloadLink": "",
        "file": "",
        "expiresAt": "",
        "hasBeenDownloaded": "",
        "uploadedAt": "",
        "createdBy": "",
        "src": "",
        "type": "",
        "trashedAt": ""
      },
      "email": ""
    },
    "title": "",
    "startsAt": "",
    "endsAt": "",
    "place": "",
    "description": "",
    "videoGallery": [],
    "imagesGallery": [],
    "loadedMedias":''
  };

  gallery:any=[];



  constructor(public navCtrl: NavController, public navParams: NavParams,private eventProvider : EventProvider) {}

  ionViewDidLoad() {
    let id = this.navParams.get('id_event');

    this.eventProvider.getEvent('/api/show-event/'+id).then(data=>{
        this.event = data['hydra:member'][0];

        this.gallery = this.event.loadedMedias;

     });


  }

}
