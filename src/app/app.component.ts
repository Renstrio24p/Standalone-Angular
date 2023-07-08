import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './src/app/app.component.html',
  styleUrls: ['./src/sass/modules/app.module.scss']
})
export class AppComponent implements OnInit {
  message = 'Standalone';
  count: number = 0;

  addCount() {
    this.count++;
  }

  ngOnInit() {
    // Initialize Bootstrap JS components
    const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipElements.forEach((element: Element) => {
      new bootstrap.Tooltip(element);
    });

    const popoverElements = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverElements.forEach((element: Element) => {
      new bootstrap.Popover(element);
    });
  }
}
