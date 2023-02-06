import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {C4RequestInterceptorComponent} from "./c4-request-interceptor.component";

const routes: Routes = [
  {path: '', component: C4RequestInterceptorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C4RequestInterceptorRoutingModule { }
