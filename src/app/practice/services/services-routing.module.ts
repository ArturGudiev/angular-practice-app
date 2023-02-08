import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from "./services.component";

const routes: Routes = [{
  path: '', component: ServicesComponent, children: [
    {path: 'c8', loadChildren: () => import('./c8-providers/c8-providers.module').then(m => m.C8ProvidersModule)}]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
