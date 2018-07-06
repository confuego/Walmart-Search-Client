import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ObservableProduct, ProductsService, Product } from '../core';
import { ProductSearchComponent } from '../shared/layout/product-search/product-search.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public recommendations$: Observable<Product>;

  constructor(public product$: ObservableProduct, public productsService: ProductsService) {
    this.product$.subscribe(product => {
      if (product) {
        this.recommendations$ = this.productsService.recommendations(product);
      }
    });
  }
}
