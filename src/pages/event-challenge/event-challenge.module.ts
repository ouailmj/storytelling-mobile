import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventChallengePage } from './event-challenge';

@NgModule({
  declarations: [
    EventChallengePage,
  ],
  imports: [
    IonicPageModule.forChild(EventChallengePage),
  ],
})
export class EventChallengePageModule {}
