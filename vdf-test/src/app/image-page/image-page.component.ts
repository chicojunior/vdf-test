import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { loadImageList } from '../common/state/image/image.actions';
import { imagesSelector } from '../common/state/image/image.reducer';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

  images$: Observable<any[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.images$ = this.store.pipe(select(imagesSelector));
  }

  search(term: string) {
    this.store.dispatch(loadImageList({ query: term }));
  }

}
