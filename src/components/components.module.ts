import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CardListComponent } from './card-list/card-list';
import { CardItemComponent } from './card-item/card-item';
import { MasonryListComponent } from './masonry-list/masonry-list';
import { MasonryItemComponent } from './masonry-item/masonry-item';
import { OptionListComponent } from './option-list/option-list';
import { ConnectionStatusBarComponent } from './connection-status-bar/connection-status-bar';
import { ConnectionStatusIndicatorComponent } from './connection-status-indicator/connection-status-indicator';
import { FilterPopupComponent } from './filter-popup/filter-popup';
import { MediaComponent } from './media-component/media-component';
import { QRComponent } from './qr-component/qr-component';
import { MapComponent } from './map-component/map-component';

export const components = [
  CardListComponent,
  CardItemComponent,
  MasonryListComponent,
  MasonryItemComponent,
  OptionListComponent,
  ConnectionStatusBarComponent,
  ConnectionStatusIndicatorComponent,
  FilterPopupComponent,
  MediaComponent,
  QRComponent,
  MapComponent
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components],
  entryComponents: [FilterPopupComponent]
})

export class ComponentsModule {}