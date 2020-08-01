import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentPost: PostModel;
  showCreateForm: boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }

  public changeCurrentPost(event: PostModel){
    this.currentPost = event;
  }
 
}

