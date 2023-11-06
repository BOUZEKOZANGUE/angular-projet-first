import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dasboard-container">
      <header class="toolbar">
        <h1>Gestion de Stock</h1>
        <button (click)="logout()">Deconnexion</button>
      </header>
      <main>
        <aside class="side-nav">
          <ul>
            <li>
              <a routerLink="/overview" routerLinkActive="active"
                >Vue d'ensemble</a
              >
            </li>
            <li>
              <a routerLink="tableau" routerLinkActive="active">Tableau dynamique</a>
            </li>
            <li>
              <a routerLink="/gestion-de-stock" routerLinkActive="active"
                >gestion de stock</a
              >
            </li>
            <li>
              <a routerLink="/finance" routerLinkActive="active">finance</a>
            </li>
          </ul>
        </aside>
        <div class="content-container">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [
    `
.dashboard-container {
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  display:flex;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  height: 10vh;
  margin: 0 1rem;
}

main {
  height: 90vh;
  display: flex;
  font-size: 1.2rem;
  margin:0 0.5rem;
}

.side-nav {
  padding: 1rem;
  width: 15rem;
  background: coral;
}

li {
  list-style: none;
  margin: 1rem 0;
}

a {
  display: inline;
  text-decoration: none;
  color: inherit;
}

.active {
  text-decoration: underline;
  background: lightgray;
}

.content-container {
  background: green;
  width:70rem ;
}

/* Media queries pour rendre le style réactif */

@media only screen and (max-width: 768px) {
  /* Styles à appliquer lorsque la largeur de l'écran est inférieure ou égale à 768px */
  
  .toolbar {
    flex-direction: column;
    height: 90%;
  }
  
  main {
    flex-direction: column;
    font-size: 1rem;
  }
  
  .side-nav {
    width: 100%;
  }
}
    `,
  ],
})
export default class DashboardComponent {
  logout() {}
}
