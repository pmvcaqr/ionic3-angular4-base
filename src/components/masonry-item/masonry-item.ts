import {Component, Input} from '@angular/core';

/**
 * Generated class for the MasonryItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({selector: 'masonry-item', templateUrl: 'masonry-item.html'})
export class MasonryItemComponent {
  @Input()item : any = null;
  constructor() {
    console.log('Hello MasonryItemComponent Component');
  }
}
