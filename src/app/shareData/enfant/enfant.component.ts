import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from "../parent/parent.component";

@Component({
    selector: 'app-enfant',
    standalone: true,
    template: `
    <p>
      enfant works! 
    </p>
    <app-parent [donnees]="donneesEnfant"/>
  `,
    styles: [],
    imports: [CommonModule, ParentComponent]
})
export class EnfantComponent {
  donneesEnfant = "Bonjour le monde composent enfant depuis le composant parent ";
}
