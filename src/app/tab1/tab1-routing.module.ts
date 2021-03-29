import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './home.page';

import { InfoPage } from "../info/info.page";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
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
export class Tab1PageRoutingModule {}
