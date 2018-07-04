import { Component } from '@angular/core';
import { ObservableProduct } from '../core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(public product$: ObservableProduct) {}
}
