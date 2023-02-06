import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {C3ResolverComponent} from "./practice/c3-resolver/c3-resolver.component";

const routes: Routes = [
  {path: 'c3-resolver', component: C3ResolverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
