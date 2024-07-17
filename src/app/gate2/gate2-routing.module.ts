import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gate2Page } from './gate2.page';

const routes: Routes = [
  {
    path: '',
    component: Gate2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gate2PageRoutingModule {}
