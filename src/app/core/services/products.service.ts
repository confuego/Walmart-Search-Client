import { Injectable } from '@angular/core';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ListResponse } from '../models';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiKeyParam: HttpParams = new HttpParams().set('apiKey', '45jbeqz8wca6h5yqvp43cxgh');
  private baseUrl = 'http://api.walmartlabs.com/v1';

  constructor(private apiService: ApiService) { }

  get(search: string): Observable<ListResponse<Product>> {
    let params = this.apiKeyParam;
    params = params.set('query', search);
    return this.apiService.get<ListResponse<Product>>(this.baseUrl + '/search', params);
  }

  recommendations(product: Product): Observable<Array<Product>> {
    let params = this.apiKeyParam;
    params = params.set('itemId', product.itemId.toString());
    return this.apiService.get<Array<Product>>(this.baseUrl + '/nbp', params).pipe(map(x => this.mapErrors(x)));
  }

  private mapErrors(arr: Array<Product>): Array<Product> {
    if (Array.isArray(arr)) {
      return arr;
    }

    throw new HttpErrorResponse({ error: arr });
  }
}
