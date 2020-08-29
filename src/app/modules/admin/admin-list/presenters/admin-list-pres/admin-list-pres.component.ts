import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-admin-list-pres',
  templateUrl: './admin-list-pres.component.html',
  styleUrls: ['./admin-list-pres.component.scss'],
})
export class AdminListPresComponent implements OnInit {
  @Input() public posts: PostModel[];
  @Output() postToEdit = new EventEmitter<PostModel>();
  @Output() postToDelete = new EventEmitter<string>();
  displayedColumns: string[] = ['name', 'description', 'edit'];

  constructor() {}

  ngOnInit(): void {}

  setEdit(post: PostModel): void {
    this.postToEdit.emit(post);
  }

  removePost(post: PostModel): void {
    this.postToDelete.emit(post.id);
  }
}
