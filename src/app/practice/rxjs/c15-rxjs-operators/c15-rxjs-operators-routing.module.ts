import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C15RxjsOperatorsComponent } from './c15-rxjs-operators.component';

const routes: Routes = [{ path: '', component: C15RxjsOperatorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C15RxjsOperatorsRoutingModule { }
