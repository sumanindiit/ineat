import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BowlDetailsPage } from './bowl-details.page';

const routes: Routes = [
  {
    path: '',
    component: BowlDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BowlDetailsPageRoutingModule {}
