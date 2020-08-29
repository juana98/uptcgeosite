import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListContComponent } from './admin-list/containers/admin-list-cont/admin-list-cont.component';
import { AdminListPresComponent } from './admin-list/presenters/admin-list-pres/admin-list-pres.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminPostDetailContComponent } from './admin-post-detail/containers/admin-post-detail-cont/admin-post-detail-cont.component';
import { AdminPostDetailPresComponent } from './admin-post-detail/presenters/admin-post-detail-pres/admin-post-detail-pres.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AdminListContComponent,
    AdminListPresComponent,
    AdminPostDetailContComponent,
    AdminPostDetailPresComponent,
  ],
  imports: [CommonModule, SweetAlert2Module.forRoot(), SharedModule],
  exports: [
    AdminListContComponent,
    AdminListPresComponent,
    AdminPostDetailContComponent,
    AdminPostDetailPresComponent,
  ],
})
export class AdminModule {}
