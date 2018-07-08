import { TestBed, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Product, ListResponse } from '../models';
import { of, Observable } from 'rxjs';

describe('ProductsService', () => {
  let service: ProductsService;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {

    const spy = jasmine.createSpyObj('ApiService', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService, { provide: ApiService, useValue: spy }]
    });

    service = TestBed.get(ProductsService);
    apiServiceSpy = TestBed.get(ApiService);
  });

  it('should be created', inject([ProductsService],
    () => {
    expect(service).toBeTruthy();
  }));

  it('should get a valid product', () => {
    const stub: Observable<ListResponse<Product>> = of({
      query: '',
      sort: '',
      responseGroup: '',
      totalResults: 1,
      start: 1,
      numItems: 1,
      items: [new Product({ itemId: 1 })]
    });

    apiServiceSpy.get.and.returnValue(stub);

    expect(service.get('')).toBe(stub);
    expect(apiServiceSpy.get.calls.count()).toBe(1);
    expect(apiServiceSpy.get.calls.mostRecent().returnValue).toBe(stub);
  });
});
