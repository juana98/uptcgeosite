import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostModel } from '../../../../../models/post.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PostService } from '../../../../../services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-post-detail-cont',
  templateUrl: './admin-post-detail-cont.component.html',
  styleUrls: ['./admin-post-detail-cont.component.scss']
})
export class AdminPostDetailContComponent implements OnInit {

  postDetailForm: FormGroup;
  
  @Input() postModelDetail: PostModel;
  @Output() currentPost = new EventEmitter<PostModel>();
  @Output() close = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postDetailForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      title: ['', Validators.required],
      category: [''],
      activatePost: ['']
    });
   }

  ngOnInit(): void {
  }

  savePost(post: PostModel){
    this.postService.savePost(post).subscribe((data) => {
      this.close.emit(true);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 3000
        
      })
    })
  }

  

}
