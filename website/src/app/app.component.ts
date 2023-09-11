import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a *ngFor="let anchor of navigation" [routerLink]="anchor.link">{{
        anchor.label
      }}</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  public readonly navigation = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
  ];
}
