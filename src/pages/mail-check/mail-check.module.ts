import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailCheckPage } from './mail-check';

@NgModule({
  declarations: [
    MailCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(MailCheckPage),
  ],
})
export class MailCheckPageModule {}
