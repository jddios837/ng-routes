import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { DashBoardComponent } from "./containers/dashboard/dashboard.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: DashBoardComponent
  }
]

@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DashboardModule { }
