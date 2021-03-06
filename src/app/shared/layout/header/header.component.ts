import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { ProductsService } from '../../../core/services/products.service';
import { Observable } from 'rxjs';
import { Product, ObservableProduct } from '../../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public siteSearch = new FormControl('');
  public products$: Observable<Array<Product>>;

  constructor(private productsService: ProductsService, public searchSubject: ObservableProduct) { }

  ngOnInit() {
    this.siteSearch
      .valueChanges
      .pipe(debounceTime(400))
      .subscribe((search: string) => {
        this.products$ = this.productsService.get(search).pipe(map(x => x.items));
      });
  }

}
