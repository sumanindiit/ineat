import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealfiltersPageRoutingModule } from './mealfilters-routing.module';

import { MealfiltersPage } from './mealfilters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealfiltersPageRoutingModule
  ],
  declarations: [MealfiltersPage]
})
export class MealfiltersPageModule {}
