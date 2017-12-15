import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CardListComponent } from './card-list/card-list';
import { CardItemComponent } from './card-item/card-item';
import { MasonryListComponent } from './masonry-list/masonry-list';
import { MasonryItemComponent } from './masonry-item/masonry-item';
import { OptionListComponent } from './option-list/option-list';
import { ConnectionStatusBarComponent } from './connection-status-bar/connection-status-bar';
import { FilterPopupComponent } from './filter-popup/filter-popup';
import { MediaComponent } from './media-component/media-component';

export const components = [
  CardListComponent,
  CardItemComponent,
  MasonryListComponent,
  MasonryItemComponent,
  OptionListComponent,
  ConnectionStatusBarComponent,
  FilterPopupComponent,
  MediaComponent
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components],
  entryComponents: [FilterPopupComponent]
})

export class ComponentsModule {}