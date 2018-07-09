import { Component, Input } from '@angular/core';
import { Product } from '../../../core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: []
})
export class ProductCardComponent {
  @Input() product: Product;
}
