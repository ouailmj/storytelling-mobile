import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChoosePlanPage} from "../choose-plan/choose-plan";
import { EventProvider } from '../../providers/event/event';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public eventProvider : EventProvider) {

    eventProvider.getEvents().then(arr =>{
      console.log(arr);
    });

   

  }


  cards = [
    {
      avatarImageUrl: 'assets/imgs/avatar/marty-avatar.png',
      postImageUrl: 'assets/imgs/card/advance-card-bttf.png',
      name: 'Marty Mcfly',
      postText: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      date: 'November 5, 1955',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      avatarImageUrl: 'assets/imgs/avatar/sarah-avatar.jpg',
      postImageUrl: 'assets/imgs/card/advance-card-tmntr.jpg',
      name: 'Sarah Connor',
      postText: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.',
      date: 'May 12, 1984',
      likes: 30,
      comments: 64,
      timestamp: '30yr ago'
    },
    {
      avatarImageUrl: 'assets/imgs/avatar/ian-avatar.png',
      postImageUrl: 'assets/imgs/card/advance-card-jp.jpg',
      name: 'Dr. Ian Malcolm',
      postText: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.',
      date: 'June 28, 1990',
      likes: 46,
      comments: 66,
      timestamp: '2d ago'
    },
  ];

  

  imageTapped(card) {
    alert(card.name + ' image was tapped.');
  }

  like(card) {
    alert(card.name + ' was liked.');
  }

  comment(card) {
    alert('Commenting to ' + card.name);
  }

  avatarTapped(card) {
    alert(card.name + ' avatar was tapped.');
  }

  eventDetails(){
    // this.navCtrl.push();

  }
}