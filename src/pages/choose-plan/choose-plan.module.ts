import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosePlanPage } from './choose-plan';

@NgModule({
  declarations: [
    ChoosePlanPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosePlanPage),
  ],
})
export class ChoosePlanPageModule {}
