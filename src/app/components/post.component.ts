import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../services/post.model';
import { Observable } from 'rxjs';

import EditPostComponent from './edit-post.component';
import AddPostComponent from './add-post.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post',
    standalone: true,
    template: `
    <dialog [open]="showDialog" >
      <app-edit-post [post]="post" *ngIf="showDialog"/>
    </dialog>
    <dialog [open]="showDialog1" >
      <app-add-post [post]="post" *ngIf="showDialog1"/>
    </dialog>
    <button class="ajouter" (click)="toogleMediap(post)">Ajouter Un nouveau Post</button>
    <section class="post-container">
      <div class="post-container" *ngFor="let post of posts | async">
        <h3>{{ post.title }}</h3>
        <h4>{{ post.body }}</h4>
        <span
          >Indentifiant du post :{{ post.id }} -poste par
          {{ post.userId }}</span>
      <!-- nepas oublier de faire appel a l'observable pour que l'action aie lieu-->
        {{deleteResult | async}}
        <div class="actions" align="end">
          
          <button class="modifier" (click)="goToEdit(post)">Editer</button>
          <button class="supprimer" (click)="onDelete(post.id)">Supprimer</button>
        </div>
      </div>
    </section>
  `,
    styles: [
        `
      .post-container {
        margin: auto;
        width: 70vw;
        & > * {
          border: 1px solid gray;
          border-radius: 4px;
          padding: 1rem;
          margin: 1rem;
        }
      }
      button {
        padding: 0.5rem;
        font-size: 1rem;
        margin-left: 1rem;
      }

      dialog{
        position :sticky;
        top : 0;
      }
      .supprimer{
        background:red;
      }
      .ajouter{
        background:green;
        padding:0.5rem;
        width:15vw;
        position:stiky;
        
      }
      .modifier{
        background:#fa3;
      }
    `,
    ],
    imports: [CommonModule,EditPostComponent,AddPostComponent ]
})
export default class PostComponent {
  showDialog = false;
  showDialog1 = false;

  post!: Post;
 //apres avoir remplir le service second etape je viens creer l'oservable ici 
  
  deleteResult!: Observable<Post>
  private  router = inject (Router)
  private ps = inject(PostService);
  readonly posts = this.ps.getPost();
  

  goToEdit(post: Post) {
    this.router.navigate(['/edit',`${post.id}`]);
    //this.router.navigateByUrl(`/edit/${post.id}`);
  }
  toogleMediap(post: Post) {
    this.showDialog1 = !this.showDialog1;
    this.post = post;
  }
  // je gere maintenant la methode pour supprimer 
  onDelete(postId:number){
    this.deleteResult = this.ps.deletePost(postId);
    location.reload();
  }
}
