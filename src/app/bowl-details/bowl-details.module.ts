import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BowlDetailsPageRoutingModule } from './bowl-details-routing.module';

import { BowlDetailsPage } from './bowl-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BowlDetailsPageRoutingModule
  ],
  declarations: [BowlDetailsPage]
})
export class BowlDetailsPageModule {}
