import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CustomPreload } from "./custom.preload";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: 'dashboard', canLoad: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule'},
  // { path: 'dashboard', data: { preload: true }, loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  imports: [

    // RouterModule.forRoot(routes)
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreload }) // Preload using a custom preload
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Preload the modules
    // RouterModule.forRoot(routes, { enableTracing: true }) // Trazar en consola el comportamiento de las rutas
  ],
  exports: [RouterModule],
  providers: [CustomPreload]
})
export class AppRoutingModule { }
