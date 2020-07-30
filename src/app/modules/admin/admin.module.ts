import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListContComponent } from './admin-list/containers/admin-list-cont/admin-list-cont.component';
import { AdminListPresComponent } from './admin-list/presenters/admin-list-pres/admin-list-pres.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminListContComponent, AdminListPresComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [AdminListContComponent, AdminListPresComponent]
})
export class AdminModule { }
