import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // RouterModule.forRoot(routes, { enableTracing: true }) // Trazar en consola el comportamiento de las rutas
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
