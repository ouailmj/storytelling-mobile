import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoverEventPage } from './cover-event';

@NgModule({
  declarations: [
    CoverEventPage,
  ],
  imports: [
    IonicPageModule.forChild(CoverEventPage),
  ],
})
export class CoverEventPageModule {}
