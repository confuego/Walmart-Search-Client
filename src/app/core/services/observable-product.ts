import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ObservableProduct extends BehaviorSubject<Product | undefined> {
  constructor() {
    super(undefined);
  }

  next(product: Product): void {
    if (!product || this.value && product.itemId === this.value.itemId) {
      return;
    }
    super.next(product);
  }
}
