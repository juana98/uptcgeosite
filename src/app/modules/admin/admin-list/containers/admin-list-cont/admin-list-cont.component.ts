import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';
import { PostModel} from 'src/app/models/post.model';

@Component({
  selector: 'app-admin-list-cont',
  templateUrl: './admin-list-cont.component.html',
  styleUrls: ['./admin-list-cont.component.scss']
})
export class AdminListContComponent implements OnInit {

  public postEntry$: Observable<PostModel[]>
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postEntry$ = this.postService.getPost();
  }

}
