import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import {C13ObservableComponent} from "./c13-observable/c13-observable.component";

const routes: Routes = [{ path: '', component: RxjsComponent ,
  children: [
    {path: 'c13', component: C13ObservableComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
