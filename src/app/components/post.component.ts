import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="post-container">
      <div class="post-container" *ngFor="let post of posts | async">
  <h3>{{post.title}}</h3>
  <h4>{{post.body}}</h4>
  <span>Indentifiant du post :{{post.id}} -poste par {{post.userId}}</span>
  <div class="actions" align="end">
    <button class="modifier">Editer</button>
    <button class="supprimer">Supprimer</button>
  </div>

      </div>
    </section>
  `,
  styles: [`
    .post-container{
      margin:auto;
      width:70vw;
      & > * {
        border: 1px solid gray;
        border-radius: 4px;
        padding: 1rem;
        margin:1rem;
      }
    }
    button{
      padding:0.5rem;
      font-size:1rem;
      margin-left:1rem;
    }
  `],
})
export class PostComponent {
private ps = inject(PostService);
readonly posts = this.ps.getPost()

}
