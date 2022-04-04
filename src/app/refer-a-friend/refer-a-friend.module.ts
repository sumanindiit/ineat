import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferAFriendPageRoutingModule } from './refer-a-friend-routing.module';

import { ReferAFriendPage } from './refer-a-friend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferAFriendPageRoutingModule
  ],
  declarations: [ReferAFriendPage]
})
export class ReferAFriendPageModule {}
