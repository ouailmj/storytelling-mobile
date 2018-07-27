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
import { ProfilproviderProvider } from '../providers/profilprovider/profilprovider';
import { UserProvider } from '../providers/user/user';
import { Camera } from '@ionic-native/camera';
import { CameraProvider } from '../providers/util/camera.provider';
import { FileTransfer,FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ToastService } from '../providers/util/toast.service';
import {EventProvider} from "../providers/event/event";
import { WelcomePage } from '../pages/welcome/welcome';
import { ProfilPage } from '../pages/profil/profil';
import { MailCheckPage } from '../pages/mail-check/mail-check';
import { UploadPage } from '../pages/upload/upload';
import { PasswordRequestPage } from '../pages/password-request/password-request';
import { EventsPage } from '../pages/events/events';
import { ShowEventPage } from '../pages/show-event/show-event';
import { EventInformationPage } from '../pages/event-information/event-information';
import { NewEventPage } from '../pages/new-event/new-event';
import { CoverEventPage } from '../pages/cover-event/cover-event';
import { EventChallengePage } from '../pages/event-challenge/event-challenge';
import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { PaymentPage } from '../pages/payment/payment';
import { FinishCreateEventPage } from '../pages/finish-create-event/finish-create-event';
import { ChoosePlanPage } from '../pages/choose-plan/choose-plan';
import {ChangepPasswordPage} from "../pages/changep-password/changep-password";
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import {EditInviteFrendsPage} from "../pages/edit-invite-frends/edit-invite-frends";
import {EventGalleryPage} from "../pages/event-gallery/event-gallery";
import {PositionEventPage} from "../pages/position-event/position-event";

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
      UploadPage,
      PasswordRequestPage,
      EventsPage,
      ShowEventPage,
      ChoosePlanPage,
      EventInformationPage,
      NewEventPage,
      CoverEventPage,
      EventChallengePage,
      InviteFriendsPage,
      PaymentPage,
      ChangepPasswordPage,
      FinishCreateEventPage,
      EditInviteFrendsPage,
     EventGalleryPage,
    PositionEventPage
  ],
  imports: [
BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(StoryTellingApp),
    IonicStorageModule.forRoot(),

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
      UploadPage,
      PasswordRequestPage,
      EventsPage,
      ShowEventPage,
      ChoosePlanPage,
      EventInformationPage,
      NewEventPage,
      CoverEventPage,
      ChangepPasswordPage,
      EventChallengePage,
      InviteFriendsPage,
      PaymentPage,
      FinishCreateEventPage,
      EditInviteFrendsPage,
    EventGalleryPage,
    PositionEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApiProvider,
    ProfilproviderProvider,
    CameraProvider,
    Camera,
    EventProvider ,
    FileTransfer,
    FileTransferObject,
    File,
    ToastService,
    UserProvider,
    ScreenOrientation

  ]
})
export class AppModule {}
