import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C17CachingObservablesComponent } from './c17-caching-observables.component';

const routes: Routes = [{ path: '', component: C17CachingObservablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C17CachingObservablesRoutingModule { }
