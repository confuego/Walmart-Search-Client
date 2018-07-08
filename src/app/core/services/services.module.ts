import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { ObservableProduct } from './product.observable';
import { ObservableError } from './error.observable';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ProductsService, ObservableProduct, ObservableError]
})
export class ServicesModule { }
