
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{Pagetitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/movies']">Movie List</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Pagetitle = 'Movie List';
}
