import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PostModel } from '../models/post.model';

const options = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http : HttpClient) { }
  
  baseUrl = 'http://localhost:3000/posts';

  getPost():Observable<PostModel[]>{
   return this.http.get<PostModel[]>(this.baseUrl,options);
  }

  savePost(post: PostModel):Observable<PostModel[]>{
   return this.http.post<PostModel[]>(this.baseUrl,post, options);
  }
}
