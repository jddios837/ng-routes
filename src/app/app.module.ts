import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from "./auth/auth.module";
// import { AuthGuard } from "./auth/auth.guard";
// import { MailAppComponent } from './dashboard/containers/mail-app/mail-app.component';

// export const ROUTES: Routes = [
//   { path: '**', redirectTo: 'folder/inbox' }
// ];

@NgModule({
  declarations: [
    AppComponent,
    // MailAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MailModule,
    AppRoutingModule,
    AuthModule
    // RouterModule.forRoot(ROUTES, { enableTracing: true })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
