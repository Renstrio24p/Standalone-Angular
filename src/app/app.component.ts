import { Component } from '@angular/core';
import styles from '../sass/modules/app.module.scss'

@Component({
  selector: 'app-root',
  template: `
    <div class=${styles.container}>
        <div>
            <div class=${styles['d-flex-center']}>
                <h1 class=${styles['font-weight-500']}>{{ message }}</h1>
                <a href='https://angularjs.org/'><img class=${styles['angular-img']} src='./src/images/angular.png' alt='angular logo' /></a>
            </div>
            <div class=${styles['d-flex-center']}>
                <p class=${styles['dark-cyan']}>Welcome to Angular with Webpack 5.88!</p>
                <a href='https://webpack.js.org/'><img class=${styles.webpack} src='./src/images/webpack.png' alt='webpack img'/></a>
            </div>
        </div>
        <footer>
           <div class=${styles['d-flex-center']}>
                <span>Modular Sass</span>
                <img class=${styles.sass} src='./src/images/sass.png' alt='sass logo' />
           </div>
           <div class=${styles['d-flex-center']}>
            <img class=${styles.github} src='./src/images/github.png' alt='github' />
            <span>Codespaces</span>
           </div>
        </footer>
    </div>
  `,
})
export class AppComponent {
  message = 'Standalone';
}
