import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CardListComponent } from './card-list/card-list';
import { CardItemComponent } from './card-item/card-item';
import { MasonryListComponent } from './masonry-list/masonry-list';
import { MasonryItemComponent } from './masonry-item/masonry-item';
import { OptionListComponent } from './option-list/option-list';

export const components = [
  CardListComponent,
  CardItemComponent,
  MasonryListComponent,
  MasonryItemComponent,
  OptionListComponent
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components]
})

export class ComponentsModule {}