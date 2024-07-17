import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gate1PageRoutingModule } from './gate1-routing.module';

import { Gate1Page } from './gate1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gate1PageRoutingModule
  ],
  declarations: [Gate1Page]
})
export class Gate1PageModule {}
