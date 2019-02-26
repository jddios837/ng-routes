import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mail } from '../../models/mail.interface';

import { pluck } from "rxjs/operators";

@Component({
  selector: 'app-mail-view',
  template: `
    <div class="mail-view">
      <h2>{{ (message | async).from }}</h2>
      <p>{{ (message | async).full }}</p>
    </div>
  `,
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {
  message: Observable<Mail> = this.route.data.pipe(pluck('message'));

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
