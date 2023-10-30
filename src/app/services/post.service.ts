import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API = 'http://localhost:3000/post'
  private http =inject(HttpClient)

  getPost(){
    return this.http.get<Post[]>(this.API);
  }
}
