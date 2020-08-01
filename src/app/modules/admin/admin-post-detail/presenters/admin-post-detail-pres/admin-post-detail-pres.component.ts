import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostModel } from '../../../../../models/post.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-post-detail-pres',
  templateUrl: './admin-post-detail-pres.component.html',
  styleUrls: ['./admin-post-detail-pres.component.scss']
})
export class AdminPostDetailPresComponent implements OnInit {
  
  @Input() postModelDetail: PostModel;
  @Input() postDetailForm: FormGroup;
  @Output() postToSave = new EventEmitter<PostModel>();


  constructor() { }

  ngOnInit(): void {
  }

  createPost(post: PostModel){
    this.postToSave.emit(post);
    console.warn("Here call post method for 'posts'");
  }

}
