import { Component } from '@angular/core';
import { ObservableProduct, ProductsService, Product, ObservableError } from '../core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public recommendations$: Observable<Array<Product>>;

  constructor(public product$: ObservableProduct,
      public productsService: ProductsService) {

    this.product$.pipe(debounceTime(100)).subscribe(product => {
      this.recommendations$ = this.productsService.recommendations(product);
    });
  }
}
