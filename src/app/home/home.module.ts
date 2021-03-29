import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CabeceraComponentModule } from "../cabecera/cabecera.module";

import { HomePageRoutingModule } from './home-routing.module';
import { InfoPage } from '../info/info.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    CabeceraComponentModule
  ],
  declarations: [HomePage, InfoPage]
})
export class HomePageModule {}
