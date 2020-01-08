import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnInit {

  @Output() searchImages: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public search(evt: any) {
    this.searchImages.emit(evt.target.value);
  }

}
