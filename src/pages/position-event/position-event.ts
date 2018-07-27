import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PositionEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-position-event',
  templateUrl: 'position-event.html',
})
export class PositionEventPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }




  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {

    let myCenter = new google.maps.LatLng(51.508742,-0.120850);
    let mapCanvas = document.getElementById("map");
    let mapOptions = {center: myCenter, zoom: 5};
    let map = new google.maps.Map(mapCanvas, mapOptions);
    let marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);


    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: myCenter
    });

    marker = new google.maps.Marker({position:myCenter});
    marker.setMap(this.map);

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
