import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'for-root', loadChildren: () => import('./module-for-root/module-for-root.module').then(mod => mod.ModuleForRootModule)},
  {path: '', redirectTo: 'for-root', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{ enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
