import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

import { InfoPage } from "../info/info.page";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: ':id',
    component: InfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
