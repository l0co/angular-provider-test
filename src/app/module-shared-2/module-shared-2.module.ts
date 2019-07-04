import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Shared2Service} from "./shared-2.service";

@NgModule({
  providers: [Shared2Service],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModuleShared2Module { }
