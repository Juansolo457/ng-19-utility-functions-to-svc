// app.component.ts
import { Component, OnInit } from '@angular/core';
import { mapDictionaryToSelectOptions } from './map-util';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ],
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <select>
    <option *ngFor="let opt of blah" [value]="opt.value">
      {{ opt.label }}
    </option>
  </select>

  `,
})
export class AppComponent implements OnInit {
  name = 'Standalone Angular';
  roles: any;

  ngOnInit(): void {
   this.roles = mapDictionaryToSelectOptions(userRoles); 
   console.log(this.roles);
   
  }
}

const userRoles = new Map<string, string>([
  ['admin', 'Administrator'],
  ['user', 'Regular User'],
  ['guest', 'Guest Access'],
]);
