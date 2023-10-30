import { Component } from '@angular/core';
import { FormulaireComponent } from './components/formulaire.component';
import { PostComponent } from './components/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2 align="center">
      Formation angular pour debutant
      <!--</h2><app-formulaire/>-->
    </h2>
    <app-post />
  `,
  styles: [
    `
      p {
        font-size: 2rem;
        color: red;
      }
    `,
  ],
  imports: [FormulaireComponent, PostComponent],
})
export class AppComponent {
  title = 'angular-projet-first';
}
