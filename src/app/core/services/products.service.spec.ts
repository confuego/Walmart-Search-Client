import { TestBed, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, ProductsService]
    });

    service = TestBed.get(ProductsService);
  });

  it('should be created', inject([ProductsService],
    () => {
    expect(service).toBeTruthy();
  }));
});
