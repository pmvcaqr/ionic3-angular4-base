import {Component, Input, Renderer} from '@angular/core';

@Component({selector: 'masonry-list', templateUrl: 'masonry-list.html'})

export class MasonryListComponent {
  @Input()items : object[] = [];

  constructor(public renderer : Renderer) {}
}