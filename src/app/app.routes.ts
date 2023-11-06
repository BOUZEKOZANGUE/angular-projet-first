import { Routes } from '@angular/router';

//Declaration des routes pour chaque composant pourfaciliter le routage -> etape suivante config
export const appRoutes: Routes = [
  //*******************************************route pour le login ******************/
  {
    path: `login`,
    title:'login',
    loadComponent: () => import('./components/login/login.component'),
  },
  
  //************************Route pour le Dashboard**************************************************************** */
  {
    path: ``,
    //le parent qui est Dashboard
    title: 'Dashboard - Gestock',
    loadComponent: () => import('./components/dashboard/dashboard.component'),
    //les fils de dashboard on a overview, gestock, et finance dans chaque gestStock il ya
    children: [
      {
        path: 'overview',
        title: 'Dashboard - Gestock',
        loadComponent: () =>
          import('./components/dashboard/overview/overview.component'),
      },
      {
        path: 'gestion-de-stock',
        title: 'Gestion de Stock - Gestock',
        loadComponent: () =>
          import(
            './components/dashboard/gestion-stock/gestion-stock.component'
          ),
        children: [
          {
            path: 'vente',
            title: 'Vente -GeStock',
            loadComponent: () =>
              import('./components/dashboard/gestion-stock/vente.component'),
          },
          {
            path: 'approvisionnement',
            title: 'Approvisionnement -GeStock',
            loadComponent: () =>
              import(
                './components/dashboard/gestion-stock/approvisionnement.component'
              ),
          },
          {
            path: 'stock',
            title: 'stock -GeStock',
            loadComponent: () =>
              import('./components/dashboard/gestion-stock/stock.component'),
          },
          
          {
            path: '',
            redirectTo: 'vente',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'finance',
        title: 'Finance - Gestock',
        loadComponent: () =>
          import('./components/dashboard/finance/finance.component'),
      },
      // pour la gestion du redirect de chaque page par defaut a la page d'acceuil
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
    ],
  },
  //  dans le cas des urls non renseigner ou taper par l'utilisateur sur la bare d'urls vers un not found
  {
    path: '**',
    loadComponent: () => import('./components/not-found.component'),
  },
];
