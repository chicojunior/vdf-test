import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageListModule } from '../image-list/image-list.module';
import { ImageSearchModule } from '../image-search/image-search.module';

import { ImagePageComponent } from './image-page.component';

const MATERIAL_MODULES = [

];

const LOCAL_IMPORTS = [
  ImageListModule,
  ImageSearchModule
];

@NgModule({
  declarations: [ImagePageComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    ...LOCAL_IMPORTS
  ],
  exports: [ImagePageComponent]
})
export class ImagePageModule { }
