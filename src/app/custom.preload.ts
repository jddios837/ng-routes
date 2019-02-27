import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from 'rxjs';
// import 'rxjs/add/observable/of';
// import { of } from 'rxjs';
// import {  } from "rxjs";

export class CustomPreload implements PreloadingStrategy {
	preload(route: Route, fn: () => Observable<any>): Observable<any> {
		return route.data && route.data.preload ? fn() : of(null);
	}
}