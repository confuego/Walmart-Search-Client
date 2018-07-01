import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsModule } from './models/models.module';
import { ServicesModule } from './services/services.module';
import { InterceptorsModule } from './interceptors/interceptors.module';

@NgModule({
  imports: [
    CommonModule,
    ModelsModule,
    ServicesModule,
    InterceptorsModule
  ],
  declarations: [],
  exports: [ModelsModule, ServicesModule, InterceptorsModule]
})
export class CoreModule { }
