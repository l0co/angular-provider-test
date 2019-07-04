import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from './main/main.component';
import {ModuleSharedModule} from "../module-shared/module-shared.module";
import {ModuleShared2Module} from "../module-shared-2/module-shared-2.module";
import {ModuleShared3Module} from "../module-shared-3/module-shared-3.module";

const routes: Routes = [
  {path: 'main', component: MainComponent, children: [
      {path: 'first', component: FirstComponent},
      {path: 'second', component: SecondComponent}
  ]},
  {path: '', redirectTo: 'main/first'}
];

@NgModule({
  declarations: [FirstComponent, SecondComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModuleSharedModule,
    ModuleShared2Module,
    ModuleShared3Module
  ]
})
export class ModuleLazyModule { }
