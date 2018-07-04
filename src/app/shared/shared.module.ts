import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search';
import { LayoutModule } from './layout';

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
    LayoutModule
  ],
  exports: [SearchModule, LayoutModule]
})
export class SharedModule { }
