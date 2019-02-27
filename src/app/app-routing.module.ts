import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Preload the modules
    // RouterModule.forRoot(routes, { enableTracing: true }) // Trazar en consola el comportamiento de las rutas
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
