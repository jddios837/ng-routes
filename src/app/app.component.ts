import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// import 'rxjs/add/operator/filter';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header>
        <img src="/assets/logo.svg">
      </header>
      <div class="app__content">
        <nav>
          <!-- Para limpiar la sub ruta se debe hacer lo siguiente -->
          <!-- <a
            routerLink="folder/inbox"
            routerLinkActive="active">
            Inbox
          </a> -->
          <a
            [routerLink]="['/mail', { outlets: { primary: 'folder/inbox', pane: null} }]"
            routerLinkActive="active">
            Inbox
          </a>
          <a
            [routerLink]="['/mail', { outlets: { primary: 'folder/trash', pane: null} }]"
            routerLinkActive="active">
            Trash
          </a>
          <a
            [routerLink]="['/dashboard']"
            routerLinkActive="active">
            Dashboard
          </a>
        </nav>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {


    // suscribir en los eventos de cambio de ruta
    // Esta es una manera
    // this.router.events.subscribe( event => {
    //   if(event instanceof NavigationEnd) {
    //     console.log(event);
    //   }
    // })

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        console.log(event);
      })
  }
}
