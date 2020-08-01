import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-admin-list-pres',
  templateUrl: './admin-list-pres.component.html',
  styleUrls: ['./admin-list-pres.component.scss']
})
export class AdminListPresComponent implements OnInit {

  @Input() public posts:PostModel[];
  @Output() postToEdit = new EventEmitter<PostModel>();

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns:string[]=['name','description','edit']

  setEdit(post: PostModel){
    this.postToEdit.emit(post);
  }
  
}
