import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {C3ResolverComponent} from "./practice/c3-resolver/c3-resolver.component";

const routes: Routes = [
  {path: 'c3-resolver', component: C3ResolverComponent},
  {  path: 'c4-interceptor',
    loadChildren: () => import('./practice/c4-request-interceptor/c4-request-interceptor.module')
      .then(m => m.C4RequestInterceptorModule)},
  { path: 'c5', loadChildren: () => import('./practice/c5-response-interceptor/c5-response-interceptor.module').then(m => m.C5ResponseInterceptorModule) },
  { path: 'c6', loadChildren: () => import('./practice/c6-caching-interceptor/c6-caching-interceptor.module').then(m => m.C6CachingInterceptorModule) },
  { path: 'c7', loadChildren: () => import('./practice/c7-http-unit-test/c7-http-unit-test.module').then(m => m.C7HttpUnitTestModule) },
  { path: 'services', loadChildren: () => import('./practice/services/services.module').then(m => m.ServicesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
