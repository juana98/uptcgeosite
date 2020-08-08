import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentPost: PostModel;
  isCreateMode: boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }

  public changeCurrentPost(event: PostModel){
    this.currentPost = event;
    this.isCreateMode = false;
  }

  public closeDetail(){
    this.isCreateMode = false;
    this.currentPost = null;
  }
 
}

