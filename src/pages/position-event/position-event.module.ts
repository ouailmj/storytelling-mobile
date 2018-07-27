import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PositionEventPage } from './position-event';

@NgModule({
  declarations: [
    PositionEventPage,
  ],
  imports: [
    IonicPageModule.forChild(PositionEventPage),
  ],
})
export class PositionEventPageModule {}
