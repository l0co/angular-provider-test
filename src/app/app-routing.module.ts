import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'parent', loadChildren: () => import('./module-parent/module-parent.module').then(mod => mod.ModuleParentModule)},
  {path: 'lazy', loadChildren: () => import('./module-lazy/module-lazy.module').then(mod => mod.ModuleLazyModule)},
  {path: 'provided-id', loadChildren: () => import('./module-provided-in/module-provided-in.module').then(mod => mod.ModuleProvidedInModule)},
  {path: '', redirectTo: 'parent', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{ enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
