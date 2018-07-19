import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventGalleryPage } from './event-gallery';

@NgModule({
  declarations: [
    EventGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(EventGalleryPage),
  ],
})
export class EventGalleryPageModule {}
