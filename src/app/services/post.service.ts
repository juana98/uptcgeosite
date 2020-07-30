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


  getPost():Observable<PostModel[]>{
   return this.http.get<PostModel[]>('http://localhost:3000/posts',options);
  }
}
