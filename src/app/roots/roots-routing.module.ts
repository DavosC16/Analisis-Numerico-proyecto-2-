import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootsPage } from './roots.page';

const routes: Routes = [
  {
    path: '',
    component: RootsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootsPageRoutingModule {}
