import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ListResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiKeyParam: HttpParams = new HttpParams().set('apiKey', '45jbeqz8wca6h5yqvp43cxgh');
  private baseUrl = 'http://api.walmartlabs.com/v1/search';

  constructor(private http: HttpClient) { }

  get(search: string): Observable<ListResponse<Product>> {
    let params = this.apiKeyParam;
    params = params.set('query', search);
    return this.http.get<ListResponse<Product>>(this.baseUrl, { params });
  }
}
