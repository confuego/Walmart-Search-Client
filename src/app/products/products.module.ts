import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
