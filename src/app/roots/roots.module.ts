import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RootsPageRoutingModule } from './roots-routing.module';

import { RootsPage } from './roots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RootsPageRoutingModule
  ],
  declarations: [RootsPage]
})
export class RootsPageModule {}
