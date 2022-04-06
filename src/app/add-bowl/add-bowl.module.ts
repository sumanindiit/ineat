import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBowlPageRoutingModule } from './add-bowl-routing.module';

import { AddBowlPage } from './add-bowl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddBowlPageRoutingModule
  ],
  declarations: [AddBowlPage]
})
export class AddBowlPageModule {}
