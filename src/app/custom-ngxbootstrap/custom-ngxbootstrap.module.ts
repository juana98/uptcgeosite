import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const ngxBootstrapModules = [CarouselModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, CarouselModule.forRoot()],
  exports: [CarouselModule],
})
export class CustomNgxbootstrapModule {}
