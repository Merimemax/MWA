import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{titleMWA}}
    <app-counter (eventClick)="updateCounter($event)" [counterValue]='counter'></app-counter>
    <input #be (keyup)='0' /> You Entered: {{be.value}}
    `,

  styles: []
})
export class AppComponent {
  title = 'lab11';
  titleMWA = 'MWA Lab 11';

  counter = 5;
  updateCounter(num) {
    this.counter += num;
  }


}
