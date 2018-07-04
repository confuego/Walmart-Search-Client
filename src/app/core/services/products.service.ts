import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from '../models/product';
import { Query } from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiKeyParam: HttpParams = new HttpParams().set('apiKey', '45jbeqz8wca6h5yqvp43cxgh');
  private baseUrl = 'http://api.walmartlabs.com/v1/search';

  constructor(private http: HttpClient) { }

  get(search: string): Observable<Array<Product>> {
    let params = this.apiKeyParam;
    params = params.set('query', search);
    return this.http.get<Query<Product>>(this.baseUrl, { params }).pipe(map(x => x.items)));
  }
}
