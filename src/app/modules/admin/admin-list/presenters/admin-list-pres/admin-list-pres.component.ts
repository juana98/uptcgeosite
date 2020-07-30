import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-admin-list-pres',
  templateUrl: './admin-list-pres.component.html',
  styleUrls: ['./admin-list-pres.component.scss']
})
export class AdminListPresComponent implements OnInit {

  @Input() public posts:PostModel[];
  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns:string[]=['name','description','edit']
  
}
