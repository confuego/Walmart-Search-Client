import { ErrorHandler, Injectable } from '@angular/core';
import { ObservableError } from './core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerImpl implements ErrorHandler {

  constructor(private error$: ObservableError) { }

  public handleError(e: Error) {
    console.warn(e);
    if (e instanceof HttpErrorResponse) {
      this.error$.next(e);
    }
  }
}
