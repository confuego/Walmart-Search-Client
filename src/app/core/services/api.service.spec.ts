import { TestBed, inject } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
  });

  it('should be created', inject([HttpTestingController, ApiService],
    (_httpMock: HttpTestingController, service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
