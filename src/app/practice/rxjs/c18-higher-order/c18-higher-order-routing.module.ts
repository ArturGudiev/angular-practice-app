import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C18HigherOrderComponent } from './c18-higher-order.component';

const routes: Routes = [{ path: '', component: C18HigherOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C18HigherOrderRoutingModule { }
