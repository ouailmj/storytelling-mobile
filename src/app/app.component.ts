import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';

import { WelcomePage } from '../pages/welcome/welcome';
import { ProfilPage } from '../pages/profil/profil';
import { ChangepPasswordPage } from '../pages/changep-password/changep-password';
import { Storage } from '@ionic/storage';
import { PasswordRequestPage } from '../pages/password-request/password-request';
import { EventsPage } from '../pages/events/events';
import { NewEventPage} from '../pages/new-event/new-event';
import {EventInformationPage} from '../pages/event-information/event-information';

@Component({
  templateUrl: 'app.html'
})
export class StoryTellingApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = WelcomePage;
  pages: Array<{title: string, component: any}>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Profile', component: ProfilPage },
      { title: 'Change Password', component: ChangepPasswordPage },
      { title: 'Events List', component: EventsPage },
      { title: 'New Event', component: NewEventPage },
      { title: 'Log Out ', component: WelcomePage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    if(page.title === 'Log out'){
       this.storage.remove('user');
       this.storage.remove('token');
    }
    this.nav.setRoot(page.component);
  }

}
