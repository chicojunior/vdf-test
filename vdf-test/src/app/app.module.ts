import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import effects from '@app/effects';
import { reducers } from '@app/reducers';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImagePageModule } from './image-page/image-page.module';
import { FavoritesModule } from './favorites/favorites.module';


const BASE_MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule
];

const NGRX_MODULES = [
  StoreModule.forRoot(reducers),
  EffectsModule.forRoot(effects),
  !environment.production ? StoreDevtoolsModule.instrument() : []
];

const FEATURE_MODULES = [
  ImagePageModule,
  FavoritesModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...BASE_MODULES,
    ...NGRX_MODULES,
    ...FEATURE_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
