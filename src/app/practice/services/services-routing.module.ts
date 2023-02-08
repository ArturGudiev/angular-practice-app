import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from "./services.component";

const routes: Routes = [{
  path: '', component: ServicesComponent, children: [
    {path: 'c8', loadChildren: () => import('./c8-providers/c8-providers.module').then(m => m.C8ProvidersModule)},
    { path: 'c9', loadChildren: () => import('./c9-several-instances/c9-several-instances.module').then(m => m.C9SeveralInstancesModule) },
    { path: 'c10', loadChildren: () => import('./c10-catch-error/c10-catch-error.module').then(m => m.C10CatchErrorModule) }
  ]},
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
