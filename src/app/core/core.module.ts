import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services';
import { PipesModule } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    PipesModule
  ],
  exports: [ServicesModule, PipesModule]
})
export class CoreModule { }
