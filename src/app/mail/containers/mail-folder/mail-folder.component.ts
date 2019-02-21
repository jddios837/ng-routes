import { Component } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from "rxjs/operators";

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{ (title | async) }}</h2>
    <mail-item
      *ngFor="let message of (messages | async)"
      [message]="message">
    </mail-item>
  `
})
export class MailFolderComponent {

  // data: Observable<{ messages: Mail[] }> = this.route.data;
  // data: any = this.route.data;
  messages: Observable<Mail[]> = this.route.data.pipe(pluck('messages'));
  title: Observable<string> = this.route.params.pipe(pluck('name'));

  constructor(private route: ActivatedRoute) {}
  // messages: Mail[] = [{
  //   "id": 1,
  //   "folder": "inbox",
  //   "from": "Jane Smith",
  //   "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
  //   "timestamp": 1487848162905
  // }];
}
