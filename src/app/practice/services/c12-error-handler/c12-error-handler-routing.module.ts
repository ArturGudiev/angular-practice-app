import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C12ErrorHandlerComponent } from './c12-error-handler.component';

const routes: Routes = [{ path: '', component: C12ErrorHandlerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C12ErrorHandlerRoutingModule { }
