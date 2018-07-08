import { TestBed, inject } from '@angular/core/testing';
import { ErrorHandlerImpl } from './error.handler';

describe('ErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorHandlerImpl]
    });
  });

  it('should be created', inject([ErrorHandlerImpl], (service: ErrorHandlerImpl) => {
    expect(service).toBeTruthy();
  }));
});
