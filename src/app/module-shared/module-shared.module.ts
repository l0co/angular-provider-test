import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedService} from "./shared.service";

@NgModule({
  providers: [SharedService],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModuleSharedModule { }
