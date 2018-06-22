import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StoryTellingApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { UploadPage } from '../pages/upload/upload';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ApiProvider } from '../providers/api/api';
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from '../pages/register/register';
import { ChangepPasswordPage } from '../pages/changep-password/changep-password';
import { ProfilproviderProvider } from '../providers/profilprovider/profilprovider';
import { ProfilPage } from '../pages/profil/profil';
import { UserProvider } from '../providers/user/user';
import { MailCheckPage } from '../pages/mail-check/mail-check';
import { PasswordRequestPage } from '../pages/password-request/password-request';
import { EventsPage } from '../pages/events/events';
import { ChoosePlanPage } from '../pages/choose-plan/choose-plan';
import { EventProvider } from '../providers/event/event';
import {EventInformationPage} from "../pages/event-information/event-information";
import {NewEventPage} from "../pages/new-event/new-event";
import {CoverEventPage} from "../pages/cover-event/cover-event";
import {EventChallengePage} from "../pages/event-challenge/event-challenge";
import {InviteFriendsPage} from "../pages/invite-friends/invite-friends";
import {PaymentPage} from "../pages/payment/payment";
import {FinishCreateEventPage} from "../pages/finish-create-event/finish-create-event";
 
@NgModule({
  declarations: [
      StoryTellingApp,
      AboutPage,
      ContactPage,
      HomePage,
      TabsPage,
      RegisterPage,
      WelcomePage,
      ProfilPage,
      MailCheckPage,
      ChangepPasswordPage,
      UploadPage,PasswordRequestPage,
      EventsPage,
      ChoosePlanPage,
      EventInformationPage,
      NewEventPage,
      CoverEventPage,
      EventChallengePage,
      InviteFriendsPage,
      PaymentPage,
      FinishCreateEventPage
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
      WelcomePage,
      ProfilPage,
      MailCheckPage,
      ChangepPasswordPage,
      UploadPage,
      PasswordRequestPage,
      EventsPage,
      ChoosePlanPage,
      EventInformationPage,
      NewEventPage,
      CoverEventPage,
      EventChallengePage,
      InviteFriendsPage,
      PaymentPage,
      FinishCreateEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApiProvider,
    ProfilproviderProvider,
    UserProvider,
    EventProvider
  ]
})
export class AppModule {}
