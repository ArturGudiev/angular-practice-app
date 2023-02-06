import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {C1CastingJsonResponseComponent} from './c1-casting-json-response/c1-casting-json-response.component';
import {
  C2ThrowCustomHttpErrorComponent
} from './practice/c2-throw-custom-http-error/c2-throw-custom-http-error.component';
import {HttpClientModule} from "@angular/common/http";
import {C3ResolverComponent} from './practice/c3-resolver/c3-resolver.component';

@NgModule({
  declarations: [
    AppComponent,
    C1CastingJsonResponseComponent,
    C2ThrowCustomHttpErrorComponent,
    C3ResolverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
