import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveriesHoldsPage } from './deliveries-holds.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveriesHoldsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveriesHoldsPageRoutingModule {}
