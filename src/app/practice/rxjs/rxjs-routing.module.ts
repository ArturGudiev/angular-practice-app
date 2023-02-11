import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsComponent} from './rxjs.component';
import {C13ObservableComponent} from "./c13-observable/c13-observable.component";
import {C14HandlingErrorsComponent} from "./c14-handling-errors/c14-handling-errors.component";

const routes: Routes = [{
  path: '', component: RxjsComponent,
  children: [
    {path: 'c13', component: C13ObservableComponent},
    {path: 'c14', component: C14HandlingErrorsComponent},
    {
      path: 'c15',
      loadChildren: () => import('./c15-rxjs-operators/c15-rxjs-operators.module').then(m => m.C15RxjsOperatorsModule)
    },
    { path: 'c16', loadChildren: () => import('./c16-subjects/c16-subjects.module').then(m => m.C16SubjectsModule) },
    { path: 'c17', loadChildren: () => import('./c17-caching-observables/c17-caching-observables.module').then(m => m.C17CachingObservablesModule) },
    { path: 'c18', loadChildren: () => import('./c18-higher-order/c18-higher-order.module').then(m => m.C18HigherOrderModule) }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {
}
