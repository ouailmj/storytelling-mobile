import { Component, ViewChild } from '@angular/core';
import { Events,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';

import { WelcomePage } from '../pages/welcome/welcome';
import { ProfilPage } from '../pages/profil/profil';
import { ChangepPasswordPage } from '../pages/changep-password/changep-password';
import { Storage } from '@ionic/storage';
import { EventsPage } from '../pages/events/events';
import { NewEventPage} from '../pages/new-event/new-event';
import {EditInviteFrendsPage} from "../pages/edit-invite-frends/edit-invite-frends";
import {EventGalleryPage} from "../pages/event-gallery/event-gallery";
import {PositionEventPage} from "../pages/position-event/position-event";

@Component({
  templateUrl: 'app.html'
})
export class StoryTellingApp {
  pagesTitle = {
    Profile: 'Profile',
    Change_Password: 'Change Password',
    Events_List: 'Events List' ,
    New_Event: 'New Event' ,
    Log_Out: 'Log Out'
  };


  @ViewChild(Nav) nav: Nav;
  rootPage:any = WelcomePage;
  pages: Array<{title: string, component: any}>;
  rightMenuItems: Array<{ icon: string, active: boolean, component: any }>;
  id_event:number;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage,public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.setupArticleMenuSubscribe();
    });

    this.rightMenuItems = [
      { icon: 'share', active: false , component: EditInviteFrendsPage },
      { icon: 'images', active: true , component: EventGalleryPage},
      { icon: 'alarm', active: false , component: PositionEventPage},
      { icon: 'analytics', active: false , component: ProfilPage},
      { icon: 'archive', active: false , component: ProfilPage},
      { icon: 'basket', active: false , component: ProfilPage},
    ];


    this.pages = [
      { title: this.pagesTitle.Profile, component: ProfilPage },
      { title: this.pagesTitle.Change_Password, component: ChangepPasswordPage },
      { title: this.pagesTitle.Events_List, component: EventsPage },
      { title: this.pagesTitle.New_Event, component: NewEventPage },
      { title: this.pagesTitle.Log_Out, component: WelcomePage }
    ];
  }

  openPage(page) {

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario


    if(page.title === this.pagesTitle.Log_Out){
       this.storage.remove('user');
       this.storage.remove('token');
       this.storage.remove('lastEventId');
    }

    this.nav.setRoot(page.component);
  }

  rightMenuClick(item) {
    console.log(this.id_event)

    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
    this.nav.setRoot(item.component,{id_event:this.id_event});

  }


  setupArticleMenuSubscribe(){
    console.log('setupArticleMenuSubscribe');
    // sub scribe to the populate event of the menu
    this.events.subscribe('articleMenu:populate', id_event  => {

      this.id_event = id_event;

    });
  }

  articleMenuChange(index){
    // notify any observers that an option has been clicked in the menu
    this.events.publish('articleMenu:change', index);
  }

}
