import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveriesHoldsPageRoutingModule } from './deliveries-holds-routing.module';

import { DeliveriesHoldsPage } from './deliveries-holds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveriesHoldsPageRoutingModule
  ],
  declarations: [DeliveriesHoldsPage]
})
export class DeliveriesHoldsPageModule {}
