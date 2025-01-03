// app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, // <-- Important for standalone components
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class AppComponent implements OnInit {
  name = 'Standalone Angular';

  ngOnInit(): void {
    
  }
}

const userRoles = new Map<string, string>([
  ['admin', 'Administrator'],
  ['user', 'Regular User'],
  ['guest', 'Guest Access'],
]);
