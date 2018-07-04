import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  declarations: []
})
export class ServicesModule { }
