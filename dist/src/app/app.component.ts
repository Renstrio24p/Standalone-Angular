import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ message }}</h1>
    <p>Welcome to Angular with Webpack 5.88!</p>
  `,
})
export class AppComponent {
  message = 'Hello, Angular!';
}
