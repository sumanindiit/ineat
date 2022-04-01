import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBowlPage } from './add-bowl.page';

const routes: Routes = [
  {
    path: '',
    component: AddBowlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBowlPageRoutingModule {}
