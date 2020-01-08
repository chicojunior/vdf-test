import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';


@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule
  ],
  exports: [FavoritesComponent]
})
export class FavoritesModule { }
