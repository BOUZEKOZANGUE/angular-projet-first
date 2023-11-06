import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gestion-stock',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="vente" routerLinkActive="active">Vente</a></li>
        <li>
          <a routerLink="approvisionnement" routerLinkActive="active"
            >Approvisionnement</a
          >
        </li>
        <li><a routerLink="stock" routerLinkActive="active">Stock</a></li>
      </ul>
    </nav>
  `,
  styles: [
    `
      ul {
        display: flex;
      }

      li {
        text-decoration: none;
        margin: 1rem;
        list-style: none;
      }

      a {
        display: inline;
        text-decoration: none;
        color: inherit;

        
      }
      .active {
        text-decoration: underline;
        background: red;
      }
      
    `,
  ],
})
export default class GestionStockComponent {}
