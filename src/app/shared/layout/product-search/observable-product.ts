import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../core';

@Injectable({
  providedIn: 'root'
})
export class ObservableProduct extends BehaviorSubject<Product | undefined> {
  constructor() {
    super(undefined);
  }

  next(product: Product): void {
    if (!product || product.itemId === this.value.itemId) {
      return;
    }
    super.next(product);
  }
}
