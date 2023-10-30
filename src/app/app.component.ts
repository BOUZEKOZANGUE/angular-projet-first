
import { Component } from '@angular/core';
import { FormulaireComponent } from "./components/formulaire/formulaire.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-formulaire/>
    `,
    styles: [
        `
      p {
        font-size: 2rem;
        color: red;
      }
    `,
    ],
    imports: [FormulaireComponent]
})
export class AppComponent {
  title = 'angular-projet-first';
}
