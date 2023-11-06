import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div align="center">
      <h2> La page que vous cherxchez n'existe pas </h2>
      <a routerLink="/">Retouner a la page d'acceuil</a>
    </div>
  `,
  styles: [
  ]
})
export  default class NotFoundComponent {

}
