import { Component, inject } from '@angular/core';

import { DataService } from './services/data.service';
import { ParentComponent } from "./shareData/parent/parent.component";
import { EnfantComponent } from "./shareData/enfant/enfant.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `<p>Angular Pour les Debutant</p><app-enfant/>`,
    styles: [
        `
      p {
        font-size: 2rem;
        color: red;
      }
    `,
    ],
    imports: [ParentComponent, EnfantComponent]
})
export class AppComponent {
  title = 'angular-projet-first';
}
