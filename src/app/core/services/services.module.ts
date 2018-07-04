import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { ObservableProduct } from './observable-product';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ProductsService, ObservableProduct]
})
export class ServicesModule { }
