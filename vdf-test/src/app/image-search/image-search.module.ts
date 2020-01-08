import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ImageSearchComponent } from './image-search.component';

@NgModule({
  declarations: [ImageSearchComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [ImageSearchComponent]
})
export class ImageSearchModule { }
