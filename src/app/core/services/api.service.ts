import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public get<T>(url: string, params: HttpParams | { [key: string]: string }): Observable<T> {
    return this.http.get(url, { params }) as Observable<T>;
  }

  constructor(protected http: HttpClient) { }
}
