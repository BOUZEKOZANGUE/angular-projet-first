import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../services/post.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="addPostForm" (ngSubmit)="onSubmit()">
      <h2>Ajouter un post</h2>
      <input type="text" placeholder="Titre" formControlName="title" />
      <input type="text" placeholder="Description" formControlName="body" />
      {{addResult | async}}
      <button type="submit">Ajouter un post</button>
    </form>
  `,
  styles: [
    `
      * {
        width: 30vw;
        display: block;
        margin: 0.5rem auto;
        padding: 1rem 0.2rem;
      }
    `,
  ],
})
export default class AddPostComponent {
  @Input() post!: Post;
  private ps = inject(PostService);
  addResult!: Observable<Post>;

  addPostForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  ngOnInit(): void {
    this.addPostForm.patchValue(this.post);
  }

  onSubmit() {
    const post: Post = {
      userId: 787,
      id: 5080,
      title: this.addPostForm.value.title!,
      body: this.addPostForm.value.body!,
    };
    this.addResult = this.ps.postPost(post);
    //actualiser la page avec location reload
    location.reload();
  }
  
}
