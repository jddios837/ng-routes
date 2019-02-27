import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, CanActivateChild, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
	constructor(private authService: AuthService) {}

	// Implementado para vericifar si el usuario es administrador
	// y se puede cargar un modulo
	canLoad() {
		return this.authService.checkPermissions();
	}

	// Implementado para activar un componente
	canActivate() {
		return this.authService.isLoggedIn();
	}

	// Implementado para activar un componente hijo
	canActivateChild() {
		return true;
	}
}
