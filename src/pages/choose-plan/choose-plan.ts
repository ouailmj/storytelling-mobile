import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
