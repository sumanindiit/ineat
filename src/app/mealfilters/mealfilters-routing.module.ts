import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealfiltersPage } from './mealfilters.page';

const routes: Routes = [
  {
    path: '',
    component: MealfiltersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealfiltersPageRoutingModule {}
