import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBowlPageRoutingModule } from './add-bowl-routing.module';

import { AddBowlPage } from './add-bowl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBowlPageRoutingModule
  ],
  declarations: [AddBowlPage]
})
export class AddBowlPageModule {}
