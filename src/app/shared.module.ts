import { DIRECTIVES } from './app.imports';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [
      DIRECTIVES,
    ],
    imports: [
      IonicModule,
    ],
    exports: [
    ]
  })

export class SharedModule { }
