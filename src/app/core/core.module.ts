import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule
  ],
  exports: [ServicesModule]
})
export class CoreModule { }
