import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  template: `
    <h1>{{ title }}</h1>  <!-- Render the title here -->
    <app-counter></app-counter>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello, my-angular-app';  // Set the title as expected by the test
}
