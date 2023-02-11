import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C19ZoneComponent } from './c19-zone.component';

const routes: Routes = [{ path: '', component: C19ZoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C19ZoneRoutingModule { }
