import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './home.page';
import { CabeceraComponentModule } from "../cabecera/cabecera.module";

import { Tab1PageRoutingModule } from './home-routing.module';
import { InfoPage } from '../info/info.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    CabeceraComponentModule
  ],
  declarations: [Tab1Page, InfoPage]
})
export class Tab1PageModule {}
