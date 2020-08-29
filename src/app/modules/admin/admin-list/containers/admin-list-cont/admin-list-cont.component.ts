import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models/post.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-list-cont',
  templateUrl: './admin-list-cont.component.html',
  styleUrls: ['./admin-list-cont.component.scss'],
})
export class AdminListContComponent implements OnInit {
  public postEntry$: Observable<PostModel[]>;
  @Output() postToEdit = new EventEmitter<PostModel>();
  @Output() postToDelete = new EventEmitter<string>();

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postEntry$ = this.postService.getPost();
  }

  sendPostToEdit(event: PostModel): void {
    this.postToEdit.emit(event);
  }

  deletePostToList(event: string): void {
    this.postToDelete.emit(event);
  }

  deletePost(post: PostModel): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.postService.deletePost(post).subscribe((data) => {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        });
      }
    });
  }
}
