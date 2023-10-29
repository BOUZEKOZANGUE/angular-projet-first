import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{donnees}}
    </p>
  `,
  styles: [
  ]
})
export class ParentComponent {
  @Input() donnees!:string;
}
