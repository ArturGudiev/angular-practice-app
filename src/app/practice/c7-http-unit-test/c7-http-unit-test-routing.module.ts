import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C7HttpUnitTestComponent } from './c7-http-unit-test.component';

const routes: Routes = [{ path: '', component: C7HttpUnitTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C7HttpUnitTestRoutingModule { }
