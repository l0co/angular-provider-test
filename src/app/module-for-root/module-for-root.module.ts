import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: '', redirectTo: 'first'}
];

@NgModule({
  declarations: [FirstComponent, SecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModuleForRootModule { }