import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-app',
  template: `
    <div>
      <h1>Dashboard</h1>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
