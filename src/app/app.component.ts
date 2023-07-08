import { Component } from '@angular/core';
import styles from '../sass/modules/app.module.scss'

@Component({
  selector: 'app-root',
  templateUrl: './src/app/app.component.html',
  styleUrls: ['./src/sass/modules/app.module.scss']
})
export class AppComponent {
  message = 'Standalone';

  count: number = 0;

  addCount() {
    this.count++;
  }
}

