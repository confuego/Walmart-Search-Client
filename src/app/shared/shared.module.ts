import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search';
import { LayoutModule } from './layout';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    LayoutModule,
    PipesModule
  ],
  exports: [SearchModule, LayoutModule, PipesModule]
})
export class SharedModule { }
