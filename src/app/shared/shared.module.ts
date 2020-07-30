import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [NavbarComponent,CustomMaterialModule]
})
export class SharedModule { }
