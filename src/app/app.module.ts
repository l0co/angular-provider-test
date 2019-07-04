import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ModuleSharedModule} from "./module-shared/module-shared.module";
import {ModuleShared2Module} from "./module-shared-2/module-shared-2.module";
import {ModuleShared3Module} from "./module-shared-3/module-shared-3.module";
import {ModuleShared4Module} from "./module-shared-4/module-shared-4.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleSharedModule,
    ModuleShared2Module.forRoot(),
    ModuleShared3Module,
    ModuleShared4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
