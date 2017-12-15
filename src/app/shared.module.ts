// import { PipesModule } from '../pipes/pipes.module';
// import { DIRECTIVES } from './app.imports';

import { ComponentsModule } from '../components/components.module';
import { ModelsModule } from '../models/models.module';

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
  ],
  imports: [
    IonicModule,
    // PipesModule,
    ComponentsModule,
    ModelsModule
  ],
  exports: [
    ComponentsModule,
    ModelsModule
    // PipesModule,
  ]
})

export class SharedModule { }