import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C6CachingInterceptorComponent } from './c6-caching-interceptor.component';

const routes: Routes = [{ path: '', component: C6CachingInterceptorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C6CachingInterceptorRoutingModule { }
