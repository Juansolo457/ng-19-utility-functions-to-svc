// app.component.ts
import { Component, OnInit } from '@angular/core';
import { mapDictionaryToSelectOptions } from './map-util';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgFor],
  standalone: true, // <-- Important for standalone components
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
  blah: any;

  ngOnInit(): void {
   this.blah = mapDictionaryToSelectOptions(userRoles); 
   console.log('this', this.blah);
   
  }
}

const userRoles = new Map<string, string>([
  ['admin', 'Administrator'],
  ['user', 'Regular User'],
  ['guest', 'Guest Access'],
]);
