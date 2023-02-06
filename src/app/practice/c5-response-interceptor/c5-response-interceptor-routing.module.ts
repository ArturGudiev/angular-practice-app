import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C5ResponseInterceptorComponent } from './c5-response-interceptor.component';

const routes: Routes = [{ path: '', component: C5ResponseInterceptorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C5ResponseInterceptorRoutingModule { }
