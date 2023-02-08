import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C8ProvidersComponent } from './c8-providers.component';

const routes: Routes = [{ path: '', component: C8ProvidersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C8ProvidersRoutingModule { }
