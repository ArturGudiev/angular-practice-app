import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C11PromisesComponent } from './c11-promises.component';

const routes: Routes = [{ path: '', component: C11PromisesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C11PromisesRoutingModule { }
