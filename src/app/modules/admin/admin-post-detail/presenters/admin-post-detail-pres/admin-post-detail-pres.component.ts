import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { PostModel } from '../../../../../models/post.model';
import { FormGroup } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin-post-detail-pres',
  templateUrl: './admin-post-detail-pres.component.html',
  styleUrls: ['./admin-post-detail-pres.component.scss'],
})
export class AdminPostDetailPresComponent implements OnInit, OnChanges {
  @Input() postModelDetail: PostModel;
  @Input() postDetailForm: FormGroup;
  @Output() postToSave = new EventEmitter<PostModel>();

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.postModelDetail) {
      this.postDetailForm.patchValue(changes.postModelDetail.currentValue);
    } else {
      this.postDetailForm.reset();
    }
  }

  savePost(post: PostModel): void {
    if (this.postModelDetail && this.postModelDetail.id) {
      post.id = this.postModelDetail.id;
    }
    this.postToSave.emit(post);
  }
}
