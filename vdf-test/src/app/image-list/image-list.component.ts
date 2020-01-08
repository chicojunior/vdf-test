import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadImageList } from '../common/state/image/image.actions';
import { imagesSelector } from '../common/state/image/image.reducer';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  images$: Observable<any[]>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.images$ = this.store.pipe(select(imagesSelector));
  }

  search(term: string) {
    this.store.dispatch(loadImageList({ query: term }));
  }
}
