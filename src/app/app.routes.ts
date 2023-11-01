import { Routes } from "@angular/router";

//Declaration des routes pour chaque composant pourfaciliter le routage -> etape suivante config
export const appRoutes: Routes =[
    {
        path: `acceuil`,
        title:"Acceuil",
        loadComponent: () => import('./components/post.component')
    },
    {
        path:`contact`,
        loadComponent: () => import('./components/formulaire.component')
    },
    {
        path: `a-propos`,
        loadComponent: () => import('./components/edit-post.component')
    },
    {
        path: `edit/:id`,
        title: `Editer un post`,
        loadComponent: () => import('./components/edit-post.component')
    },
    {
        path: `add-post`,       
        loadComponent: () => import('./components/add-post.component')
    }
]