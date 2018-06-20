import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventInformationPage } from './event-information';

@NgModule({
  declarations: [
    EventInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(EventInformationPage),
  ],
})
export class EventInformationPageModule {}
