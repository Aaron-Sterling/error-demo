import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';

import 'time-ago-web-component';

@NgModule({
    declarations: [
      HomePage
    ],
    imports: [
      IonicPageModule.forChild(HomePage)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
export class HomePageModule {}