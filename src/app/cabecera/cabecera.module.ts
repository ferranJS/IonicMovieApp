import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabeceraComponent } from './cabecera.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [CabeceraComponent],
  exports: [CabeceraComponent]
})
export class CabeceraComponentModule {}
