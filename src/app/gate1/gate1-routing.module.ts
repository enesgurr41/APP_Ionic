import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gate1Page } from './gate1.page';

const routes: Routes = [
  {
    path: '',
    component: Gate1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gate1PageRoutingModule {}
