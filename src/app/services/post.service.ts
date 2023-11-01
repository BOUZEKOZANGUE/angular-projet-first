import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  API = 'http://localhost:3000/post';
  private http = inject(HttpClient);

  //les requetes du services au niveau de get pour recuperer les donnees
  getPost() {
    return this.http.get<Post[]>(`${this.API}`);
  }
  //put pour les mises a jour
  putPost(postId: number, post: Post) {
    return this.http.put<Post>(`${this.API}/${postId}`, post);
  }
  // Delete pour la suppression d'un post
  deletePost(postId:number){
    return this.http.delete<Post>(`${this.API}/${postId}`);
  }
// ajouter un post 
  postPost(post:Post){
    return this.http.post<Post>(`${this.API}`, post);
  }

}
