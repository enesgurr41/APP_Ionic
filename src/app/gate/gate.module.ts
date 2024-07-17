import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GatePage } from './gate.page';

import { GatePageRoutingModule } from './gate-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatePageRoutingModule
  ],
  declarations: [GatePage]
})
export class GatePageModule {}
