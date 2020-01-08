import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { createEffect, Actions, ofType } from '@ngrx/effects';

import { map, catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ImageService } from '@app/services';

import * as ImageActions from './image.actions';
import { Action } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ImageEffect {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private imageService: ImageService
  ) {}

  images$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: string; query: string }>(
        ImageActions.ImageActionTypes.Load
      ),
      switchMap(action =>
        this.imageService.getImages(action.query).pipe(
          map(res => ({
            type: ImageActions.ImageActionTypes.LoadSuccess,
            payload: res
          })),
          catchError(err =>
            of({
              type: ImageActions.ImageActionTypes.LoadFailure,
              payload: err
            })
          )
        )
      )
    )
  );
}
