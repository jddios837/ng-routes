import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Mail } from "./models/mail.interface";

import { environment } from "../../environments/environment";

const SERVE_URL = environment.url_component;

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  getFolder(folder: string): Observable<Mail[]> {
    return this.http.get(`${SERVE_URL}/messages?folder=${folder}`)
                .pipe(
                  map((response: Mail[]) => response)
                );
  }

  getMessage(id: string): Observable<Mail> {
    return this.http.get(`${SERVE_URL}/messages/${id}`)
      .pipe(
        map((response: Mail) => response)
      );
  }
}
