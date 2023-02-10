import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C16SubjectsComponent } from './c16-subjects.component';

const routes: Routes = [{ path: '', component: C16SubjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C16SubjectsRoutingModule { }
