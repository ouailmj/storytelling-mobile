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
      { title: 'Edit Profil', component: WelcomePage },
      { title: 'Change Password', component: ChangepPasswordPage },
      { title: 'reset password', component: PasswordRequestPage },
      { title: 'upload', component: WelcomePage },
      { title: 'profil', component: ProfilPage },
      { title: 'Events', component: EventsPage },
      { title: 'Log out', component: WelcomePage }
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
