import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MylistsPage } from './mylists.page';

import { CabeceraComponentModule } from "../cabecera/cabecera.module";

import { MylistsPageRoutingModule } from './mylists-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MylistsPageRoutingModule, 
    CabeceraComponentModule
  ],
  declarations: [MylistsPage]
})
export class MylistsPageModule {}
