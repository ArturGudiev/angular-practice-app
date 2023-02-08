import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C9SeveralInstancesComponent } from './c9-several-instances.component';

const routes: Routes = [{ path: '', component: C9SeveralInstancesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C9SeveralInstancesRoutingModule { }
