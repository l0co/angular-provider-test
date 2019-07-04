import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ModuleSharedModule} from "./module-shared/module-shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
