import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, CustomMaterialModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    CustomMaterialModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
