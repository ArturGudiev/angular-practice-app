import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C10CatchErrorComponent } from './c10-catch-error.component';

const routes: Routes = [{ path: '', component: C10CatchErrorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C10CatchErrorRoutingModule { }
