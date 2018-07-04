import { Component, Input } from '@angular/core';
import { Product } from '../../../core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  @Input() product: Product;
}
