import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
	constructor(private authService: AuthService) {}
	canLoad() {
		return this.authService.checkPermissions();
	}
}
