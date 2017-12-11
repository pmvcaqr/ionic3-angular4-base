import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { User } from './user';

export const models = [
  User
];

@NgModule({
  imports: [IonicModule],
  exports: []
})

export class ModelsModule {}