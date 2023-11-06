import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
   <!-- <nav>
      <h1>Angular pour Debutant</h1>
      <ul>
        <!-- on utiliser routerLink pour que la page ne s'actualise pas et il y a facilitation de navigation
        <li><a routerLink="acceuil" routerLinkActive="active">Acceuil</a></li>
        <li><a routerLink="contact" routerLinkActive="active">Contact</a></li>
        <li><a routerLink="a-propos" routerLinkActive="active">A propos</a></li>
        <li><a routerLink="add-post" routerLinkActive="active">Ajouter un Post </a></li>
      </ul>
    </nav>
     le router oulet c'est pour l'affichage de contenu -->


    <router-outlet></router-outlet>
    
  `,
  styles: [
    `
      nav {
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem;
        border: solid;
        background: yellow;

        ul {
          display: flex;
        }
        li {
          margin-left: 1rem;
          list-style: none;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        .active{
        color : red;
        text-decoration:underline;
      }
      }
      
    `,
  ],
  imports: [RouterModule],
})
export class AppComponent {
  title = 'angular-projet-first';
}
