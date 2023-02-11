import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersComponent } from './others.component';

const routes: Routes = [{ path: '', component: OthersComponent }, { path: 'zone', loadChildren: () => import('./c19-zone/c19-zone.module').then(m => m.C19ZoneModule) } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
