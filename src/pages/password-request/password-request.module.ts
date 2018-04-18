import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordRequestPage } from './password-request';

@NgModule({
  declarations: [
    PasswordRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordRequestPage),
  ],
})
export class PasswordRequestPageModule {}
