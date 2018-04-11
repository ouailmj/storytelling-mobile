import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StoryTellingApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ApiProvider } from '../providers/api/api';
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from '../pages/register/register';
import { ProfilPage } from '../pages/profil/profil';
import { ProfilproviderProvider } from '../providers/profilprovider/profilprovider';

@NgModule({
  declarations: [
    StoryTellingApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    ProfilPage
  ],
  imports: [
BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(StoryTellingApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    StoryTellingApp,
    AboutPage,
    ContactPage,
    HomePage,
    RegisterPage,
    TabsPage,
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApiProvider,
    ProfilproviderProvider
  ]
})
export class AppModule {}
