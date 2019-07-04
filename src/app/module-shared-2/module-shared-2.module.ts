import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Shared2Service} from "./shared-2.service";

@NgModule({
  providers: [],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModuleShared2Module {

  public static forRoot() {
    return {ngModule: ModuleShared2Module, providers: [Shared2Service]};
  }

}
