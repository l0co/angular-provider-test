import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {MainComponent} from "./main/main.component";

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
    RouterModule.forChild(routes)
  ]
})
export class ModuleForRootModule { }
