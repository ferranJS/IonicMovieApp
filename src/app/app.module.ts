import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponentModule } from './cabecera/cabecera.module';

import {HttpClient, HttpClientModule} from '@angular/common/http'

import { StoreModule } from "@ngrx/store";
import { simpleReducer } from "./simple.reducer";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CabeceraComponentModule, HttpClientModule,
  StoreModule.forRoot( { count: simpleReducer} )],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
  

}
 