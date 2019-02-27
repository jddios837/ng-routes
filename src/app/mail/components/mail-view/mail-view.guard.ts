import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MailViewComponent } from "./mail-view.component";

@Injectable()
export class MailViewGuard implements CanDeactivate<MailViewComponent> {
	canDeactivate(
		component: MailViewComponent,
	): Observable<boolean> | Promise<boolean> | boolean {
		// Verifico si dejo o no el mensaje actual, al confirmar
		// elimino el mensaje escrito que existia
		if (component.hasUnsavedChanges) {
			return window.confirm('¿Quieres dejar el mensaje?')
		}
		return true;
	}
}